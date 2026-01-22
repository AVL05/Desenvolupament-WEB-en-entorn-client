<script setup>
// Props: Datos que este componente recibe del componente padre (App.vue).
// 'tarea': Objeto con la información de la tarea individual.
// 'index': Índice de la tarea en el array, necesario para identificarla al modificar/eliminar.
defineProps({
  tarea: {
    type: Object,
    required: true,
  },
  index: Number,
});

// Emits: Eventos que este componente puede enviar al padre.
// Informamos al padre cuándo debe ejecutar las acciones de cambiar estado o eliminar.
const emit = defineEmits(["cambiar-estado", "eliminar-tarea"]);
</script>

<template>
  <li>
    <span :class="{ completed: tarea.completada }">{{ tarea.nombre }}</span>
    <div>
      <button class="modificar" @click="emit('cambiar-estado', index)">
        Marcar como {{ tarea.completada ? "pendiente" : "completada" }}
      </button>
      <button class="eliminar" @click="emit('eliminar-tarea', index)">
        Eliminar
      </button>
    </div>
  </li>
</template>
