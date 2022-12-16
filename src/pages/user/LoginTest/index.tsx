import React from 'react';
import styles from './index.less';
import { Tabs } from 'antd';

import useFetch from '@/hooks/fetch';

const Login: React.FC = () => {
  const items = [
    { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
  ];

  // useContext 全局配置
  useFetch('123', undefined, {});
  return (
    <div className={styles.container}>
      Login
      <Tabs items={items} />
    </div>
  );
};

export default Login;
