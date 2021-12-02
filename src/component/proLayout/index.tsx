import { useState, useContext } from 'react';
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { UserContext } from '../../App';
import UserBehavior from '../userBehavior';
import { useHistory } from 'react-router';


const Layout = (props: any) => {
  const {setUser} = props

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState('/welcome');
  const userName = useContext(UserContext)
  const history = useHistory()

  const content = (
    <Descriptions size="small" column={2}>
      <Descriptions.Item label="普通用户">{userName}</Descriptions.Item>
      <Descriptions.Item label="联系方式">
        <a href="#">18900000000@163.com</a>
      </Descriptions.Item>
      <Descriptions.Item label="创建时间">2021-12-1</Descriptions.Item>
      <Descriptions.Item label="更新时间">2021-12-3</Descriptions.Item>
      <Descriptions.Item label="备注">ecust</Descriptions.Item>
    </Descriptions>
  );

  const logout = () => {
    localStorage.removeItem('username')
    setUser('')
    history.push('/login')
  }

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProLayout
        {...defaultProps}
        location={{ pathname }}
        waterMarkProps={{ content: '开发中' }}
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
          tabList={[
            {
              tab: '公益记录',
              key: 'base',
            },
            // {
            //   tab: '详细信息',
            //   key: 'info',
            // },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic title="公益次数" value={93} suffix="/ 100" prefix={<LikeOutlined />}/>
            </Space>
          }
          extra={<Button key="0" onClick={logout}>退出登录</Button>}
        >
          <div style={{height: '90vh',}}>
            <UserBehavior />
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