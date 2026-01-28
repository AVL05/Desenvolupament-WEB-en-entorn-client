<script setup>
import { onMounted, ref, watch } from "vue";
import Card from "./components/Card.vue";
import Favoritas from "./components/Favoritas.vue";
import FormNuevaReceta from "./components/FormNuevaReceta.vue";
import Header from "./components/Header.vue";
import ListadoRecetas from "./components/ListadoRecetas.vue";
import { recetasIniciales } from "./data/recetas.js";

// APUNTES 6. State: ref()
const recetas = ref([]);
const favoritas = ref([]);

// APUNTES 7. Ciclo de vida: onMounted
// Carga inicial de recetas y lectura de LocalStorage
onMounted(() => {
  // Cargar datos estáticos inicialmente
  recetas.value = recetasIniciales;

  // Leer favoritas guardadas
  const favGuardadas = localStorage.getItem("mis-recetas-fav");
  if (favGuardadas) {
    favoritas.value = JSON.parse(favGuardadas);
  }
});

// APUNTES 12. Watch: Persistencia
// Observamos el array de favoritas con deep: true
watch(
  favoritas,
  (nuevoValor) => {
    localStorage.setItem("mis-recetas-fav", JSON.stringify(nuevoValor));
  },
  { deep: true },
);

// Event Handlers
const agregarNuevaReceta = (nuevaReceta) => {
  // Añadimos al inicio del array
  recetas.value.unshift(nuevaReceta);
};

const agregarAFavoritas = (receta) => {
  // Evitar duplicados
  const existe = favoritas.value.find((f) => f.id === receta.id);

  if (!existe) {
    favoritas.value.push(receta);
  } else {
    alert("¡Esa receta ya está en tus favoritas!");
  }
};

const vaciarFavoritas = () => {
  favoritas.value = [];
};
</script>

<template>
  <Header />

  <main class="main-container">
    <!-- Left Column: Formulario + Favoritas (Sidebar) -->
    <aside class="sidebar">
      <!-- Sección: Crear Receta -->
      <section class="mb-2">
        <Card>
          <template #titulo>Crear Nueva Receta</template>
          <!-- form emite @nueva-receta -->
          <FormNuevaReceta @nueva-receta="agregarNuevaReceta" />
        </Card>
      </section>

      <!-- Sección: Favoritas -->
      <section class="sticky-fav">
        <Favoritas :favoritas="favoritas" @vaciar-favoritas="vaciarFavoritas" />
      </section>
    </aside>

    <!-- Right Column: Listado de Recetas -->
    <section class="content">
      <div class="section-header">
        <h2>Catálogo de Recetas</h2>
        <p>Explora sabores increíbles</p>
      </div>

      <!-- listado emite @agregar-favorita -->
      <ListadoRecetas
        :listaRecetas="recetas"
        @agregar-favorita="agregarAFavoritas"
      />
    </section>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2.5rem;
}

/* Responsive: en móvil una sola columna */
@media (max-width: 850px) {
  .main-container {
    grid-template-columns: 1fr;
  }
}

.mb-2 {
  margin-bottom: 2rem;
}

.sticky-fav {
  position: sticky;
  top: 100px;
}

.section-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
  color: var(--color-text);
}

.section-header p {
  margin: 0.5rem 0 0 0;
  color: #666;
}
</style>
