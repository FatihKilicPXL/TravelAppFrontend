<template>
  <main class="container">
    <header class="header">
      <h1>New Trip Registration</h1>
    </header>

    <form class="form" @submit.prevent="submitTrip">
      <!-- Date -->
      <label class="field">
        <span>Date</span>
        <input type="date" v-model="trip.date" required />
      </label>

      <!-- Destination/Route -->
      <label class="field">
        <span>Destination / Route</span>
        <input type="text" v-model="trip.destination" placeholder="Enter destination or route" required />
      </label>

      <!-- Distance -->
      <label class="field">
        <span>Distance (km)</span>
        <input type="number" v-model.number="trip.distance" placeholder="0" min="0" required />
      </label>

      <!-- Transport Type -->
      <label class="field">
        <span>Transport Type</span>
        <select v-model="trip.transport" required>
          <option disabled value="">Select transport</option>
          <option>Plane</option>
          <option>Car</option>
          <option>Bus</option>
          <option>Tram</option>
          <option>Train</option>
        </select>
      </label>

      <!-- Purpose -->
      <label class="field">
        <span>Purpose</span>
        <select v-model="trip.purpose" required>
          <option disabled value="">Select purpose</option>
          <option>Business</option>
          <option>Meeting</option>
          <option>Conference</option>
          <option>Training</option>
        </select>
      </label>

      <!-- Cost -->
      <label class="field">
        <span>Cost (€)</span>
        <input type="number" v-model.number="trip.cost" placeholder="0.00" min="0" step="0.01" required />
      </label>

      <!-- Buttons -->
      <div class="buttons">
        <button type="button" class="cancel" @click="cancelTrip">Cancel</button>
        <button type="submit" class="submit">Submit Trip</button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const trip = reactive({
  date: '',
  destination: '',
  distance: 0,
  transport: '',
  purpose: '',
  cost: 0
})

function submitTrip() {
  console.log('Trip submitted:', { ...trip })
  alert('Trip submitted (mock)!')
  // later: call API
}

function cancelTrip() {
  router.back() // go back to previous view
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.header {
  padding-bottom: 1rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}

.field span {
  margin-bottom: 0.25rem;
  font-weight: 500;
}

input,
select {
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  transition: border 0.15s ease, box-shadow 0.15s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: var(--md-sys-color-primary, #6200ee);
  box-shadow: 0 0 0 2px rgba(98, 0, 238, 0.2);
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: scale(1.05);
}

.cancel {
  background-color: #ccc;
  color: #333;
}

.submit {
  background-color: var(--md-sys-color-primary, #ae74ff);
  color: white;
}
</style>
