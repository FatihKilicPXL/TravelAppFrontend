<template>
  <main class="container">
    <header class="header">
      <h1>My Expenses</h1>
    </header>

    <!-- Quick Totals Summary -->
    <section class="summary">
      <p><strong>Total Expenses:</strong> €{{ totalCost.toFixed(2) }}</p>
      <p><strong>Total Distance:</strong> {{ totalDistance.toFixed(1) }} km</p>
      <p><strong>Number of Expenses:</strong> {{ expenses.length }}</p>
    </section>

    <section class="list">
      <Expense v-for="expense in expenses" :key="expense.id" :expense="expense"/>
    </section>
  </main>

  <button class="fab" @click="goToAddExpense">+</button>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Expense from '@/components/Expense.vue'

// Mock data
const expenses = [
  { id: 1, title: 'Business trip to Berlin', date: '2025-10-15', distance: 320, transport: 'Train', cost: 85.50, status: 'approved' },
  { id: 2, title: 'Bike commute', date: '2025-10-20', distance: 6.2, transport: 'Bike', cost: 2.10, status: 'pending' },
  { id: 3, title: 'Taxi from airport', date: '2025-10-10', distance: 15.4, transport: 'Taxi', cost: 35.00, status: 'rejected' }
]

const router = useRouter()

function goToAddExpense() {
  router.push({ name: 'AddExpense' })
}

// Computed totals for user story 6
const totalCost = computed(() => expenses.reduce((sum, e) => sum + e.cost, 0))
const totalDistance = computed(() => expenses.reduce((sum, e) => sum + e.distance, 0))
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  position: relative; /* needed for FAB positioning */
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

.summary {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Floating Action Button */
.fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary, #ae74ff);
  color: white;
  font-size: 2rem;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* Mobile-first design */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
</style>
