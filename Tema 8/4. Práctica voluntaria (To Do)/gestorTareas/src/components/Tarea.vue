<script setup>
const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["eliminar", "cambiar-estado"]);
</script>

<template>
  <li :class="{ completed: tarea.completada }">
    <span>{{ tarea.nombre }}</span>
    <div>
      <button class="modificar" @click="emit('cambiar-estado', tarea)">
        <!-- Lógica según punto 10: 
             Si no está completada -> Botón dice 'Marcar como completada'
             Si está completada -> Botón dice 'Marcar como pendiente' -->
        {{
          tarea.completada ? "Marcar como pendiente" : "Marcar como completada"
        }}
      </button>
      <button class="eliminar" @click="emit('eliminar', tarea)">
        Eliminar
      </button>
    </div>
  </li>
</template>
