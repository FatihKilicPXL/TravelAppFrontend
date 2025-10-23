<template>
  <article class="card">
    <div class="info">
      <h2 class="title">{{ expense.title }}</h2>
      <p class="meta">{{ expense.date }} • {{ expense.transport }}</p>
      <p class="details">
        Distance: <strong>{{ expense.distance }} km</strong>  
        &nbsp;|&nbsp;
        Cost: <strong>€{{ expense.cost.toFixed(2) }}</strong>
      </p>
    </div>

    <div
      class="status"
      :style="{ backgroundColor: statusColor[expense.status] + '20', color: statusColor[expense.status] }"
    >
      {{ expense.status.charAt(0).toUpperCase() + expense.status.slice(1) }}
    </div>
  </article>
</template>



<script setup>
const props = defineProps({
  expense: {
    type: Object,
    required: true
  }
})

const statusColor = {
  approved: '#2e7d32', // green
  pending: '#f9a825',  // amber
  rejected: '#c62828'  // red
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--md-sys-color-surface, #fff);
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 1rem 1.25rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.meta {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.details {
  font-size: 0.95rem;
  color: #333;
  margin: 0;
}

.status {
  align-self: flex-start;
  margin-top: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: capitalize;
}
</style>
