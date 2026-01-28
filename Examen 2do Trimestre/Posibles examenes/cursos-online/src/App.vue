<script setup>
// Imports de Vue y componentes
import { onMounted, ref, watch } from "vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import ListadoCursos from "./components/ListadoCursos.vue";
import MisCursos from "./components/MisCursos.vue";
import { cursos as datosCursos } from "./data/cursos.js";

// APUNTES 6. State en Vue: ref()
const cursos = ref([]);
const misCursos = ref([]);
const usuario = ref("");
const mostrarBienvenida = ref(false);

// APUNTES 7. Ciclo de vida: onMounted()
// Se usa para cargar datos iniciales o leer LocalStorage
onMounted(() => {
  // Cargar cursos desde el archivo de datos (simulación fetch)
  cursos.value = datosCursos;

  // Leer LocalStorage al iniciar
  const guardados = localStorage.getItem("misCursos");
  if (guardados) {
    misCursos.value = JSON.parse(guardados);
  }
});

// APUNTES 12. Watch: Observar cambios y side-effects
// Guardar en LocalStorage cada vez que cambie misCursos
watch(
  misCursos,
  (nuevoValor) => {
    localStorage.setItem("misCursos", JSON.stringify(nuevoValor));
  },
  { deep: true },
); // deep: true para observar cambios dentro del array/objetos

// Funciones para manejar eventos
const agregarCurso = (curso) => {
  // Evitar duplicados
  const existe = misCursos.value.find((c) => c.id === curso.id);
  if (!existe) {
    misCursos.value.push(curso);
  } else {
    alert("¡Este curso ya está en tu lista!");
  }
};

const vaciarLista = () => {
  misCursos.value = [];
};

// Manejo del formulario
const registrarUsuario = () => {
  if (usuario.value.trim() !== "") {
    mostrarBienvenida.value = true;
  }
};
</script>

<template>
  <Header />

  <main class="container">
    <!-- SECCIÓN FORMULARIO -->
    <!-- APUNTES 14. Uso de Card con Slots -->
    <section class="welcome-section">
      <Card>
        <template #header> Área de Usuario </template>

        <!-- APUNTES 13. Formularios: v-model -->
        <div v-if="!mostrarBienvenida" class="form-group">
          <label for="nombre">Introduce tu nombre para empezar:</label>
          <div class="input-wrapper">
            <input
              id="nombre"
              v-model="usuario"
              type="text"
              placeholder="Ej. Alex"
              @keyup.enter="registrarUsuario"
            />
            <button @click="registrarUsuario" class="btn-primary">
              Entrar
            </button>
          </div>
        </div>

        <div v-else class="mensaje-bienvenida">
          <h2>¡Bienvenido, {{ usuario }}! 🚀</h2>
          <p>Explora nuestro catálogo y construye tu futuro.</p>
        </div>
      </Card>
    </section>

    <div class="content-grid">
      <!-- LADO IZQUIERDO: Listado -->
      <div class="col-main">
        <h2 class="section-title">Catálogo de Cursos</h2>
        <!-- Prop: listaCursos, Evento: @add-curso -->
        <ListadoCursos :listaCursos="cursos" @add-curso="agregarCurso" />
      </div>

      <!-- LADO DERECHO: Sidebar Mis Cursos -->
      <aside class="col-sidebar">
        <!-- Componente MisCursos (State y Computed dentro) -->
        <!-- Utilizamos una clase 'sticky' para que se fije al hacer scroll (CSS) -->
        <div class="sticky-wrapper">
          <MisCursos
            :cursosSeleccionados="misCursos"
            @vaciar-lista="vaciarLista"
          />
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.welcome-section {
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
}

.input-wrapper {
  display: flex;
  gap: 1rem;
}

input {
  flex-grow: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: var(--color-primary);
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.mensaje-bienvenida {
  text-align: center;
  color: var(--color-primary-dark);
}

.mensaje-bienvenida h2 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
}

.col-sidebar {
  position: relative;
}

.sticky-wrapper {
  position: sticky;
  top: 2rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  border-left: 5px solid var(--color-secondary);
  padding-left: 1rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
