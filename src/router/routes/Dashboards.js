import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path:'/dashboard/home',
    component : lazy(() => import('../../views/dashboard/home')),
    exact:true
  },
  {
    path:'/dashboard/event',
    component : lazy(() => import('../../views/dashboard/events')),
    exact:true
  },
  {
    path:'/dashboard/newsletter',
    component : lazy(() => import('../../views/dashboard/newsletter')),
    exact:true
  },
  {
    path:'/dashboard/company',
    component : lazy(() => import('../../views/dashboard/company')),
    exact:true
  },
  {
    path:'/dashboard/user',
    component : lazy(() => import('../../views/dashboard/user')),
    exact:true
  },
  {
    path:'/dashboard/order',
    component : lazy(() => import('../../views/dashboard/orders')),
    exact:true
  }
]

export default DashboardRoutes
