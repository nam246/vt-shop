import { createRouter, createWebHistory } from "vue-router";
import AddProducts from '../views/AddProducts.vue'
import Orders from '../views/Orders.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/add-products',
        name: 'AddProducts',
        component: AddProducts
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router