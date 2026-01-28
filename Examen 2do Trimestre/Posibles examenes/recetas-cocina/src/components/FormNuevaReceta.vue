<script setup>
import { reactive } from "vue";

const emit = defineEmits(["nueva-receta"]);

// APUNTES 6. State: reactive para formulario complejo
const form = reactive({
  nombre: "",
  dificultad: "Fácil", // Valor por defecto
  ingredientesTexto: "",
});

// APUNTES 13. Formularios: Validación y envío
const enviarReceta = () => {
  if (form.nombre.trim() === "") {
    alert("El nombre es obligatorio");
    return;
  }

  const nuevaReceta = {
    id: Date.now(),
    nombre: form.nombre,
    dificultad: form.dificultad,
    // Convertir texto separado por comas a array
    ingredientes: form.ingredientesTexto
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== ""),
    imagen: "https://via.placeholder.com/300?text=Nueva+Receta", // Imagen placeholder
  };

  emit("nueva-receta", nuevaReceta);

  // Reset del formulario
  form.nombre = "";
  form.dificultad = "Fácil";
  form.ingredientesTexto = "";
};
</script>

<template>
  <form @submit.prevent="enviarReceta" class="form-receta">
    <div class="form-group">
      <label>Nombre de la Receta:</label>
      <!-- APUNTES 13. Formularios: v-model -->
      <input v-model="form.nombre" type="text" placeholder="Ej: Pizza Casera" />
    </div>

    <div class="form-group">
      <label>Dificultad:</label>
      <select v-model="form.dificultad">
        <option>Fácil</option>
        <option>Media</option>
        <option>Difícil</option>
      </select>
    </div>

    <div class="form-group">
      <label>Ingredientes (separados por comas):</label>
      <textarea
        v-model="form.ingredientesTexto"
        rows="3"
        placeholder="Ej: Harina, Agua, Sal..."
      ></textarea>
    </div>

    <button type="submit" class="btn-submit">Añadir Receta</button>
  </form>
</template>

<style scoped>
.form-receta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
}

input,
select,
textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
}

textarea {
  resize: vertical;
}

.btn-submit {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
}

.btn-submit:hover {
  background-color: var(--color-primary-dark);
}
</style>
