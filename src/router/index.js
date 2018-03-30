import Vue from 'vue'
import Router from 'vue-router'


// 路由
import Home from '@/page/Home/Home'
import Products from '@/page/Products/Products'
import Flagship from '@/page/Flagship/Flagship'
import ShopDetails from '@/page/ShopDetails/ShopDetails'
import NotFound from '@/page/NotFound'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'Home',
            // 标记页面刚打开的页面
            alias: '/',
            component: Home,
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/flagship',
            name: 'Flagship',
            component: Flagship
        },
        {
            path: '/shopdetails',
            name: 'ShopDetails',
            component: ShopDetails
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }

    ]
})