import { IRoute } from '../model/route';

export const routes: {routes: IRoute[]} = {
  routes: [
    { key: '0', path: '/login', component: 'Login' },
    { key: '1', path: '/welcome', component: 'UserBehaviorPage', role: ['general'] },
    { key: '2', path: '/user/behavior', name: '欢迎', component: 'UserBehaviorPage', icon: 'icon--sweat', role: ['general']  },
    { key: '3', path: '/user/donate', name: '公益活动', component: 'UserDonateInfo', icon: 'icon--sweat', role: ['general']  },
    { key: '4', path: '/institution/check', name: '机构审查', component: 'InstitutionCheck', icon: 'icon--sweat', role: ['institution']  }
  ]
}