// 路由列表 相当于react技术栈项目中的route.js

export const routeList = [
  {
    path: '/',
    name: 'index',
    component: 'This is index page'
  },
  {
    path: '/page1',
    name: 'page1',
    component: 'This is page1...'
  },
  {
    path: '/page2',
    name: 'page2',
    component: 'This is page2...'
  },
  {
    path: '*',
    name: 'notFound',
    component: '404 NOT FOUND'
  }
]