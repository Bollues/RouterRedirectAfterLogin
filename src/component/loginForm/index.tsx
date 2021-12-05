import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './loginForm.scss';

export const LoginForm = (props: any) => {
  const { setUser } = props
  const history = useHistory()

  const onFinish = (values: any) => {
    const { uername, password } = values
    console.log('Received values of form: ', values)
    setUser(uername)
    localStorage.setItem('username', uername)
    history.push('/welcome')
  };

  return (
    <div className="login-form-background">
      <div className="login-form-container">
        <div className="title">
          <span style={{ fontSize: "20px", color: "#000000D9" }}>登录</span>
        </div>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="uername"
            rules={[
              {
                required: true,
                message: '请输入你的用户名!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入你的密码!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或者 <a href="">立即注册!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}