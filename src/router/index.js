import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Settings = () => import('@/views/settings/Settings')
const ViewSettings = () => import('@/views/settings/ViewSettings')
const Products = () => import('@/views/products/Products')
const ProductModify = () => import('@/views/products/ProductModify')
const ProductDetails = () => import('@/views/products/ProductDetails')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'settings',
          meta: {
            label: 'Settings'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'view-settings',
              component: ViewSettings
            },
            {
              path: 'edit',
              name: 'edit-settings',
              component: Settings
            },
          ],
        },
        {
          path: 'products',
          meta: {
            label: 'Products'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'products',
              component: Products
            },
            {
              path: ':id',
              name: 'product-details',
              component: ProductDetails
            },
            {
              path: 'create',
              name: 'product-modify',
              component: ProductModify
            },
            {
              path: ':id/edit',
              name: 'product-modify',
              component: ProductModify
            },
          ],
        },
      ]
    },
  ]
}

