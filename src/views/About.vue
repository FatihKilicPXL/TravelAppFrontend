<template>
  <div class="page-wrapper">
    <div class="about-page p-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Travel & Expense Reimbursement App - Frontend</h1>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          This is the frontend of a Travel & Expense Reimbursement App. Employees can register business trips and
          home–work bike commutes, view their submitted trips, and see reimbursement statuses. Managers can review,
          approve, or reject reimbursements.
        </p>
        <p class="mt-2">
          Built with <strong>Vue 3</strong> and a <strong>mobile-first design</strong>.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Features (User Stories)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>US-01: Login with company account or unique nickname. MOCK ☑️</li>
          <li>US-02: Register a new trip/commute : MOCK ☑️</li>
          <li>US-03: View all submitted trips with reimbursement status : MOCK ☑️</li>
          <li>US-04: (Manager) View all trips, filter by employee, transport, or month. MOCK ☑️</li>
          <li>US-05: (Manager) Approve or reject reimbursement requests.MOCK ☑️</li>
          <li>US-06: View a summary of reimbursements (total per month or transport type). MOCK ☑️</li>
          <li>US-99: Export monthly overview as PDF or CSV (extra feature).</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Development & DevOps Practices</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Always create a new branch when working on a single feature.</li>
          <li>Make pull requests.</li>
          <li>Branch name template: <code>feature/us-02-add-trip-mock</code> ('mock' indicates using mock data, no API
            integration).</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Folder & Component Structure</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><code>src/views/</code>: Page-level components</li>
          <li><code>src/components/</code>: Reusable components</li>
          <li><code>src/assets/</code>: Global CSS, fonts, and images</li>
          <li><code>src/router/index.js</code>: Route definitions for SPA navigation</li>
        </ul>
      </section>

      <div class="mt-6">
        <github-button href="https://github.com/FatihKilicPXL/TravelAppFrontend"
          data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large"
          aria-label="Watch FatihKilicPXL/TravelAppFrontend on GitHub">View On Github</github-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import GithubButton from 'vue-github-button'
</script>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
  /* horizontal centering */
  align-items: center;
  /* vertical centering */
  min-height: 100vh;
  /* fill the viewport height */
  padding: 1rem;
  /* optional spacing */
}

.about-page {
  font-family: sans-serif;
  line-height: 1.6;
  width: 100%;
  max-width: 800px;
  /* or keep your previous max-w-3xl */
}
</style>
