<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { reactive } from 'vue'

// Importación de componentes hijos
import Presupuesto from './components/Presupuesto.vue';
import Controlpresupuesto from './components/Controlpresupuesto.vue';
import Modal from './components/Modal.vue'
import Gasto from './components/Gasto.vue'
import Filtro from './components/Filtro.vue'

// Importación de helpers y assets
import { generarId } from './helper'
import iconoNuevoGasto from './assets/img/nuevo-gasto.svg'

/**
* ESTADO DE LA APLICACIÓN (State)
* Usamos 'ref' para valores primitivos (números, strings) y 'reactive' para objetos complejos.
*/

// Presupuesto total definido por el usuario
const presupuesto = ref(0)
// Dinero que queda disponible para gastar
const disponible = ref(0)
// Dinero total que ya se ha gastado
const gastado = ref(0)
// Categoría seleccionada para filtrar el listado de gastos
const filtro = ref('')
// Array principal que almacena todos los gastos registrados
const gastos = ref([])

// Estado reactivo para controlar la ventana modal (formulario)
const modal = reactive({
  mostrar: false, // Si está visible en el DOM (v-if)
  animar: false // Si tiene la clase de animación CSS aplicada
})

// Objeto reactivo que representa el gasto que se está creando o editando actualmente
const gasto = reactive({
  nombre: '',
  cantidad: '',
  categoria: '',
  id: null,
  fecha: new Date()
})


/**
* COMPUTED PROPERTIES
* Valores que se calculan automáticamente basándose en otros estados.
*/

// Devuelve los gastos filtrados segun la categoría seleccionada.
// Si no hay filtro, devuelve todos los gastos.
const gastosFiltrados = computed(() => {
  if (filtro.value) {
    return gastos.value.filter(gasto => gasto.categoria === filtro.value)
  }
  return gastos.value
})


/**
* CICLO DE VIDA (Lifecycle Hooks)
* Se ejecutan en momentos específicos de la vida del componente.
*/

// onMounted: Se ejecuta cuando el componente se ha "montado" (renderizado) en el DOM.
// Lo usamos para cargar los datos guardados en LocalStorage (persistencia).
onMounted(() => {
  const presupuestoStorage = localStorage.getItem('presupuesto')
  if (presupuestoStorage) {
    presupuesto.value = Number(presupuestoStorage)
    disponible.value = Number(presupuestoStorage)
  }
  const gastosStorage = localStorage.getItem('gastos')
  if (gastosStorage) {
    gastos.value = JSON.parse(gastosStorage)
  }
})


/**
* WATCHERS
* Observan cambios en variables específicas y ejecutan código en respuesta.
*/

// Observa cambios en el array 'gastos'.
// Cada vez que añadimos/editamos/eliminamos un gasto:
// 1. Recalcula el disponible
// 2. Recalcula lo gastado
// 3. Guarda el array actualizado en LocalStorage
watch(gastos, () => {
  calcularDisponible()
  calcularGastado()
  localStorage.setItem('gastos', JSON.stringify(gastos.value))
}, {
  deep: true // 'deep' es necesario para vigilar cambios profundos en arrays u objetos
})

// Observa el estado del modal.
// Si se cierra (mostrar = false), reiniciamos el formulario del gasto.
watch(modal, () => {
  if (!modal.mostrar) {
    reiniciarGasto()
  }
}, { deep: true })

// Guarda el presupuesto en LocalStorage cada vez que cambie
watch(presupuesto, () => {
  localStorage.setItem('presupuesto', presupuesto.value)
})

// Si cambiamos el filtro, recalculamos (aunque esto podría ser redundante si el filtrado es solo visual,
// pero aquí nos aseguramos de que los cálculos estén al día).
watch(filtro, () => {
  calcularGastado()
}, {
  deep: true
})


/**
* FUNCIONES HELPERS / MÉTODOS
* Lógica de negocio de la aplicación.
*/

// Define el presupuesto inicial y sincroniza el disponible.
function definirPresupuesto(valor) {
  presupuesto.value = valor
  disponible.value = valor
  gastado.value = 0
}

// Calcula cuánto dinero queda disponible
function calcularDisponible() {
  disponible.value = presupuesto.value - gastos.value.reduce((total, gasto) => total + gasto.cantidad, 0)
}

// Calcula la suma total de todos los gastos
function calcularGastado() {
  gastado.value = gastos.value.reduce((total, gasto) => total + gasto.cantidad, 0)
}

