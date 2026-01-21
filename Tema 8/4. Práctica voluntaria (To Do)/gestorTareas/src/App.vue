<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Header from "./components/Header.vue";
import Tarea from "./components/Tarea.vue";

// 7. STATES
// Objeto que tendrá dos atributos: Nombre y Completada
const nuevaTarea = ref({
  nombre: "",
  completada: false,
});

// Array para almacenar las tareas
const listaTareas = ref([]);

// 11. PERSISTENCIA DE LOS DATOS
// Cargar tareas al montar el componente
onMounted(() => {
  const guardadas = localStorage.getItem("tareas-practica");
  if (guardadas) {
    listaTareas.value = JSON.parse(guardadas);
  }
});

// Guardar tareas cada vez que cambie la lista o sus propiedades
watch(
  listaTareas,
  (nuevasTareas) => {
    localStorage.setItem("tareas-practica", JSON.stringify(nuevasTareas));
  },
  { deep: true },
);

// 10. CONTEOS DE TAREAS (Computed Properties)
const completadas = computed(() => {
  return listaTareas.value.filter((t) => t.completada).length;
});

const pendientes = computed(() => {
  return listaTareas.value.filter((t) => !t.completada).length;
});

// 9. MÉTODOS
const agregarTarea = () => {
  if (nuevaTarea.value.nombre.trim() === "") return;

  // Añadimos la tarea al array (se crea una copia del objeto actual)
  listaTareas.value.push({
    nombre: nuevaTarea.value.nombre,
    completada: false,
  });

  // Reiniciamos el input
  nuevaTarea.value.nombre = "";
};

const eliminarTarea = (tarea) => {
  // Punto 10: Desaparecerá de la pantalla
  const index = listaTareas.value.indexOf(tarea);
  if (index > -1) {
    listaTareas.value.splice(index, 1);
  }
};

const cambiarEstado = (tarea) => {
  // Punto 10: Cambiar estado y activar/desactivar clase 'completed'
  tarea.completada = !tarea.completada;
};
</script>

<template>
  <div id="app">
    <!-- Componente Header (Punto 5) -->
    <Header />

    <!-- Formulario para añadir tareas (Punto 6 y 9) -->
    <form @submit.prevent="agregarTarea">
      <input
        v-model="nuevaTarea.nombre"
        type="text"
        placeholder="Añadir tarea..."
      />
      <br />
      <button type="submit">Añadir</button>
    </form>

    <!-- Conteos de tareas (Punto 10) -->
    <p>
      TAREAS PENDIENTES: <span>{{ pendientes }}</span> | TAREAS COMPLETADAS:
      <span>{{ completadas }}</span>
    </p>

    <!-- Lista de tareas (Punto 9) -->
    <ul>
      <!-- Iteramos sobre el State (Punto 9) -->
      <Tarea
        v-for="(t, index) in listaTareas"
        :key="index"
        :tarea="t"
        @eliminar="eliminarTarea"
        @cambiar-estado="cambiarEstado"
      />
    </ul>
  </div>
</template>

<style>
/* Estilos aplicados según el punto 6 de la práctica */
body {
  margin: 0 auto;
  padding: 50px;
  font-family: Arial, sans-serif;
  text-align: center;
  background-image: url("/imagenFondo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}

h1 {
  color: #e76018;
}

form {
  margin-bottom: 20px;
}

p {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

/* El span del conteo para que sobresalga un poco */
p span {
  color: #fff;
  border-bottom: 2px solid #e76018;
  padding: 0 5px;
}

/* Span dentro de Tarea.vue (el nombre de la tarea) */
span {
  color: black;
  font-weight: bold;
}

input {
  padding: 8px;
  width: 80%;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid #555;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
}

li {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

li span {
  display: block;
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: black;
  text-shadow: 0px 0px 2px white; /* Para mejorar legibilidad sobre fondos oscuros */
}

.completed span {
  text-decoration: line-through;
  color: grey;
}

.modificar {
  background-color: #4caf50;
}

.modificar:hover {
  background-color: #45a049;
}

.eliminar {
  background-color: red;
}

.eliminar:hover {
  background-color: darkred;
}

li button {
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
