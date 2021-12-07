import { useState, useContext, useEffect } from 'react';
import { Button, Descriptions, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import { Router } from '../../route';
import * as routesConfig from '../../route/config';


const Layout = (props: any) => {
  const { setUser } = props
 
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const user = useContext(UserContext)
  const [pathname, setPathname] = useState('/user/behavior');
  const history = useHistory()

  useEffect(() => {
    if (user && user.userId) {
      setPathname('/user/behavior')
      history.push(pathname)
    }
  }, [])

  const content = (
    <Descriptions size="small" column={2}>
      <Descriptions.Item label="普通用户">{user.userName}</Descriptions.Item>
      <Descriptions.Item label="联系方式">
        <a href="#">{user.userName}</a>
      </Descriptions.Item>
      <Descriptions.Item label="创建时间">2021-12-1</Descriptions.Item>
      <Descriptions.Item label="更新时间">2021-12-3</Descriptions.Item>
      <Descriptions.Item label="备注">{user.role}</Descriptions.Item>
    </Descriptions>
  );


  const roleRoutesConfig = routesConfig["routes"].routes.filter(item => {
    if ('role' in item) {
      return item['role']?.includes(user.role)
    } else {
      return true
    }
  })


  const logout = () => {
    localStorage.removeItem('user')
    setUser({userId: 0, userName: '', role: ''})
    history.push('/login')
  }

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProLayout
        {...defaultProps}
        route={{ routes: roleRoutesConfig}}
        location={{ pathname }}
        waterMarkProps={{ content: '开发中...' }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              if (typeof(item.path) === 'string' && item.path !== pathname) {
                setPathname(item.path);
                history.push(item.path)
              }
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer
          content={content}
          extraContent={
            <Space size={24}>
              <Statistic title="公益次数" value={93} prefix={<LikeOutlined />}/>
            </Space>
          }
          extra={<Button key="0" onClick={logout}>退出登录</Button>}
        >
          <div style={{height: '90vh'}}>
            <Router config={roleRoutesConfig}/>
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={ changeSetting => setSetting(changeSetting) }
        disableUrlParams
      />
    </div>
  );
};

export default Layout