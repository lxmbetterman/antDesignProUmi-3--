import React from 'react';
import styles from './index.less';
import { Tabs, Button } from 'antd';

import useFetch from '@/hooks/fetch';
import { useRequest } from 'umi';
import { login } from '../../../services/ant-design-pro/api';
import { useEffect } from 'react';

const Login: React.FC = () => {
  const items = [
    { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
  ];

  // useContext 全局配置
  useFetch('123', undefined, {});

  // function editUsername(): Promise<void> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   });
  // }

  const { loading, run } = useRequest(login, {
    manual: true,
  });

  useEffect(() => {
    run({ username: 'admin', password: '123456', type: 'account' });
  }, []);
  return (
    <div className={styles.container}>
      {loading ? 'Loading' : 'unLoding'}
      <Button onClick={() => run({ username: 'admin', password: '123456', type: 'account' })}>
        Login
      </Button>
      <Tabs items={items} />
    </div>
  );
};

export default Login;
