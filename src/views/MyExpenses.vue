<template>
  <main class="container">
    <header class="header">
      <h1>My Expenses</h1>
    </header>

    <section class="list">
      <Expense v-for="expense in expenses" :key="expense.id" :expense="expense"/>
    </section>
  </main>
</template>

<script setup>
import Expense from '@/components/Expense.vue'

// Mock data (for now)
const expenses = [
  {
    id: 1,
    title: 'Business trip to Berlin',
    date: '2025-10-15',
    distance: 320,
    transport: 'Train',
    cost: 85.50,
    status: 'approved'
  },
  {
    id: 2,
    title: 'Bike commute',
    date: '2025-10-20',
    distance: 6.2,
    transport: 'Bike',
    cost: 2.10,
    status: 'pending'
  },
  {
    id: 3,
    title: 'Taxi from airport',
    date: '2025-10-10',
    distance: 15.4,
    transport: 'Taxi',
    cost: 35.00,
    status: 'rejected'
  }
]
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.header {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Mobile-first design */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
</style>
