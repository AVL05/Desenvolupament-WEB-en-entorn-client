<script setup>
// Imports de helpers para formatear cantidades
import { formatoMoneda } from '../helper'
// Imports de Vue
import { computed } from 'vue'
// Imports de librería externa para la gráfica circular
import "vue3-circle-progress/dist/circle-progress.css"
import CircleProgress from "vue3-circle-progress"


/**
 * DEFINICIÓN DE PROPS (Propiedades heredadas del padre)
 * Recibimos toda la información necesaria para mostrar el estado financiero.
 */
const props = defineProps({
    presupuesto: {
        type: Number,
        required: true
    },
    disponible: {
        type: Number,
        required: true
    },
    gastado: {
        type: Number,
        required: true
    }
})


/**
 * DEFINICIÓN DE EMITS (Eventos hacia el padre)
 * 'reset-app': Evento para indicar que se debe reiniciar la aplicación.
 */
const emit = defineEmits(['reset-app'])


/**
 * COMPUTED PROPERTIES
 * Cálculos visuales para la gráfica y porcentajes.
 */

// Calcula el total que falta por pagar o se ha gastado (redundante con 'gastado' si la lógica es simple,
// pero útil si queremos abstraer 'presupuesto - disponible').
const totalPagar = computed(() => {
    return props.presupuesto - props.disponible
})

// Calcula el porcentaje gastado para mostrarlo en la gráfica.
// (Gasto Total / Presupuesto Total) * 100
const porcentaje = computed(() => {
    return (totalPagar.value / props.presupuesto) * 100
})
</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <!--Ver porcentaje-->
            <CircleProgress :percent="porcentaje" :size="250" :border-width="30" :border-bg-width="30"
                fill-color="#3b82f6" empty-color="#e1e1e1" />
            <p class="porcentaje">{{ porcentaje.toFixed(1) }}%</p>
        </div>
        <div class="contenedor-presupuesto">
            <button class="reset-app" type="button" @click="$emit('reset-app')">Resear App</button>
            <p>Presupuesto: {{ formatoMoneda(presupuesto) }}</p>
            <p>Disponible: {{ formatoMoneda(disponible) }}</p>
            <p>Gastado: {{ formatoMoneda(gastado) }}</p>
        </div>
    </div>
</template>

<style scoped>
.dos-columnas {
    display: flex;
    flex-direction: column;
}

.dos-columnas> :first-child {
    margin-bottom: 3rem;
}

@media (min-width: 768px) {
    .dos-columnas {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
    }

    .dos-columnas> :first-child {
        margin-bottom: 0;
    }
}

.reset-app {
    background-color: #DB2777;
    border: none;
    padding: 1rem;
    width: 100%;
    color: var(--blanco);
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 1rem;
    transition-property: background-color;
    transition-duration: 300ms;
}

.reset-app:hover {
    cursor: pointer;
    background-color: #c11d67;
}

.contenedor-presupuesto {
    width: 100%;
}

.contenedor-presupuesto p {
    font-size: 2.4rem;
    text-align: center;
    color: var(--gris-oscuro);
}

@media (min-width: 768px) {
    .contenedor-presupuesto p {
        text-align: left;
    }
}

.contenedor-presupuesto span {
    font-weight: 900;
    color: var(--azul);
}

.contenedor-grafico {
    position: relative
}

.porcentaje {
    position: absolute;
    margin: auto;
    top: calc(50% - 1.5rem);
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    font-size: 3rem;
    font-weight: 900;
    color: var(--gris-oscuro);
}
</style>