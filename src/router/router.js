import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/frontend/HomePage.vue'
import AboutPage from '../components/pages/frontend/AboutPage.vue'
import ClassesPage from '../components/pages/frontend/ClassesPage.vue'
import Trainers from '../components/pages/frontend/Trainers.vue'
import Pricing from '../components/pages/frontend/Pricing.vue'
import Blog from '../components/pages/frontend/Blog.vue'
import Contac from '../components/pages/frontend/Contac.vue'

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/about',
        component:AboutPage
    },
    {
        path:'/classes',
        component:ClassesPage
    },
    {
        path:'/trainers',
        component:Trainers
    },
    {
        path:'/pricing',
        component:Pricing
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/contact',
        component:Contac
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router