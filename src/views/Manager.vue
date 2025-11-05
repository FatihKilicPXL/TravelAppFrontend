<template>
  <main class="container">
    <header class="header">
      <h1>Reimbursement Requests</h1>
    </header>

    <RequestFilters
      v-model:employee="filters.employee"
      v-model:transport="filters.transport"
      v-model:month="filters.month"
      v-model:search="filters.search"
    />

    <ReimbursementTable
      :requests="filteredRequests"
      @approve="approveRequest"
      @reject="rejectRequest"
    />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import RequestFilters from '@/components/RequestFilters.vue'
import ReimbursementTable from '@/components/ReimbursementTable.vue'

// Mock data
const requests = ref([
  { id: 1, employee: 'Alex Johnson', date: '2025-10-25', transport: 'Business Trip', purpose: 'Client Meeting in New York', amount: 1250.00, status: 'Pending' },
  { id: 2, employee: 'Maria Garcia', date: '2025-10-24', transport: 'Bike Commute', purpose: 'Daily commute for October', amount: 42.50, status: 'Approved' },
  { id: 3, employee: 'David Chen', date: '2025-10-22', transport: 'Business Trip', purpose: 'Conference in San Francisco', amount: 890.75, status: 'Rejected' },
  { id: 4, employee: 'Emily White', date: '2025-10-21', transport: 'Bike Commute', purpose: 'Commute for week of Oct 16', amount: 10.00, status: 'Pending' },
])

// Filters
const filters = ref({
  employee: '',
  transport: '',
  month: '',
  search: '',
})

const filteredRequests = computed(() => {
  return requests.value.filter(r => {
    const month = r.date.split('-')[1]
    return (
      (!filters.value.employee || r.employee === filters.value.employee) &&
      (!filters.value.transport || r.transport === filters.value.transport) &&
      (!filters.value.month || month === filters.value.month) &&
      (!filters.value.search || r.purpose.toLowerCase().includes(filters.value.search.toLowerCase()))
    )
  })
})

// Actions
function approveRequest(id) {
  const req = requests.value.find(r => r.id === id)
  if (req) req.status = 'Approved'
}

function rejectRequest(id) {
  const req = requests.value.find(r => r.id === id)
  if (req) req.status = 'Rejected'
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.new-btn {
  background: var(--md-sys-color-primary, #ae74ff);
  border: none;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.new-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
</style>
