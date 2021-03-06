import React from 'react';
import { Form, Space, Button } from 'antd';
import { PermissionTreeSelect } from '@sensoro/sensoro-design';
import { Permission } from '@sensoro/sensoro-design/es/permission-tree-select/types';

const permissions: Permission[] = [
  { id: '001', name: '模块1', type: 1, parentId: '0' },
  { id: '001001', name: '页面1', type: 2, parentId: '001' },
  { id: '001002', name: '页面2', type: 3, parentId: '001' },
  { id: '001001001', name: '按钮1', type: 3, parentId: '001001' },
  { id: '001001002', name: '按钮2', type: 3, parentId: '001001' },
  { id: '002', name: '模块2', type: 1, parentId: '0' },
  { id: '002001', name: '页面2', type: 2, parentId: '002' },
  { id: '003', name: '模块3', type: 1, parentId: '0' },
  { id: '003001', name: '页面1', type: 2, parentId: '003' },
  { id: '003002', name: '页面2', type: 3, parentId: '003' },
  { id: '003001001', name: '按钮1', type: 3, parentId: '003001' },
  { id: '003001002', name: '按钮2', type: 3, parentId: '003001' }
];

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="permissions">
        <PermissionTreeSelect
          readonly
          list={permissions}
          value={[
            { id: '002001', parentId: '002' },
            { id: '002', parentId: '0' },
            { id: '003001002', parentId: '003001' },
            { id: '003001', parentId: '003' },
            { id: '003', parentId: '0' }
          ]}
        />
      </Form.Item>
      <Space>
        <Button
          onClick={() => {
            form.setFieldsValue({
              permissions: [
                { id: '002001', parentId: '002' },
                { id: '002', parentId: '0' },
                { id: '003001002', parentId: '003001' },
                { id: '003001', parentId: '003' },
                { id: '003', parentId: '0' }
              ]
            });
          }}
        >
          设置数据
        </Button>
      </Space>
    </Form>
  );
};
