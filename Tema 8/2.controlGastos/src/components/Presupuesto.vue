<script setup>

// Importaciones
import { ref } from "vue";
import Alerta from './Alerta.vue';

// Refs
const presupuestoInicial = ref(0);
const alerta = ref('');

//Emits
const emit = defineEmits(['definir-presupuesto'])

// Funciones
function validarPresupuesto() {
    // Validamos que el presupuesto sea mayor a 0
    if (presupuestoInicial.value <= 0 || presupuestoInicial.value === '') {
        alerta.value = "¡PRESUPUESTO NO VALIDO!"

        // Limpiamos el presupuesto y la alerta
        setTimeout(() => {
            presupuestoInicial.value = 0
            alerta.value = ''
        }, 3000)
        return
    }

    // Guardamos el presupuesto con emit, llamamos a la funcion definirPresupuesto
    emit('definir-presupuesto', presupuestoInicial.value)

}

</script>

<template>
    <!-- 
    Aqui estamos usando slots para pasar el contenido de la alerta al componente Alerta

    -v-if="alerta" es para que la alerta solo se muestre si alerta no es vacio
    -{{ alerta }} es para mostrar el contenido de la alerta
    -@submit.prevent="validarPresupuesto" es para que al enviar el formulario se ejecute la funcion validarPresupuesto

    -->
    <form class="presupuesto" @submit.prevent="validarPresupuesto">
        <Alerta v-if="alerta">
            {{ alerta }}
        </Alerta>

        <div class="campo">
            <label for="nuevo-presupuesto">Definir Presupuesto</label>
            <input type="number" id="nuevo-presupuesto" class="nuevo-presupuesto" placeholder="Indica tu presupuesto"
                v-model="presupuestoInicial">
        </div>
        <input type="submit" value="Aceptar">
    </form>
</template>

<style scoped>
.presupuesto {
    width: 100%;
}

.campo {
    display: grid;
    gap: 2rem;
}

.presupuesto label {
    font-size: 2.2rem;
    text-align: center;
    color: var(--azul);
}

.presupuesto input[type="number"] {
    background-color: var(--gris-claro);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
    text-align: center;
}

.presupuesto input[type="submit"] {
    background-color: var(--azul);
    border: none;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    color: var(--blanco);
    font-weight: 900;
    width: 100%;
    transition: background-color 300ms ease;
}

.presupuesto input[type="submit"]:hover {
    background-color: #1048A4;
    cursor: pointer;
}
</style>