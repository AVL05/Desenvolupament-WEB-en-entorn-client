<script setup>
// APUNTES 9. Componentes y Props: Recibimos el objeto tarea
const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

// APUNTES 10. Eventos (emit): Definimos eventos para borrar y cambiar estado
const emit = defineEmits(["eliminar-tarea", "toggle-tarea"]);

const handleToggle = () => {
  emit("toggle-tarea", props.tarea.id);
};

const handleEliminar = () => {
  emit("eliminar-tarea", props.tarea.id);
};
</script>

<template>
  <!-- APUNTES 8. Directivas: Binding de clases condicional (:class) -->
  <div class="tarea-item" :class="{ completada: tarea.completada }">
    <div class="tarea-left">
      <!-- Checkbox controlado, emite evento al cambiar -->
      <label class="checkbox-container">
        <input
          type="checkbox"
          :checked="tarea.completada"
          @change="handleToggle"
        />
        <span class="checkmark"></span>
      </label>

      <span class="texto-tarea">{{ tarea.texto }}</span>
    </div>

    <!-- Botón eliminar -->
    <button @click="handleEliminar" class="btn-delete" title="Eliminar tarea">
      🗑️
    </button>
  </div>
</template>

<style scoped>
.tarea-item {
  background: white;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;
}

.tarea-item:last-child {
  border-bottom: none;
}

.tarea-item:hover {
  background-color: #fafafa;
}

.tarea-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}

/* Estilos Tarea Completada */
.completada .texto-tarea {
  text-decoration: line-through;
  color: #9ca3af;
}

.btn-delete {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s;
  opacity: 0.6;
}

.btn-delete:hover {
  background-color: #fee2e2;
  opacity: 1;
}

/* Custom Checkbox Styles */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -10px;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #eee;
  border-radius: 6px;
  transition: all 0.2s;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: var(--color-primary);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
