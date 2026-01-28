<script setup>
// REQUISITO: Card reutilizable con slots
</script>

<template>
  <div class="card">
    <!-- APUNTES 14. Slots: Slot nombrado 'titulo' opcional -->
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
  border-radius: 16px;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.card-header {
  background: #f9fafb;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 700;
  color: var(--color-text);
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  /* Padding 0 porque a veces queremos que la lista llegue a los bordes */
  padding: 0;
}
</style>
