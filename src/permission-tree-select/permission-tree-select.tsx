import React, { useEffect, useContext, useState, useRef } from 'react';
import classNames from '@pansy/classnames';
import { arrayToTree } from '@pansy/array-to-tree';
import { Spin, Divider, Tooltip, Space } from 'antd';
import { TreeProps } from 'antd/es/tree';
import IconFont from '../icon';
import Tree from '../tree';
import Empty from '../empty';
import { ConfigContext } from '../config-provider';
import { Permission, PermissionValue } from './types';

export interface PermissionTreeSelectProps {
  /** 额外的样式类 */
  className?: string;
  /** 额外的样式 */
  style?: React.CSSProperties;
  /** 加载数据中 */
  loading?: boolean;
  /** 根节点的值 */
  rootId?: string;
  /** 权限列表 */
  list: Permission[];
  /** 是否是只读模式 */
  readonly?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 选中的权限 */
  value?: PermissionValue[];
  /** 权限改变的回调 */
  onChange?: (value: PermissionValue[]) => void;
}

export const PermissionTreeSelect: React.FC<PermissionTreeSelectProps> = ({
  className,
  loading,
  list,
  readonly = false,
  disabled,
  value = [],
  style,
  rootId = '0',
  onChange
}) => {
  /** 转换后的树数据 */
  const [treeData, setTreeData] = useState<Permission[]>([]);
  /** 内部维护的Value，值为 parentId_id */
  const [insideValue, setInsideValue] = useState<Record<string, string[]>>({});
  const checkedData = useRef<Record<string, string[]>>({});
  const permissionMap = useRef<Record<string, Permission>>({});

  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('permission-tree-select');

  useEffect(() => {
    const { treeData, treeMap } = arrayToTree<Permission>(list, {
      rootId: '0',
      transformItem: (item) => {
        return {
          ...item,
          key: `${item.parentId}_${item.id}`,
          title: item.name
        };
      },
      getTreeMapKey: (item) => `${item.parentId}_${item.id}`
    });

    permissionMap.current = treeMap;
    setTreeData(treeData);
    linkageValue(value);
  }, [JSON.stringify(list)]);

  useEffect(() => {
    linkageValue(value);
  }, [JSON.stringify(value)]);

  /**
   * 同步值变化
   * @param value
   * @returns
   */
  const linkageValue = (value: PermissionValue[] = []) => {
    if (!Object.keys(permissionMap.current).length) return;

    // 去除根节点
    let valueList = value
      .filter((item) => item.parentId !== '0')
      .map((item) => `${item.parentId}_${item.id}`);

    // 去除跟节点未全部选中的节点
    valueList = valueList.filter((item, index) => {
      return getChildrenIsAllSelect(item, valueList);
    });

    const nextVal = valueList.reduce((prev, cur) => {
      const info = permissionMap.current[cur];

      if (info) {
        const key = info.parentIds[0];

        if (!prev[key]) {
          prev[key] = [cur];
        } else {
          prev[key].push(cur);
        }
      }

      return prev;
    }, {});

    checkedData.current = nextVal;
    setInsideValue(nextVal);
  };

  /**
   * 使用递归判断所有子节点是否都选中
   * @param key
   * @param list
   * @returns 返回 true 表示所有子节点已经选中
   */
  function getChildrenIsAllSelect(key: string, list: string[]): boolean {
    const info = permissionMap.current[key];

    // 不存在的数据
    if (!info) return false;

    const children = info.children;

    // 叶子节点直接返回
    if (!children || children.length === 0) return true;

    let result = true;

    function checkChildrenIsAllSelect(items: Permission[]) {
      const keys = items.map((item) => `${item.parentId}_${item.id}`);

      for (let i = 0; i < keys.length; i++) {
        // 存在未选中的节点
        if (!list.includes(keys[i])) {
          result = false;
          return;
        }

        const childrenInfo = permissionMap.current[keys[i]];

        if (!childrenInfo) {
          continue;
        }

        if (!childrenInfo.children || childrenInfo.children.length === 0) {
          continue;
        };

        checkChildrenIsAllSelect(childrenInfo.children ?? []);
      }
    }

    checkChildrenIsAllSelect(children);

    return result;
  }

  /**
   * 树选择事件回调
   * @param moduleId
   * @param keys
   */
  const handleCheck = (moduleId: string, keys: string[]) => {
    checkedData.current = {
      ...checkedData.current,
      [`${moduleId}`]: keys
    };

    /** 获取所有选中的节点 */
    const allKeys = Object.keys(checkedData.current).reduce((prev: string[], current) => {
      const currentKeys = checkedData.current[current];

      return [...prev, ...currentKeys];
    }, []);

    /**
     * 补全选中节点的父节点，并去重！
     */
    const latestAllKeys = new Set(
      allKeys.reduce((prev: string[], current) => {
        return [...prev, current, ...getChildrenParents(current)];
      }, [])
    );

    setInsideValue(checkedData.current);
    handleChange(Array.from(latestAllKeys));
  };

  /**
   * 获取父节点的ID组合
   * @param key
   * @returns
   */
  const getChildrenParents = (key: string) => {
    const permissionInfo = permissionMap.current[key];

    if (!permissionInfo) return [];

    const pIds = [rootId, ...permissionInfo.parentIds];

    let index = 0;
    const parentKeys = [];

    while (index < pIds.length - 1) {
      parentKeys.push(`${pIds[index]}_${pIds[index + 1]}`);

      index++;
    }

    return parentKeys;
  };

  /**
   * 值变化的回调
   * @param keys
   */
  const handleChange = (keys: string[] = []) => {
    onChange?.(
      keys.map((item) => ({
        id: item.split('_')[1],
        parentId: item.split('_')[0]
      }))
    );
  };

  return (
    <Spin spinning={!!loading}>
      <div className={classNames(prefixCls, className)} style={style}>
        {list.length === 0 && <Empty />}
        {treeData.map((item: any, index) => {
          const treeProps: TreeProps = {
            checkable: true,
            disabled: disabled || readonly,
            checkedKeys: insideValue[item.id] ?? [],
            defaultExpandAll: !readonly,
            selectable: false,
            treeData: item.children,
          };

          if (readonly) {
            treeProps.expandedKeys = (insideValue[item.id] ?? []).reduce((prev: string[], current) => {
              return [...prev, current, ...getChildrenParents(current)];
            }, []);
          }

          return (
            <div key={item.key} className={`${prefixCls}-item`}>
              <div className={`${prefixCls}-title`}>{item.name}</div>

              <Tree
                {...treeProps}
                // TODO: antd 4.17.0 支持
                // fieldNames={{
                //   key: 'id',
                //   title: 'name',
                //   children: 'children',
                // }}
                onCheck={(checkedKeys) => {
                  handleCheck(item.id, checkedKeys as string[]);
                }}
                titleRender={(node) => {
                  if (node['type'] === 2) {
                    return (
                      <Space size={4}>
                        <div>{node.title}</div>
                        <Tooltip title="功能授权">
                          <div className={`${prefixCls}-auth-icon`}>
                            <IconFont type="icon-auth" />
                          </div>
                        </Tooltip>
                      </Space>
                    );
                  }

                  return node.title;
                }}
              />

              {treeData.length - 1 !== index && <Divider dashed />}
            </div>
          );
        })}
      </div>
    </Spin>
  );
};
