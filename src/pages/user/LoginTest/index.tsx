import React from 'react';
import styles from './index.less';
import { Tabs } from 'antd';

const Login: React.FC = () => {
  const items = [
    { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
  ];
  return (
    <div className={styles.container}>
      Login
      <Tabs items={items} />;
    </div>
  );
};

export default Login;
