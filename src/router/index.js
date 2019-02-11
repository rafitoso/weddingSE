import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/components/${component}.vue`)
}

export default new Router({
  routes,
  mode: 'history'
})
