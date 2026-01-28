<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { incidenciasDB } from "./data/incidencias";
import Header from "./components/Header.vue";
import ListadoIncidencias from "./components/ListadoIncidencias.vue";
import PanelEstadisticas from "./components/PanelEstadisticas.vue";
import FormNuevaIncidencia from "./components/FormNuevaIncidencia.vue";
import Card from "./components/Card.vue";

const incidencias = ref([]);
const filtroEstado = ref("Todas");

const cargarIncidencias = () => {
  const storage = localStorage.getItem("incidencias");
  if (storage) {
    incidencias.value = JSON.parse(storage);
  } else {
    incidencias.value = incidenciasDB;
  }
};

onMounted(() => {
  cargarIncidencias();
});

watch(
  incidencias,
  (nuevo) => {
    localStorage.setItem("incidencias", JSON.stringify(nuevo));
    console.log("Incidencias actualizadas:", nuevo.length);
  },
  { deep: true },
);

const incidenciasFiltradas = computed(() => {
  if (filtroEstado.value === "Todas") return incidencias.value;
  return incidencias.value.filter((i) => i.estado === filtroEstado.value);
});

const totalIncidencias = computed(() => incidencias.value.length);
const abiertas = computed(
  () => incidencias.value.filter((i) => i.estado === "Abierta").length,
);
const cerradas = computed(
  () => incidencias.value.filter((i) => i.estado === "Cerrada").length,
);

const cambiarEstado = (id, nuevoEstado) => {
  const inc = incidencias.value.find((i) => i.id === id);
  if (inc) inc.estado = nuevoEstado;
};

const eliminarIncidencia = (id) => {
  incidencias.value = incidencias.value.filter((i) => i.id !== id);
};

const agregarIncidencia = (nueva) => {
  const id = incidencias.value.length
    ? Math.max(...incidencias.value.map((i) => i.id)) + 1
    : 1;
  incidencias.value.push({
    id,
    ...nueva,
    estado: "Abierta",
  });
};
</script>

<template>
  <div class="contenedor">
    <Header>
      <template #extra>
        <span class="badge">Total: {{ totalIncidencias }}</span>
      </template>
    </Header>

    <main class="layout">
      <section>
        <Card>
          <template #titulo>Filtro por estado</template>
          <select v-model="filtroEstado">
            <option value="Todas">Todas</option>
            <option value="Abierta">Abiertas</option>
            <option value="En progreso">En progreso</option>
            <option value="Cerrada">Cerradas</option>
          </select>
        </Card>

        <ListadoIncidencias
          :incidencias="incidenciasFiltradas"
          @cambiar-estado="cambiarEstado"
          @eliminar="eliminarIncidencia"
        />
      </section>

      <aside>
        <PanelEstadisticas
          :total="totalIncidencias"
          :abiertas="abiertas"
          :cerradas="cerradas"
        />

        <FormNuevaIncidencia @nueva-incidencia="agregarIncidencia" />
      </aside>
    </main>
  </div>
</template>

<style scoped>
.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.badge {
  background: #2563eb;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
}
select {
  padding: 0.4rem;
}
</style>
