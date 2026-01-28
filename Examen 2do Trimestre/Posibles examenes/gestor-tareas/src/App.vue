<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Card from "./components/Card.vue";
import FormNuevaTarea from "./components/FormNuevaTarea.vue";
import Header from "./components/Header.vue";
import ListadoTareas from "./components/ListadoTareas.vue";
import { tareasIniciales } from "./data/tareas.js";

// APUNTES 6. State: ref([]) para lista de tareas
const tareas = ref([]);

// APUNTES 7. Ciclo de vida: onMounted
onMounted(() => {
  const guardadas = localStorage.getItem("tareas-vue");
  if (guardadas) {
    tareas.value = JSON.parse(guardadas);
  } else {
    // Si no hay en localStorage, cargamos las iniciales del archivo data
    tareas.value = tareasIniciales;
  }
});

// APUNTES 12. Watch: Para persistencia en LocalStorage
// Importante { deep: true } porque observamos cambios dentro de objetos del array
watch(
  tareas,
  (nuevasTareas) => {
    localStorage.setItem("tareas-vue", JSON.stringify(nuevasTareas));
  },
  { deep: true },
);

// APUNTES 11. Computed Properties: Cálculos automáticos
const totalTareas = computed(() => tareas.value.length);

const tareasCompletadas = computed(() => {
  return tareas.value.filter((t) => t.completada).length;
});

// Metodos / Handlers
const agregarTarea = (texto) => {
  const nueva = {
    id: Date.now(), // ID único basado en timestamp
    texto: texto,
    completada: false,
  };
  tareas.value.push(nueva);
  // NOTA: No hace falta guardar en LS aquí de manual, el watch lo hará solo
};

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter((t) => t.id !== id);
};

const toggleTarea = (id) => {
  const tarea = tareas.value.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
  }
};
</script>

<template>
  <Header />

  <main class="main-container">
    <!-- Input Nueva Tarea -->
    <section class="section-input">
      <FormNuevaTarea @nueva-tarea="agregarTarea" />
    </section>

    <!-- Listado usando Card -->
    <section class="section-list">
      <Card>
        <!-- APUNTES 14. Slots: Slot nombrado 'titulo' -->
        <template #titulo>
          <span>Mis Tareas</span>
          <span class="badge">
            {{ tareasCompletadas }} / {{ totalTareas }} completadas
          </span>
        </template>

        <!-- Slot por defecto -->
        <ListadoTareas
          :tareas="tareas"
          @eliminar-tarea="eliminarTarea"
          @toggle-tarea="toggleTarea"
        />
      </Card>
    </section>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.section-input {
  margin-bottom: 2rem;
}

.badge {
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}
</style>
