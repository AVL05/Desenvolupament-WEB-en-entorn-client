<script setup>
import { reactive } from "vue";
import Alerta from "./Alerta.vue";

const emit = defineEmits(["guardar-paciente"]);

const cita = reactive({
  mascota: "",
  propietario: "",
  email: "",
  cita: "",
  sintomas: "",
  id: null,
});

const alerta = reactive({
  tipo: "",
  mensaje: "",
});

const agregarCita = () => {
  if (
    Object.values(cita).some(
      (valor) => valor === "" && typeof valor === "string",
    )
  ) {
    alerta.tipo = "error";
    alerta.mensaje = "TODOS LOS CAMPSS SON OBLIGATORIOS";
    return;
  }

  emit("guardar-paciente", { ...cita });

  alerta.tipo = "exito";
  alerta.mensaje = "CITA ALMACENADA CORRECTAMENTE";

  setTimeout(() => {
    Object.assign(alerta, {
      tipo: "",
      mensaje: "",
    });
  }, 3000);

  Object.assign(cita, {
    mascota: "",
    propietario: "",
    email: "",
    cita: "",
    sintomas: "",
    id: null,
  });
};
</script>
<template>
  <div class="md:w-1/2">
    <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p class="text-lg mt-5 text-center mb-10">
      Añade citas de Pacientes y
      <span class="text-indigo-600 font-bold">Administrarlas</span>
    </p>

    <Alerta v-if="alerta.mensaje" :alerta="alerta" />

    <form
      class="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      @submit.prevent="agregarCita"
    >
      <div class="mb-5">
        <label for="mascota" class="block text-gray-700 uppercase font-bold"
          >Nombre Mascota</label
        >
        <input
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          v-model="cita.mascota"
        />
      </div>

      <div class="mb-5">
        <label for="propietario" class="block text-gray-700 uppercase font-bold"
          >Nombre Propietario</label
        >
        <input
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          v-model="cita.propietario"
        />
      </div>

      <div class="mb-5">
        <label for="email" class="block text-gray-700 uppercase font-bold"
          >Email</label
        >
        <input
          id="email"
          type="email"
          placeholder="Introduce tu email"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          v-model="cita.email"
        />
      </div>

      <div class="mb-5">
        <label for="cita" class="block text-gray-700 uppercase font-bold"
          >Cita</label
        >
        <input
          id="cita"
          type="date"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          v-model="cita.cita"
        />
      </div>

      <div class="mb-5">
        <label for="sintomas" class="block text-gray-700 uppercase font-bold"
          >Sintomas</label
        >
        <textarea
          id="sintomas"
          placeholder="Describe los síntomas"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40"
          v-model="cita.sintomas"
        ></textarea>
      </div>
      <input
        type="submit"
        class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        value="Registrar Cita"
      />
    </form>
  </div>
</template>
