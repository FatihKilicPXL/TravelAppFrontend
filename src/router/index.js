import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MyExpenses from '@/views/MyExpenses.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import AddExpense from '@/views/AddExpense.vue'

const routes = [
  { path: '/',            name: 'Login', component: Login },
  { path: '/home',        name: 'Home', component: Home },
  { path: '/my-expenses', name: 'MyExpenses', component: MyExpenses },
  { path: '/add-expense', name: 'AddExpense', component: AddExpense },
  { path: '/about',       name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
