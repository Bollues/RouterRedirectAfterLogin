import { routes as routesConfig } from '../../route/config';
import IconFont from '../../Iconfont';

const routes = routesConfig['routes']
routes.map( (item, idx) => {
  routes[idx].icon = <IconFont type={item.icon}/>
})

export default {
  
  route: {
    path: '/',
    routes
    // routes: [
    //   {
    //     path: '/welcome',
    //     name: '欢迎',
    //     icon: routes[1].icon,
    //     component: './Welcome',
    //   },
    //   {
    //     path: '/test',
    //     name: '管理页面',
    //     icon: <CrownOutlined />,
    //     component: './Welcome',
    //   }
    // ]
  },
  location: {
    pathname: '/',
  },
};