<script setup>
// Imports de assets y componentes
import image from '../assets/img/cerrar.svg'
import Alerta from './Alerta.vue';
import { ref } from 'vue';


/**
 * DICCIONARIO DE EMITS
 * 'ocultar-modal': Cierra el modal sin guardar.
 * 'guardar-gasto': Indica al padre que se debe procesar el gasto (el padre leerá el objeto 'gasto' sincronizado).
 * 'eliminar-gasto': Indica al padre que elimine el gasto actual.
 */
const emit = defineEmits(['ocultar-modal', 'guardar-gasto', 'eliminar-gasto'])


/**
 * DEFINICIÓN DE PROPS
 */
const props = defineProps({
    modal: {
        type: Object,
        required: true
    },
    disponible: {
        type: Number,
        required: true
    },
    id: {
        type: [String, null],
        required: true
    },
    gastado: {
        type: Number,
        required: true
    }
})


/**
 * TWO-WAY BINDING (Modelos)
 * Usamos 'defineModel' para sincronizar directamente estos valores con el padre ('App.vue').
 * Cualquier cambio aquí se refleja automáticamente en la variable reactiva del padre.
 */
const nombre = defineModel('nombre')
const cantidad = defineModel('cantidad')
const categoria = defineModel('categoria')


/**
 * ESTADO LOCAL
 */
// Guardamos la cantidad inicial al abrir el modal para poder validarla
// correctamente contra el presupuesto al editar (restar lo anterior y sumar lo nuevo).
const oldAmount = cantidad.value

// Mensaje de feedback para el usuario
const alerta = ref('')


/**
 * MÉTODOS
 */

// Cierra el modal
function ocultarModal() {
    emit('ocultar-modal')
}

// Emite solicitud de eliminación
function eliminarGasto() {
    emit('eliminar-gasto')
}

// Valida y emite solicitud de guardado
function agregarGasto() {
    // 1. Validar que no haya campos vacíos
    if (Object.values([nombre.value, cantidad.value, categoria.value]).includes('')) {
        alerta.value = 'Todos los campos son obligatorios'
        setTimeout(() => {
            alerta.value = ''
        }, 3000)
        return
    }

    // 2. Validar que la cantidad sea positiva
    if (cantidad.value <= 0) {
        alerta.value = 'Cantidad no válida'
        setTimeout(() => {
            alerta.value = ''
        }, 3000)
        return
    }

    // 3. Validar presupuesto disponible
    if (props.id) {
        // MODO EDICIÓN:
        // El disponible real es lo que hay ahora + lo que ocupaba este gasto antes.
        // Si la nueva cantidad supera esa suma, no se puede guardar.
        if (cantidad.value > oldAmount + props.disponible) {
            alerta.value = 'Has excedido el presupuesto'
            setTimeout(() => {
                alerta.value = ''
            }, 3000)
            return
        }
    } else {
        // MODO CREACIÓN:
        // Simplemente verificamos si la cantidad supera el disponible actual.
        if (cantidad.value > props.disponible) {
            alerta.value = 'Has excedido el presupuesto'
            setTimeout(() => {
                alerta.value = ''
            }, 3000)
            return
        }
    }

    // Si todo está correcto, emitimos 'guardar-gasto'
    // App.vue recogerá los datos de los v-models actualizados
    emit('guardar-gasto')

    // Cerramos el modal
    emit('ocultar-modal')
}
</script>

<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img :src="image" alt="icono-cerrar-modal" @click="ocultarModal" />
        </div>
        <!--Animacion del modal usasmos props porque el modal se anima con la propiedad animar que viene de App.vue-->
        <div class="contenedor contenedor-formulario" :class="[props.modal.animar ? 'animar' : 'cerrar']">
            <form class="nuevo-gasto" @submit.prevent="agregarGasto">
                <legend>{{ id ? 'Guardar Cambios' : 'Añadir Gasto' }}</legend>
                <Alerta v-if="alerta">
                    {{ alerta }}
                </Alerta>
                <div class="campo">
                    <label for="nombre">Nombre Gasto:</label>
                    <input type="text" id="nombre" placeholder="Añade el nombre del Gasto" v-model="nombre" />
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" placeholder="Añade la cantidad del Gasto, ej. 300"
                        v-model="cantidad" />
                </div>
                <div class="campo">
                    <label for="categoria">Categoría:</label>
                    <select id="categoria" v-model="categoria">
                        <option value="">-- Selecciona --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Cesta compra</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" :value="id ? 'Guardar Cambios' : 'Añadir Gasto'" />
                <button type="button" class="btn-eliminar" @click="eliminarGasto" v-if="id">Eliminar Gasto</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: absolute;
    background-color: rgb(0 0 0 / 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.cerrar-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
}

.cerrar-modal img {
    width: 3rem;
    cursor: pointer;
}

.nuevo-gasto {
    margin: 10rem auto 0 auto;
    display: grid;
    gap: 2rem;
}

.nuevo-gasto legend {
    text-align: center;
    color: var(--blanco);
    font-size: 3rem;
    font-weight: 700;

}

.campo {
    display: grid;
    gap: 2rem;
}

.nuevo-gasto input,
.nuevo-gasto select {
    background-color: var(--gris-claro);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
}

.nuevo-gasto label {
    color: var(--blanco);
    font-size: 3rem;
}

.nuevo-gasto input[type="submit"] {
    background-color: var(--azul);
    color: var(--blanco);
    font-weight: 700;
    cursor: pointer;
}

.contenedor-formulario {
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
}

.contenedor-formulario.animar {
    opacity: 1;
}

.contenedor-formulario.cerrar {
    opacity: 0;
}

.btn-eliminar {
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    width: 100%;
    background-color: #ef4444;
    font-weight: 700;
    font-size: 2.2rem;
    color: var(--blanco);
    margin-top: 10rem;
    cursor: pointer;
}
</style>
