<script setup>
import Receta from "./Receta.vue";

defineProps({
  listaRecetas: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["agregar-favorita"]);

const handleAddFav = (receta) => {
  emit("agregar-favorita", receta);
};
</script>

<template>
  <div class="grid-recetas">
    <!-- APUNTES 8. v-for: Recorrer array de recetas -->
    <Receta
      v-for="item in listaRecetas"
      :key="item.id"
      :receta="item"
      @agregar-favorita="handleAddFav"
    />
  </div>
</template>

<style scoped>
.grid-recetas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
