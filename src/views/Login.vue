<template>
  <main class="container">
    <header class="header">
      <h1>Login</h1>
    </header>

    <section class="form-section">
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="Username">Username</label>
          <input id="Username" type="text" v-model="Username" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
        </div>

        <button class="login-btn" type="submit">Sign In</button>
      </form>
      <div>{{ errorMessage }}</div>
    </section>
  </main>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MyExpenses from './MyExpenses.vue'

const router = useRouter()
const Username = ref('')
const password = ref('')
const errorMessage = ref('')

async function login() {
  try {
    const res = await axios.post('https://localhost:7209/api/Auth/login', {
      username: Username.value,
      password: password.value
    })

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user))

    if(res.data.user.role === 1) router.push({name: 'Manager' })   
    else                         router.push({name: 'MyExpenses' })

  } catch (err) {
    errorMessage.value = err.response?.data
  }
}

</script>


<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  font-size: 0.9rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.login-btn {
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: var(--md-sys-color-primary, #ae74ff);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.login-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .container {
    padding: 3rem 2rem;
  }
}
</style>
