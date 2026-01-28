<script setup>
// APUNTES 9. Props: Recibimos el objeto receta
const props = defineProps({
  receta: {
    type: Object,
    required: true,
  },
});

// APUNTES 10. Eventos (emit): Evento para añadir a favoritas
const emit = defineEmits(["agregar-favorita"]);

const handleAddFav = () => {
  emit("agregar-favorita", props.receta);
};

// Helper para color de dificultad (no es computed, es simple función visual)
const getDificultadClass = (dif) => {
  if (dif === "Fácil") return "dif-facil";
  if (dif === "Difícil") return "dif-dificil";
  return "dif-media";
};
</script>

<template>
  <div class="receta-card">
    <div class="receta-img">
      <!-- Si usaras imágenes locales irían en /public/img, aquí usamos URL externas por simplicidad -->
      <img :src="receta.imagen" :alt="receta.nombre" />
      <span
        class="badge-dificultad"
        :class="getDificultadClass(receta.dificultad)"
      >
        {{ receta.dificultad }}
      </span>
    </div>

    <div class="receta-content">
      <h3>{{ receta.nombre }}</h3>

      <div class="ingredientes-section">
        <h4>Ingredientes:</h4>
        <!-- APUNTES 8. v-for: Listado de ingredientes -->
        <ul>
          <li v-for="(ing, index) in receta.ingredientes" :key="index">
            • {{ ing }}
          </li>
        </ul>
      </div>

      <button @click="handleAddFav" class="btn-fav">
        ❤ Añadir a Favoritas
      </button>
    </div>
  </div>
</template>

<style scoped>
.receta-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.receta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.receta-img {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.receta-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge-dificultad {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
}

.dif-facil {
  background-color: #10b981;
}
.dif-media {
  background-color: #f59e0b;
}
.dif-dificil {
  background-color: #ef4444;
}

.receta-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: var(--color-text);
}

.ingredientes-section h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #888;
}

.ingredientes-section ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  font-size: 0.9rem;
  color: #555;
}

.btn-fav {
  margin-top: auto;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-secondary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-fav:hover {
  background-color: #be185d;
}
</style>
