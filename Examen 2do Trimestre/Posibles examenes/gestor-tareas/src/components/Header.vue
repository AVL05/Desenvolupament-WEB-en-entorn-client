<script setup>
// REQUISITO: Header simple como componente independiente
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <span class="icon">✅</span>
        <h1>Gestor de Tareas</h1>
      </div>
      <p class="subtitle">Organiza tu día, alcanza tus metas</p>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.icon {
  font-size: 2rem;
}

h1 {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.subtitle {
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
  font-size: 1.1rem;
}
</style>
