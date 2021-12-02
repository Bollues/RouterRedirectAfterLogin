import { IRoute } from '../model/route';

export const routes: {routes: IRoute[]} = {
  routes: [
    // { key: '0', path: '/login', component: 'Login' },
    { key: '1', path: '/welcome', name: '欢迎', component: 'Welcome', icon: 'icon--sweat' },
    { key: '2', path: '/user/behavior', name: '公益活动', component: 'UserDonateInfo', icon: 'icon--sweat' },
    { key: '3', path: '/institution/check', name: '机构审查', component: 'InstitutionCheck', icon: 'icon--sweat' }
  ]
}