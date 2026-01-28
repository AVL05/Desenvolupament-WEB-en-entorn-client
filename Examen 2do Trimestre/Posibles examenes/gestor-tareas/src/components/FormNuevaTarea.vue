<script setup>
import { ref } from "vue";

const emit = defineEmits(["nueva-tarea"]);

// APUNTES 6. State: ref() para valor simple
const textoNuevaTarea = ref("");

// APUNTES 13. Formularios: Validación y envío
const enviarFormulario = () => {
  // .trim() es un modificador útil explicado en apuntes
  if (textoNuevaTarea.value.trim() === "") return;

  // Emitir evento
  emit("nueva-tarea", textoNuevaTarea.value);

  // Limpiar input
  textoNuevaTarea.value = "";
};
</script>

<template>
  <form @submit.prevent="enviarFormulario" class="formulario">
    <!-- APUNTES 13. Formularios: v-model -->
    <input
      v-model="textoNuevaTarea"
      type="text"
      placeholder="¿Qué tienes que hacer hoy?"
      class="input-tarea"
    />
    <button type="submit" class="btn-add">Agregar</button>
  </form>
</template>

<style scoped>
.formulario {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-tarea {
  flex-grow: 1;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  outline: none;
}

.input-tarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.btn-add {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.btn-add:hover {
  background-color: var(--color-primary-dark);
}

.btn-add:active {
  transform: scale(0.98);
}
</style>
