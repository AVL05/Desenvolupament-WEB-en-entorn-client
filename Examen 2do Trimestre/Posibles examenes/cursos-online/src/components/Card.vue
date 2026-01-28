<script setup>
// REQUISITO: Slot por defecto y slot nombrado 'header'
</script>

<template>
  <div class="card-container">
    <!-- Slot Nombrado para el encabezado -->
    <!-- APUNTES 14. Slots: Slot nombrado -->
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <!-- Slot por defecto para el contenido -->
    <!-- APUNTES 14. Slots: Slot por defecto -->
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  margin-bottom: 2rem;
}

.card-header {
  background: #f9fafb;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
}

.card-body {
  padding: 1.5rem;
}
</style>
