import { IRoute } from '../model/route';

export const routes: {routes: IRoute[]} = {
  routes: [
    { key: '0', path: '/login', component: 'Login' },
    { key: '1', path: '/general/page1', name: '欢迎', component: 'GeneralOnePage', icon: 'icon--sweat', role: ['general']  },
    { key: '2', path: '/general/page2', name: '页面2', component: 'GeneralTwoPage', icon: 'icon--sweat', role: ['general']  },
    { key: '3', path: '/admin/page1', name: '欢迎', component: 'AdminOnePage', icon: 'icon--sweat', role: ['admin']  }
  ]
}