// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import ProductCatalog from './components/ProductCatalog.vue'
import ManageProducts from './components/ManageProducts.vue'

import './styles/style.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    {
        path: '/home',
        alias: '/',
        component: ProductCatalog
    },
    {
        path: '/manage-products',
        component: ManageProducts
    }
]

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
/* new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
}) */

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
