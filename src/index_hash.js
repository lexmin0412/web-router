import HashRouter from './hash'
import HistoryRouter from './history'
import { routeList } from './routeList'

class WebRouter {

  constructor({ mode = 'hash', routeList }) {
    this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList)
  }

  // push路由
  push(path) {
    this.router.push(path)
  }

  // 替换路由
  replace(path) {
    this.router.replace(path)
  }

  // 前往页面栈中的任一页面
  go(number) {
    this.router.go(number)
  }

  // 返回上一路由
  back() {
    this.router.back()
  }

  // 前往下一路由
  forward() {
    this.router.forward()
  }
}

// 初始化路由方式
let currentRouterMethod = 'hash'

let webRouter = new WebRouter({
  mode: currentRouterMethod,
  routeList
})

// 切换路由方式
// document.getElementById('toggle-btn').addEventListener('click', function(e) {
//   // window.location.href = window.location.origin
//   console.log(window.location);
  
//   // if ( currentRouterMethod === 'hash' ) {
//   //   currentRouterMethod = 'history'
//   //   document.getElementById('route-text').innerText = currentRouterMethod
//   //   InitializeRoute(currentRouterMethod)
//   // } else {
//   //   currentRouterMethod = 'hash'
//   //   document.getElementById('route-text').innerText = currentRouterMethod
//   //   InitializeRoute(currentRouterMethod)
//   // }
// })

// 获取路由切换按钮列表
const routeListDOM = document.querySelector('.route-list')

// 初始化
InitializeRoute(currentRouterMethod)

// 初始化路由及路由切换按钮点击事件绑定
function InitializeRoute(MODE = 'history') {
  webRouter = new WebRouter({
    mode: MODE,
    routeList
  })
  removeListener()
  bindListener()
}

// 绑定事件
function bindListener() {
  routeListDOM.addEventListener('click', handleRouteClick)
}

// 移除绑定事件
function removeListener() {
  routeListDOM.removeEventListener('click', handleRouteClick)
}

// 路由点击切换
function handleRouteClick(e) {
  console.log('window.location',window.location);
  console.log('window.history',window.history);
  const url = e.target.dataset.url
  url.indexOf('/') > -1 ? webRouter.push(url) : webRouter.go(url)
}