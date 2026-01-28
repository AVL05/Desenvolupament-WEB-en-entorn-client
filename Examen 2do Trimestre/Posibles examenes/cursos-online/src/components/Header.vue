<script setup>
// Componente Header simple
</script>

<template>
  <header class="main-header">
    <div class="container">
      <h1>Gestor de Cursos Online</h1>
      <nav>
        <!-- Menú simple sin funcionalidad real, solo visual -->
        <a href="#">Inicio</a>
        <a href="#">Cursos</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  background-color: var(--color-primary);
  color: white;
  padding: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

nav a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: white;
}
</style>
