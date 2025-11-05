import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MyExpenses from '@/views/MyExpenses.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import AddExpense from '@/views/AddExpense.vue'
import Manager from '@/views/Manager.vue'


const routes = [
  { path: '/',            name: 'Login', component: Login },
  { path: '/home',        name: 'Home', component: Home },
  { path: '/my-expenses', name: 'MyExpenses', component: MyExpenses },
  { path: '/add-expense', name: 'AddExpense', component: AddExpense },
  { path: '/about',       name: 'About', component: About },
    { path: '/manager',   name: 'Manager', component: Manager },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
