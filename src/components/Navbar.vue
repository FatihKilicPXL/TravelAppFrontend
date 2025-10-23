<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/" class="link" exact>My Expenses</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background-color: var(--md-sys-color-surface, #fdfcfb);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  margin: 1rem auto;
  width: fit-content;
}

nav {
  display: flex;
  gap: 1.25rem;
}

.link {
  font-weight: 500;
  color: var(--md-sys-color-primary, #1e88e5);
  text-decoration: none;
  transition: color 0.2s, transform 0.15s;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}

.link:hover {
  color: var(--md-sys-color-on-surface-variant, #1565c0);
  transform: scale(1.05);
}

.router-link-active {
  color: var(--md-sys-color-on-primary-container, #0d47a1);
  font-weight: 600;
}
</style>
