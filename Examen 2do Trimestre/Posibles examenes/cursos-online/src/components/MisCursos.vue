<script setup>
import { computed } from "vue";

const props = defineProps({
  cursosSeleccionados: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["vaciar-lista"]);

// REQUISITO: Computed para total de horas
// APUNTES 11. Computed Properties: Propiedades calculadas automáticamente.
const totalHoras = computed(() => {
  return props.cursosSeleccionados.reduce((acc, curso) => acc + curso.horas, 0);
});

const vaciar = () => {
  emit("vaciar-lista");
};
</script>

<template>
  <div class="mis-cursos-panel">
    <h2>Mis Cursos Inscritos</h2>

    <!-- APUNTES 8. v-if/v-else: Condicionales -->
    <div v-if="cursosSeleccionados.length === 0" class="empty-state">
      No tienes cursos seleccionados aún.
    </div>

    <div v-else>
      <ul class="lista-seleccionados">
        <li v-for="curso in cursosSeleccionados" :key="curso.id">
          <span>{{ curso.titulo }}</span>
          <span class="badge">{{ curso.horas }}h</span>
        </li>
      </ul>

      <div class="resumen">
        <p>
          Total Horas: <strong>{{ totalHoras }}</strong>
        </p>
        <button @click="vaciar" class="btn-danger">Vaciar Lista</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mis-cursos-panel {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-top: 0;
  color: var(--color-text);
  font-size: 1.4rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
}

.lista-seleccionados {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.lista-seleccionados li {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}

.badge {
  background: #eef2ff;
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.resumen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px dashed #eee;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-danger:hover {
  background-color: #dc2626;
}

.empty-state {
  color: #888;
  font-style: italic;
  padding: 1rem 0;
}
</style>
