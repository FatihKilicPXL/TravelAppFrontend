<template>
  <section class="filters">
    <input type="text" placeholder="Search by purpose..." v-model="searchModel" />

    <select v-model="employeeModel">
      <option value="">All Employees</option>
      <option v-for="e in employees" :key="e" :value="e">{{ e }}</option>
    </select>

    <select v-model="transportModel">
      <option value="">All Transport Types</option>
      <option v-for="t in transports" :key="t" :value="t">{{ t }}</option>
    </select>

    <select v-model="monthModel">
      <option value="">All Months</option>
      <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
    </select>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['employee', 'transport', 'month', 'search'])
const emit = defineEmits(['update:employee', 'update:transport', 'update:month', 'update:search'])

const employeeModel = computed({
  get: () => props.employee,
  set: val => emit('update:employee', val)
})
const transportModel = computed({
  get: () => props.transport,
  set: val => emit('update:transport', val)
})
const monthModel = computed({
  get: () => props.month,
  set: val => emit('update:month', val)
})
const searchModel = computed({
  get: () => props.search,
  set: val => emit('update:search', val)
})

// Mocked lists
const employees = ['Alex Johnson', 'Maria Garcia', 'David Chen', 'Emily White']
const transports = ['Business Trip', 'Bike Commute']
const months = [
  { label: 'October', value: '10' },
  { label: 'November', value: '11' }
]
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

input, select {
  flex: 1;
  min-width: 160px;
  padding: 0.65rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
}
</style>
