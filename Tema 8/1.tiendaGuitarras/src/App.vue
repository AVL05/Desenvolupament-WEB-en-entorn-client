<script setup>
import { onMounted, ref, watch } from "vue";
import Footer from "./components/Footer.vue";
import Guitarra from "./components/Guitarra.vue";
import Header from "./components/Header.vue";
import { db } from "./data/guitarras";

// Estado
const guitarras = ref([]);
const carrito = ref([]);
const guitarra = ref({});

// Observamos los cambios en 'carrito' para guardarlo en localStorage
watch(
  carrito,
  () => {
    guardarLocalStorage();
  },
  {
    deep: true,
  },
);

// Ciclo de vida para inicializar los datos
onMounted(() => {
  guitarras.value = db;
  guitarra.value = db[3];

  // Recuperamos el carrito del localStorage
  const carritoStorage = localStorage.getItem("carrito");
  if (carritoStorage) {
    carrito.value = JSON.parse(carritoStorage);
  }
});

// Guardar carrito en localStorage
const guardarLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito.value));
};

// Agregar item al carrito o incrementar cantidad si ya existe
const agregarCarrito = (guitarra) => {
  const existeCarrito = carrito.value.findIndex(
    (producto) => producto.id === guitarra.id,
  );

  if (existeCarrito >= 0) {
    carrito.value[existeCarrito].cantidad++;
  } else {
    guitarra.cantidad = 1;
    carrito.value.push(guitarra);
  }
};

// Disminuir cantidad del item
const decrementarCantidad = (id) => {
  const index = carrito.value.findIndex((producto) => producto.id === id);
  if (carrito.value[index].cantidad <= 1) return;
  carrito.value[index].cantidad--;
};

// Aumentar cantidad del item
const incrementarCantidad = (id) => {
  const index = carrito.value.findIndex((producto) => producto.id === id);
  carrito.value[index].cantidad++;
};

// Eliminar item del carrito
const eliminarProducto = (id) => {
  carrito.value = carrito.value.filter((producto) => producto.id !== id);
};

// Vaciar todo el carrito
const vaciarCarrito = () => {
  carrito.value = [];
};
</script>

<template>
  <Header
    :carrito="carrito"
    :guitarra="guitarra"
    @decrementar-cantidad="decrementarCantidad"
    @incrementar-cantidad="incrementarCantidad"
    @eliminar-producto="eliminarProducto"
    @vaciar-carrito="vaciarCarrito"
    @agregar-carrito="agregarCarrito"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>

    <div class="row mt-5">
      <Guitarra
        v-for="guitarra in guitarras"
        :key="guitarra.id"
        :guitarra="guitarra"
        @agregar-carrito="agregarCarrito"
      />
    </div>
  </main>

  <Footer />
</template>

<style></style>
