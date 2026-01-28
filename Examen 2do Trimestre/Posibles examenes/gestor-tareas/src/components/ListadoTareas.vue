<script setup>
import Tarea from "./Tarea.vue";

defineProps({
  tareas: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["eliminar-tarea", "toggle-tarea"]);

// Re-emitir eventos hacia arriba
const handleEliminar = (id) => emit("eliminar-tarea", id);
const handleToggle = (id) => emit("toggle-tarea", id);
</script>

<template>
  <div class="listado-container">
    <!-- APUNTES 8. v-if/v-else -->
    <div v-if="tareas.length === 0" class="empty-state">
      <p>🎉 ¡No hay tareas pendientes! Disfruta tu tiempo libre.</p>
    </div>

    <!-- APUNTES 8. v-for: Renderizado de lista -->
    <div v-else class="lista">
      <Tarea
        v-for="tarea in tareas"
        :key="tarea.id"
        :tarea="tarea"
        @eliminar-tarea="handleEliminar"
        @toggle-tarea="handleToggle"
      />
    </div>
  </div>
</template>

<style scoped>
.listado-container {
  background: white;
  border-radius: 0 0 12px 12px; /* Redondeado solo abajo porque arriba va el Card header */
  overflow: hidden;
}

.empty-state {
  padding: 3rem;
  text-align: center;
  color: #6b7280;
  font-style: italic;
}
.lista {
  display: flex;
  flex-direction: column;
}
</style>
