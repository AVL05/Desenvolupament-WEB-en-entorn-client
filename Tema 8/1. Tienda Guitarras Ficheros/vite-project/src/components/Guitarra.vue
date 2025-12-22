<script setup>
import { ref } from "vue";
const props = defineProps({
  guitarra: {
    type: Object,
    required: true,
  },
});
defineEmits(["agregar-carrito"]);

const numero = ref(0);

const agregarCarrito = (numero) => {
  console.log("holaaaaa", numero);
};
</script>
<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <img
        class="img-fluid"
        v-bind:src="`./img/${guitarra.imagen}.jpg`"
        v-bind:alt="'imagen guitarra' + guitarra.nombre"
      />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ guitarra.nombre }}
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
        labore odit magnam in autem nesciunt, amet deserunt
      </p>
      <p class="fw-black text-primary fs-3">{{ guitarra.precio }}€</p>
      <button
        type="button"
        class="btn btn-dark w-100"
        @:click="$emit('agregar-carrito', guitarra)"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>
<style></style>
