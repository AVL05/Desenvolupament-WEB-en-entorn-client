<script setup>
// REQUISITO: Header con título y menú decorativo
</script>

<template>
  <header class="main-header">
    <div class="container">
      <div class="logo">
        <span class="icon">👨‍🍳</span>
        <h1>Chef Manager</h1>
      </div>
      <nav>
        <a href="#" class="active">Recetas</a>
        <a href="#">Plan Semanal</a>
        <a href="#">Comunidad</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  background-color: var(--color-white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.8rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

nav a.active,
nav a:hover {
  color: var(--color-primary);
}
</style>
