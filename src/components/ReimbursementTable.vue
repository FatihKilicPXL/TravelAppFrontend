<template>
  <section class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Date</th>
          <th>Transport</th>
          <th>Purpose</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in requests" :key="r.id">
          <td>{{ r.employee }}</td>
          <td>{{ r.date }}</td>
          <td>{{ r.transport }}</td>
          <td>{{ r.purpose }}</td>
          <td>\${{ r.amount.toFixed(2) }}</td>
          <td>
            <span :class="['status', r.status.toLowerCase()]">{{ r.status }}</span>
          </td>
          <td>
            <button class="approve" @click="$emit('approve', r.id)">Approve</button>
            <button class="reject" @click="$emit('reject', r.id)">Reject</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="requests.length === 0" class="empty">No reimbursement requests found</p>
  </section>
</template>

<script setup>
defineProps(['requests'])
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  font-weight: 600;
  color: #444;
}

.status {
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.status.pending {
  background: #fff6d8;
  color: #b58100;
}

.status.approved {
  background: #e8f8ee;
  color: #207a46;
}

.status.rejected {
  background: #fdeaea;
  color: #c02f2f;
}

button {
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.approve {
  background: #22c55e;
  color: white;
  margin-right: 0.5rem;
}

.reject {
  background: #ef4444;
  color: white;
}

button:hover {
  opacity: 0.9;
}

.empty {
  text-align: center;
  color: #777;
  margin-top: 1.5rem;
}
</style>
