<script setup>
// REQUISITO: Recibe por props un curso
// APUNTES 9. Componentes y Props: Los componentes reciben datos del padre mediante props.
const props = defineProps({
  curso: {
    type: Object,
    required: true,
  },
});

// REQUISITO: Evento para añadir a Mis Cursos
// APUNTES 10. Eventos (emit): Para enviar datos del hijo al padre.
const emit = defineEmits(["add-curso"]);

const agregarCurso = () => {
  emit("add-curso", props.curso);
};
</script>

<template>
  <div class="curso-card">
    <div class="imagen-wrapper">
      <img :src="curso.imagen" :alt="curso.titulo" />
    </div>
    <div class="contenido">
      <h3>{{ curso.titulo }}</h3>
      <p class="descripcion">{{ curso.descripcion }}</p>
      <div class="footer-card">
        <span class="horas">⏱ {{ curso.horas }} horas</span>
        <!-- Botón que emite el evento -->
        <button @click="agregarCurso" class="btn-primary">
          Añadir a Mis Cursos
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.curso-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.curso-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.imagen-wrapper {
  height: 160px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.imagen-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.contenido {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: var(--color-text);
  font-size: 1.25rem;
}

.descripcion {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.horas {
  font-weight: 600;
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}
</style>
