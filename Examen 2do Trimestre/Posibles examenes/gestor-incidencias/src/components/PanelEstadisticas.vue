<script setup>
const props = defineProps({
  total: Number,
  abiertas: Number,
  cerradas: Number
})
</script>

<template>
  <Card>
    <template #titulo>Estadísticas</template>
    <ul>
      <li><strong>Total:</strong> {{ total }}</li>
      <li><strong>Abiertas:</strong> {{ abiertas }}</li>
      <li><strong>Cerradas:</strong> {{ cerradas }}</li>
    </ul>
  </Card>
</template>