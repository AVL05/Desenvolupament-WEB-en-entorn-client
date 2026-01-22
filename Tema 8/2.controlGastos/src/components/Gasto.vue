<script setup>
// Imports de helpers para formateo de fechas y moneda
import { formatearFecha, formatoMoneda } from "../helper";

// Imports de iconos estáticos (svg)
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'


/**
 * DICCIONARIO DE ICONOS
 * Mapea el string de la categoria (key) con el archivo de imagen importado (value).
 * Así podemos mostrar dinámicamente el icono correcto según 'gasto.categoria'.
 */
const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}


/**
 * DEFINICIÓN DE PROPS
 * Recibimos el objeto 'gasto' individual para renderizarlo.
 */
const props = defineProps({
    gasto: {
        type: Object,
        required: true
    }
})


/**
 * DEFINICIÓN DE EMITS
 * 'seleccionar-gasto': Se emite cuando el usuario hace clic en el nombre del gasto para editarlo.
 */
const emit = defineEmits(['seleccionar-gasto'])

// Función local que simplemente emite el evento al padre con el ID del gasto
function seleccionarGasto() {
    emit('seleccionar-gasto', props.gasto.id)
}
</script>

<template>
    <div class="gasto sombra">
        <div class="contenido">
            <img :src="diccionarioIconos[gasto.categoria]" alt="icono gasto" class="icono">
            <div class="detalles">
                <p class="categoria">{{ gasto.categoria }}</p>
                <p class="nombre" @click="seleccionarGasto">{{ gasto.nombre }} (haz click para editar)</p>
                <p class="fecha">Fecha: <span>{{ formatearFecha(gasto.fecha) }}</span></p>
            </div>
        </div>
        <p class="cantidad">{{ formatoMoneda(gasto.cantidad) }}</p>
    </div>
</template>

<style scoped>
.gasto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    width: 100%;
}

.contenido {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.icono {
    width: 5rem;
}

.detalles p {
    margin: 0 0 1rem 0;
}

.categoria {
    color: var(--gris);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
}

.nombre {
    color: var(--gris-oscuro);
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
}

.fecha {
    color: var(--gris-oscuro);
    font-size: 1.6rem;
    font-weight: 900;
}

.fecha span {
    font-weight: 400;
}

.cantidad {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
}

.gasto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.contenido {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.icono {
    width: 5rem;
}

.detalles p {
    margin: 0 0 1rem 0;
}

.categoria {
    color: var(--gris);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
}

.nombre {
    color: var(--gris-oscuro);
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
}

.fecha {
    color: var(--gris-oscuro);
    font-size: 1.6rem;
    font-weight: 900;
}

.fecha span {
    font-weight: 400;
}

.cantidad {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
}
</style>