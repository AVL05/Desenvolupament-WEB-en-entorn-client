// Variables globales del módulo
// - `presupuesto` será instancia de Presupuesto tras preguntar al usuario
// - Selectores DOM cacheados para usar en las funciones de control
let presupuesto, restante;
const formulario = document.querySelector('#agregar-gasto');
const gastoInput = document.querySelector('#gasto');
const cantidadInput = document.querySelector('#cantidad');
const gastosListado = document.querySelector('.list-group');
const totalSpan = document.querySelector('#total');
const restanteSpan = document.querySelector('#restante');
const restanteDiv = document.querySelector('.restante');

// preguntarPresupuesto
// - Solicita al usuario el presupuesto inicial mediante prompt
// - Validaciones: no vacío, no nulo, número válido y > 0
// - Efecto: si inválido recarga la página; si válido crea una instancia
//   de `Presupuesto` y muestra los valores iniciales en la UI
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    // Comprobaciones básicas: cadena vacía, cancelar (null), no número o <= 0
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        // Recargar para forzar al usuario a introducir un presupuesto válido
        window.location.reload();
    }

    // Crear objeto presupuesto y mostrarlo
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.imprimirPresupuesto(presupuestoUsuario);
}

// añadirGasto
// - Handler del formulario: valida los inputs y añade el gasto
// - Validaciones: nombre no vacío, cantidad válida (>0 y número)
// - Efectos: añade gasto a `presupuesto`, actualiza la UI y reinicia el formulario
function añadirGasto(e) {
    e.preventDefault();

    const nombre = gastoInput.value;
    const cantidad = Number(cantidadInput.value);

    // Validaciones de los campos del formulario
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'alert-danger');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Importe NO válido', 'alert-danger');
        return;
    }

    // Crear objeto gasto con id único (timestamp)
    const gasto = { nombre, cantidad, id: Date.now() };

    // Añadir al modelo (presupuesto)
    presupuesto.nuevoGasto(gasto);

    // Notificar al usuario
    ui.imprimirAlerta('¡Gasto añadido correctamente!', 'alert-success');

    // Actualizar la UI con los nuevos datos
    const { gastos, restante } = presupuesto;
    ui.imprimirGastosListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    // Resetear formulario para nuevas entradas
    formulario.reset();
}

// eliminarGasto
// - Controlador llamado por el botón Borrar en cada <li>
// - Input: id del gasto a eliminar
// - Efecto: actualiza el modelo y la UI
function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    const { gastos, restante } = presupuesto;
    ui.imprimirGastosListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}

// Inicialización: preguntar presupuesto y registrar el listener de submit
document.addEventListener('DOMContentLoaded', function() {
    preguntarPresupuesto();

    formulario.addEventListener('submit', añadirGasto);
});