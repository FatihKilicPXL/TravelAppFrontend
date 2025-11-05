<template>
  <main class="container">
    <header class="header">
      <h1>Manage Trips</h1>
    </header>

    <section class="filters">
      <select v-model="selectedEmployee">
        <option value="">All Employees</option>
        <option v-for="emp in employees" :key="emp" :value="emp">{{ emp }}</option>
      </select>

      <select v-model="selectedTransport">
        <option value="">All Transport</option>
        <option v-for="type in transportTypes" :key="type" :value="type">{{ type }}</option>
      </select>

      <select v-model="selectedMonth">
        <option value="">All Months</option>
        <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
      </select>
    </section>

    <section class="list">
      <div v-for="trip in filteredTrips" :key="trip.id" class="trip-card">
        <h3>{{ trip.employee }}</h3>
        <p>{{ trip.title }}</p>
        <p><strong>Date:</strong> {{ trip.date }}</p>
        <p><strong>Transport:</strong> {{ trip.transport }}</p>
        <p><strong>Cost:</strong> ${{ trip.cost.toFixed(2) }}</p>
      </div>
      <p v-if="filteredTrips.length === 0" class="empty">No trips found</p>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// Mock data
const trips = ref([
  { id: 1, employee: 'Alice', title: 'Conference in Paris', date: '2025-09-10', transport: 'Plane', cost: 480.25 },
  { id: 2, employee: 'Bob', title: 'Client Visit', date: '2025-09-22', transport: 'Car', cost: 120.50 },
  { id: 3, employee: 'Alice', title: 'Team Meetup', date: '2025-10-05', transport: 'Train', cost: 65.00 },
  { id: 4, employee: 'Charlie', title: 'Workshop', date: '2025-10-20', transport: 'Bike', cost: 0 },
  { id: 5, employee: 'Bob', title: 'Sales Trip', date: '2025-11-01', transport: 'Plane', cost: 550.75 }
])

// Filters
const selectedEmployee = ref('')
const selectedTransport = ref('')
const selectedMonth = ref('')

const employees = [...new Set(trips.value.map(t => t.employee))]
const transportTypes = [...new Set(trips.value.map(t => t.transport))]
const months = [
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
]

const filteredTrips = computed(() => {
  return trips.value.filter(t => {
    const month = t.date.split('-')[1]
    return (
      (!selectedEmployee.value || t.employee === selectedEmployee.value) &&
      (!selectedTransport.value || t.transport === selectedTransport.value) &&
      (!selectedMonth.value || month === selectedMonth.value)
    )
  })
})
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
  text-align: center;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

select {
  flex: 1;
  min-width: 120px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trip-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.trip-card h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
  color: #333;
}

.trip-card p {
  margin: 0.25rem 0;
  color: #555;
  font-size: 0.9rem;
}

.empty {
  text-align: center;
  color: #888;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
</style>
