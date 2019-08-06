import BaseRouter from './base'

export default class HistoryRouter extends BaseRouter {
  constructor(routeList) {
    super(routeList)  // 将routeList传给baseRouter
  }

  // push路由
  push(path) {
    window.history.pushState(null, null, path)
    this.renderHTML(path)
  }

  // 替换路由
  replace(path) {
    window.history.replaceState(null, null, path)
    this.renderHTML(path)
  }

  // 前往页面栈中的任一页面
  go(number) {
    history.go(number)
  }

  // 返回上一路由
  back() {
    history.back()
  }

  // 前往下一路由
  forward() {
    history.forward()
  }
  
  // 路由更新后渲染页面内容
  renderHTML(path) {
    this.render(path)
  }
  
}