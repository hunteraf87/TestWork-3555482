import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/users',
            name: 'users',
            component: () => import('./components/views/Users'),
            alias: '/'
        },
        {
            path: '/countries',
            name: 'countries',
            component: () => import('./components/views/Countries')
        }
    ]
})

export default router
