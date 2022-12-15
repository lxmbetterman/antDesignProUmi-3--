// 基本的表单数据域控制展示，包含布局、初始化、验证、提交。
import { Button, Checkbox, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    // alert(1);
    return () => {
      // alert(2);
    };
  }, []); // 仅在 props.friend.id 发生变化时，重新订阅

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelWrap
      colon={false}
    >
      <Form.Item
        label="超长标签文案超长标签文案超长标签文案超长标签文案超"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password2"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          mode={'multiple'}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'disabled',
              disabled: true,
              label: 'Disabled',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
          ]}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
