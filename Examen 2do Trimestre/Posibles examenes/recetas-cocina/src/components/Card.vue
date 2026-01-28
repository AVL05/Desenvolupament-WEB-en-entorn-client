<script setup>
// REQUISITO: Card reutilizable con slots (default y named)
</script>

<template>
  <div class="card">
    <!-- APUNTES 14. Slots: Slot nombrado 'titulo' -->
    <div class="card-header" v-if="$slots.titulo">
      <slot name="titulo"></slot>
    </div>

    <!-- APUNTES 14. Slots: Slot por defecto -->
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  height: 100%;
}

.card-header {
  background: #fff;
  padding: 1rem 1.5rem;
  border-bottom: 3px solid var(--color-primary-light);
  font-weight: 700;
  color: var(--color-text);
  font-size: 1.1rem;
}

.card-body {
  padding: 1.5rem;
}
</style>
