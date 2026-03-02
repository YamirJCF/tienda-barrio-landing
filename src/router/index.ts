import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BASE_TITLE = 'Tienda Barrio Pro'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: `${BASE_TITLE} | Sistema de gestión para tiendas de barrio`,
            description: 'Registra tus ventas, controla tu inventario y conoce tu ganancia real desde el celular. Sin papel, sin Excel. Gratis para los primeros 100 tenderos fundadores.',
        },
    },
    {
        path: '/finanzas',
        name: 'finanzas',
        component: () => import('../views/FinanzasView.vue'),
        meta: {
            title: `Finanzas | ${BASE_TITLE} — Reportes de ganancia para tu tienda`,
            description: 'Conoce tu ganancia neta, margen real y ticket promedio cada día. Tienda Barrio Pro calcula automáticamente tus finanzas desde el celular.',
        },
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: () => import('../views/InventarioView.vue'),
        meta: {
            title: `Inventario | ${BASE_TITLE} — Control de stock para tiendas de barrio`,
            description: 'Controla tu inventario desde el celular. Tienda Barrio Pro detecta qué productos rotan y te avisa antes del quiebre de stock.',
        },
    },
    {
        path: '/operacion',
        name: 'operacion',
        component: () => import('../views/OperacionView.vue'),
        meta: {
            title: `Operación | ${BASE_TITLE} — Empleados y fiados bajo control`,
            description: 'Gestiona empleados con acceso por turno y lleva el control de fiados con fecha y monto. Sin cuadernos, sin errores.',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

// ── SEO: Update title and meta description on every navigation ──
router.afterEach((to) => {
    const meta = to.meta

    // Title
    const title = meta?.title as string | undefined
    document.title = title ?? BASE_TITLE

    // Meta description
    const description = meta?.description as string | undefined
    if (description) {
        let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
        if (!descTag) {
            descTag = document.createElement('meta')
            descTag.name = 'description'
            document.head.appendChild(descTag)
        }
        descTag.content = description
    }
})

export default router
