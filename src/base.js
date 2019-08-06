const APP_CONTAINER = document.getElementById('app')

export default class BaseRouter {
  constructor(routeList) {
    this.routeList = routeList
  }

  render(path) {
    let element = this.routeList.find(route => route.path === path)
    element = element ? element : this.routeList.find(route => route.path === '*')
    APP_CONTAINER.innerHTML = element.component
  }
}