/**
 * title: 基本
 * desc: 头像有三种尺寸，两种形状可选。
 */
import React from 'react';
import { Space } from 'antd';
import { Avatar } from '@sensoro/sensoro-design';

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <Avatar size={64} />
        <Avatar size={40} />
        <Avatar size={32} />
      </Space>
      <Space>
        <Avatar size={64} shape="square" />
        <Avatar size={40} shape="square" />
        <Avatar size={32} shape="square" />
      </Space>
    </Space>
  );
};
