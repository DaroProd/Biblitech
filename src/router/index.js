import  { createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Categories from '@/pages/Categories'
import ProductDetails from '@/pages/ProductDetails'
import Checkout from '@/pages/Checkout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    props: true
  },
  {
    path: '/categories/:type',
    name: 'Categories',
    component: Categories,
    props: true
  },
  {
    path: '/products/:productID',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
