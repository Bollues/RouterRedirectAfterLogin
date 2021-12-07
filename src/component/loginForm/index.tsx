import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './loginForm.scss';
import { postUserLogin } from '../../api/user';

export const LoginForm = (props: any) => {
  const { setUser } = props
  const { switchPage } = props
  const history = useHistory()
  const [role, setRole] = useState('general')

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      setUser(user)
      history.push('/user/behavior')
    }
  }, [])

  const onRegist = (e: any) => {
    e.preventDefault()
    switchPage(1)
  }

  const onChange = (e: any) => {
    setRole(e.target.value);
  };



  const onFinish = (values: any) => {
    const { uername, password } = values
    postUserLogin(uername, password, role).then((res) => {
      if (res.data.code === 200) {
        const { userId, userName, userRole } = res.data.object
        const user = { userId, userName, role: userRole }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        history.push('/user/behavior')
      } else { window.alert(res.data.msg) }
    }).catch(e => e)

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
            <Radio.Group onChange={onChange} value={role}>
              <Radio value={'general'}>个人</Radio>
              <Radio value={'institution'}>机构</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item style={{ marginBottom: '5px' }}>
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
            或者 <a href="#" onClick={e => onRegist(e)}>立即注册!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}