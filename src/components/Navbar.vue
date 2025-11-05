<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/my-expenses" class="link" exact>My Expenses</RouterLink>
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  margin: 1rem auto;
  margin-top: 22px;
  width: fit-content;
}

nav {
  display: flex;
  gap: 1.25rem;
}

.link {
  font-weight: 500;
  color: var(--md-sys-color-primary, #6b6b6b);
  text-decoration: none;
  transition: color 0.2s, transform 0.15s;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}

.link:hover {
  color: var(--md-sys-color-on-surface-variant, #d1b8ff);
  transform: scale(1.05);
}

.router-link-active {
  color: var(--md-sys-color-on-primary-container, #111111);
  font-weight: 600;
}
</style>
