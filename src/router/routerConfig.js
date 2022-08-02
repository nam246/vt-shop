import { createRouter, createWebHistory } from "vue-router";
import { auth } from '../firebase/firebaseInit'
import Home from '../views/Home.vue'
import AllProducts from '../views/AllProducts.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import UserView from '../views/UserView.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/all-products',
        name: 'AllProducts',
        component: AllProducts
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/user/:id',
        name: 'UserView',
        component: UserView
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    if(requiresAuth && auth.currentUser.email == null) {
        next('/')
    } else if(requiresAuth && auth.currentUser != null) {
        next()
    } else {
        next()
    }
})




export default router