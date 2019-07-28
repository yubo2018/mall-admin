// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import './styles/index.less'

import App from './App'
import routers from './router'
import store from './store'
import * as Api from './common/api'
import Common from './common/common'


Vue.use(VueRouter)
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.GLOBAL = Common

const router = new VueRouter({
    mode: 'hash',
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})



const that = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

router.beforeEach((route, redirect, next) => {
    document.title = route.meta.title ? route.meta.title : ''
    // 如果将要跳转的页面需要登录 用户没有登录将跳转登录页面
    if (!Common.getStorage('user_token')) {
        Common.jumpToLogin()
    }
    // 如果未匹配到路由 跳转至首页 (防止用户手动输入地址出错)
    if (route.matched.length === 0) {
        redirect.name ? next({ name: redirect.name }) : next('/index')
    } else {
        next()
    }
})


export default that
