<template>
  <header class="header">
    <h1>Gestor de Incidencias de Soporte</h1>
    <div class="extra">
      <slot name="extra"></slot>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.extra {
  font-size: 0.9rem;
}
</style>