// Muestra la ventana modal con animación de entrada
function mostrarModal() {
  modal.mostrar = true
  setTimeout(() => {
    modal.animar = true
  }, 300) // Pequeño retraso para permitir que la animación CSS se vea fluida
}

// Cierra la ventana modal con animación de salida
function ocultarModal() {
  modal.animar = false
  setTimeout(() => {
    modal.mostrar = false
  }, 300) // Esperamos a que termine la animación antes de eliminarlo del DOM
}

// Guarda un gasto (nuevo o editado)
function guardarGasto() {
  if (gasto.id) {
    // Si tiene ID, estamos EDITANDO: buscamos el índice y reemplazamos
    const { id } = gasto
    const i = gastos.value.findIndex(gasto => gasto.id === id)
    gastos.value[i] = { ...gasto }
  } else {
    // Si NO tiene ID, es un gasto NUEVO: generamos ID y añadimos al array
    gasto.id = generarId()
    gastos.value.push({ ...gasto })
  }
  ocultarModal()
  reiniciarGasto()
}

// Prepara el formulario para editar un gasto existente
// Busca el gasto por ID y copia sus valores al objeto reactivo 'gasto'
function seleccionarGasto(id) {
  const gastoEditar = gastos.value.filter(gasto => gasto.id === id)[0]
  Object.assign(gasto, gastoEditar) // Copiamos valores al formulario
  mostrarModal()
}

// Elimina un gasto del listado
function eliminarGasto() {
  if (confirm('Eliminar?')) {
    gastos.value = gastos.value.filter(gastoState => gastoState.id !== gasto.id)
    ocultarModal()
  }
}

// Reinicia el objeto 'gasto' a sus valores vacíos originales (limpiar formulario)
function reiniciarGasto() {
  Object.assign(gasto, {
    nombre: '',
    cantidad: '',
    categoria: '',
    id: null,
    fecha: new Date()
  })
}

// Reinicia toda la aplicación a su estado inicial (borra LocalStorage)
function resetearApp() {
  if (confirm('¿Deseas reiniciar presupuesto y gastos?')) {
    gastos.value = []
    presupuesto.value = 0
  }
}
</script>

<template>
  <div :class="{ fijar: modal.mostrar }">
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="contenedor-header contenedor sombra">
        <Presupuesto @definir-presupuesto="definirPresupuesto" v-if="presupuesto === 0" />
        <Controlpresupuesto v-else :presupuesto="presupuesto" :disponible="disponible" :gastado="gastado"
          @reset-app="resetearApp" />
      </div>
    </header>
    <main>
      <Filtro v-if="presupuesto" v-model:filtro="filtro" />

      <div class="crear-gasto">
        <img :src="iconoNuevoGasto" alt="icono-nuevo-gasto" @click="mostrarModal" v-if="presupuesto">
      </div>
      <!--Pasamos por props el modal con :modal="modal"-->
      <Modal v-if="modal.mostrar" @ocultar-modal="ocultarModal" @guardar-gasto="guardarGasto"
        @eliminar-gasto="eliminarGasto" :modal="modal" :disponible="disponible" :id="gasto.id"
        v-model:nombre="gasto.nombre" v-model:cantidad="gasto.cantidad" v-model:categoria="gasto.categoria" />
      <div class="listado-gastos contenedor">
        <h2 v-if="presupuesto">{{ gastosFiltrados.length ? 'Gastos' : 'No hay gastos' }}</h2>
        <Gasto :key="gasto.id" v-for="gasto in gastosFiltrados" :gasto="gasto" @seleccionar-gasto="seleccionarGasto" />
      </div>

    </main>
  </div>
</template>


<style>
:root {
  --azul: #3b82f6;
  --blanco: #FFF;
  --gris-claro: #F5F5F5;
  --gris: #94a3b8;
  --gris-oscuro: #64748b;
  --negro: #000;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
  font-family: " Lato", sans-serif;
  background-color: var(--gris-claro);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size:
    3rem;
}

header {
  background-color: var(--azul);
}

header h1 {
  padding: 3rem 0;
  margin: 0;
  color: var(--blanco);
  text-align: center;
}

.contenedor {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.contenedor-header {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.sombra {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--blanco);
  border-radius: 1.2rem;
  padding: 5rem;
}

.crear-gasto {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}

.crear-gasto img {
  width: 5rem;
  cursor: pointer;
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

.listado-gastos {
  margin-top: 10rem;
}

.listado-gastos h2 {
  font-weight: 900;
  color: var(--gris-oscuro);
}

.fijar {
  overflow: hidden;
  height: 100vh;
}
</style>
