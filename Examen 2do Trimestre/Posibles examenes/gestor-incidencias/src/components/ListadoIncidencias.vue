<script setup>
import Incidencia from './Incidencia.vue'

const props = defineProps({
  incidencias: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['cambiar-estado', 'eliminar'])

const manejarCambioEstado = (id, estado) => {
  emit('cambiar-estado', id, estado)
}

const manejarEliminar = (id) => {
  emit('eliminar', id)
}
</script>

<template>
  <div v-if="incidencias.length">
    <Incidencia
      v-for="inc in incidencias"
      :key="inc.id"
      :incidencia="inc"
      @cambiar-estado="manejarCambioEstado"
      @eliminar="manejarEliminar"
    />
  </div>
  <p v-else>No hay incidencias para el filtro seleccionado.</p>
</template>