<template>
  <div class="card">
    <header v-if="$slots.titulo" class="card-header">
      <slot name="titulo"></slot>
    </header>
    <div class="card-body">
      <slot></slot>
    </div>
    <footer v-if="$slots.acciones" class="card-footer">
      <slot name="acciones"></slot>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
}
.card-header {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.card-footer {
  margin-top: 0.75rem;
  text-align: right;
}
</style>