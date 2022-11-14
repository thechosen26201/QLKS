import { createRouter, createWebHistory } from 'vue-router';
import MsHome from './components/layouts/ms-container.vue';
import MsAccommodation from '../src/components/layouts/ms-accommodation.vue';
import MsOrder from '../src/components/layouts/ms-order.vue';

const routes = [
    {
        path: '/home',
        component: MsHome
    },
    {
        path: '/accommodation',
        component: MsAccommodation
    },
    {
        path: '',
        component: MsHome
    },
    {
        path: '/order',
        component: MsOrder
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router