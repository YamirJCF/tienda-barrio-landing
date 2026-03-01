import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/finanzas',
        name: 'finanzas',
        component: () => import('../views/FinanzasView.vue'),
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: () => import('../views/InventarioView.vue'),
    },
    {
        path: '/operacion',
        name: 'operacion',
        component: () => import('../views/OperacionView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
