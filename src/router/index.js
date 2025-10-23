import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MyExpenses from '@/views/MyExpenses.vue'
import About from '@/views/About.vue'
import AddExpense from '@/views/AddExpense.vue'

const routes = [
  { path: '/', component: MyExpenses },
  { path: '/add-expense', name: 'AddExpense', component: AddExpense },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
 