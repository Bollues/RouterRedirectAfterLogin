import { routes as routesConfig } from '../../route/config';
import IconFont from '../../Iconfont';

const routes = routesConfig['routes']
routes.map( (item, idx) => {
  routes[idx].icon = <IconFont key={item.key} type={item.icon}/>
})

export default {
  route: {
    path: '/',
  },
  location: {
    pathname: '/',
  },
};