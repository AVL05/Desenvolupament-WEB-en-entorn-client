<script setup>
const props = defineProps({
  incidencia: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['cambiar-estado', 'eliminar'])

const cambiarEstado = (nuevoEstado) => {
  emit('cambiar-estado', props.incidencia.id, nuevoEstado)
}

const eliminar = () => {
  emit('eliminar', props.incidencia.id)
}
</script>

<template>
  <Card>
    <template #titulo>
      {{ incidencia.titulo }} ·
      <span class="incidencia.estado.replace(' ', '-').toLowerCase()">
        {{ incidencia.estado }}
      </span>
    </template>

    <p class="descripcion">{{ incidencia.descripcion }}</p>
    <p><strong>Prioridad:</strong> {{ incidencia.prioridad }}</p>
    <p><strong>Solicitante:</strong> {{ incidencia.solicitante }}</p>

    <template #acciones>
      <select v-model="incidencia.estado" @change="cambiarEstado(incidencia.estado)">
        <option value="Abierta">Abierta</option>
        <option value="En progreso">En progreso</option>
        <option value="Cerrada">Cerrada</option>
      </select>
      <button class="btn-danger" @click="eliminar">Eliminar</button>
    </template>
  </Card>
</template>

<style scoped>
.descripcion {
  margin-bottom: 0.5rem;
}
.pill {
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
  color: white;
}
.abierta {
  background: #16a34a;
}
.en-progreso {
  background: #f59e0b;
}
.cerrada {
  background: #6b7280;
}
.btn-danger {
  margin-left: 0.5rem;
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
select {
  padding: 0.25rem;
}
</style>