// 表单方法调用
// 通过 Form.useForm 对表单数据域进行交互。

/**
 *  - noStyle 用于包裹嵌套的 Form.Item
 *  - Form.useFormInstance# 4.20.0 新增，获取当前上下文正在使用的 Form 实例，常见于封装子组件消费无需透传 Form 实例：
 *  - shouldUpdate  判断Form.Item 是否重新渲染
 *  - utoComplete={'off'} 表单不填充
 *  - const form2 = Form.useFormInstance(); 表单组件的子组件内部，直接获取上下文表单的实例对象
 */

import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  const Sub = () => {
    const form2 = Form.useFormInstance(); // 与const [form] = Form.useForm(); 同一个实例对象

    return <Button onClick={() => form2.setFieldsValue({})} />;
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} autoComplete={'off'}>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {(a) => {
          console.log(a, '111');
          return <pre>{JSON.stringify(form.getFieldsValue(), null, 4)}</pre>;
        }}
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
      <Sub />
    </Form>
  );
};

export default App;
