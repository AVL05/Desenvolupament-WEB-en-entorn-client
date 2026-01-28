<script setup>
import Curso from './Curso.vue';

// APUNTES 9. Componentes y Props: Recibimos el array de cursos
defineProps({
  listaCursos: {
    type: Array,
    required: true
  }
});

// APUNTES 10. Eventos (emit): Re-emitimos el evento hacia el abuelo (App.vue)
const emit = defineEmits(['add-curso']);

const handleAddCurso = (curso) => {
  emit('add-curso', curso);
};
</script>

<template>
  <div class="grid-cursos">
    <!-- APUNTES 8. v-for: Bucle para renderizar cada curso -->
    <!-- :curso="c" es binding dinámico (:prop) -->
    <!-- @add-curso="handleAddCurso" escuchamos el evento del hijo -->
    <Curso 
      v-for="c in listaCursos" 
      :key="c.id" 
      :curso="c" 
      @add-curso="handleAddCurso" 
    />
  </div>
</template>

<style scoped>
.grid-cursos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
