<script setup>
import { reactive } from 'vue'
import Card from './Card.vue'

const emit = defineEmits(['nueva-incidencia'])

const form = reactive({
  titulo: '',
  descripcion: '',
  prioridad: 'Media',
  solicitante: ''
})

const errores = reactive({
  titulo: '',
  descripcion: '',
  solicitante: ''
})

const validar = () => {
  errores.titulo = form.titulo.trim() ? '' : 'El título es obligatorio'
  errores.descripcion = form.descripcion.trim() ? '' : 'La descripción es obligatoria'
  errores.solicitante = form.solicitante.trim() ? '' : 'El solicitante es obligatorio'

  return !errores.titulo && !errores.descripcion && !errores.solicitante
}

const enviar = () => {
  if (!validar()) return

  emit('nueva-incidencia', {
    titulo: form.titulo,
    descripcion: form.descripcion,
    prioridad: form.prioridad,
    solicitante: form.solicitante
  })

  form.titulo = ''
  form.descripcion = ''
  form.prioridad = 'Media'
  form.solicitante = ''
}
</script>

<template>
  <Card>
    <template #titulo>Nueva incidencia</template>

    <form @submit.prevent="enviar" class="form">
      <label>
        Título
        <input v-model="form.titulo" type="text" />
        <span v-if="errores.titulo" class="error">{{ errores.titulo }}</span>
      </label>

      <label>
        Descripción
        <textarea v-model="form.descripcion"></textarea>
        <span v-if="errores.descripcion" class="error">{{ errores.descripcion }}</span>
      </label>

      <label>
        Prioridad
        <select v-model="form.prioridad">
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>
      </label>

      <label>
        Solicitante
        <input v-model="form.solicitante" type="text" />
        <span v-if="errores.solicitante" class="error">{{ errores.solicitante }}</span>
      </label>

      <button type="submit">Crear incidencia</button>
    </form>
  </Card>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}
input,
textarea,
select {
  padding: 0.3rem;
  margin-top: 0.2rem;
}
button {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
}
.error {
  color: #dc2626;
  font-size: 0.75rem;
}
</style>