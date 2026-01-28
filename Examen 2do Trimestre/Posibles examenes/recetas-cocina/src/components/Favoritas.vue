<script setup>
import { computed } from "vue";

const props = defineProps({
  favoritas: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["vaciar-favoritas"]);

// APUNTES 11. Computed: Total dinámico
const totalFavoritas = computed(() => {
  return props.favoritas.length;
});
</script>

<template>
  <div class="favoritas-panel">
    <div class="fav-header">
      <h2>Mis Favoritas</h2>
      <span class="badge-count">{{ totalFavoritas }}</span>
    </div>

    <!-- APUNTES 8. v-if/v-else -->
    <div v-if="favoritas.length === 0" class="empty">
      No has guardado ninguna receta aún.
    </div>

    <ul v-else class="fav-list">
      <li v-for="fav in favoritas" :key="fav.id">
        {{ fav.nombre }}
      </li>
    </ul>

    <button
      v-if="favoritas.length > 0"
      @click="$emit('vaciar-favoritas')"
      class="btn-clear"
    >
      Vaciar Lista
    </button>
  </div>
</template>

<style scoped>
.favoritas-panel {
  background-color: #fff1f2;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #fecdd3;
}

.fav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #9d174d;
}

.badge-count {
  background: #db2777;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.empty {
  color: #999;
  font-style: italic;
  font-size: 0.9rem;
}

.fav-list {
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
  color: #831843;
}

.fav-list li {
  margin-bottom: 0.5rem;
}

.btn-clear {
  background: white;
  border: 1px solid #db2777;
  color: #db2777;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  width: 100%;
  transition: all 0.2s;
}

.btn-clear:hover {
  background: #db2777;
  color: white;
}
</style>
