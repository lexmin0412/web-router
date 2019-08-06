import BaseRouter from './base'

export default class HashRouter extends BaseRouter {
  constructor(routeList) {
    super(routeList)  // 将routeList传给baseRouter

    // 监听hashChange事件
    window.addEventListener('hashchange', e => {

    })
  }

  // push路由
  push(path) {
    window.location.hash = path
    this.renderHTML(path)
  }

  // 替换路由
  replace(path) {
    window.location.replace(this.getUrl(path))
  }

  // 拼接页面链接
  getUrl(path) {
    let url = window.location.href
    const i = url.indexOf('#')
    const base = i > 0 ? href.slice(0,i) : href
    return `${base}#${path}`
  }

  // 路由更新后渲染页面内容
  renderHTML(path) {
    this.render(path)
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
}