import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './registForm.scss';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const midFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 10,
    },
  },
};

export const RegistForm = (props: any) => {
  const {switchPage} = props
  const [form] = Form.useForm()

  const onFinish = () => {
    switchPage(0)
  }

  const [value, setValue] = React.useState('general')

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="regist-form-background">
      <div className="regist-form-container">
        <div className="title">
          <span style={{ fontSize: "20px", color: "#000000D9" }}>注册</span>
        </div>

        <Form
          {...formItemLayout}
          form={form}
          name="register"
          className="registForm"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '邮箱格式无效!',
              },
              {
                required: true,
                message: '请输入你的邮箱!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入你的密码!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认你的密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次密码不一致!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={'general'}>个人</Radio>
              <Radio value={'institution'}>机构</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...midFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
}