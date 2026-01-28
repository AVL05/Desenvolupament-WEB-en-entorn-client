<script setup>
import { ref } from "vue";
import Formulario from "./components/Formulario.vue";
import Paciente from "./components/Paciente.vue";

const pacientes = ref([]);

const guardarPaciente = (paciente) => {
  pacientes.value.push({
    ...paciente,
    id: Date.now(),
  });
};

const eliminarPaciente = (id) => {
  pacientes.value = pacientes.value.filter((paciente) => paciente.id !== id);
};
</script>

<template>
  <div class="container mx-auto mt-20">
    <h1 class="font-black text-5xl text-center">
      Seguimiento Citas Pacientes
      <span class="text-indigo-600">Veterinaria</span>
    </h1>
  </div>
  <div class="mt-12 md:flex">
    <Formulario @guardar-paciente="guardarPaciente" />

    <div class="md:w-1/2 md:h-screen overflow-y-scroll">
      <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>

      <div v-if="pacientes.length > 0">
        <p class="text-lg mt-5 text-center mb-10">
          Informacion de
          <span class="text-indigo-600 font-bold">Citas de Pacientes</span>
        </p>
        <Paciente
          v-for="paciente in pacientes"
          :paciente="paciente"
          @eliminar-paciente="eliminarPaciente"
        />
      </div>
      <p v-else class="mt-20 text-2xl text-center">No hay Pacientes</p>
    </div>
  </div>
</template>

<style scoped></style>
