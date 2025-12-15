// Módulo principal: selectores y eventos
// - Importa la clase `Poliza` y funciones auxiliares del módulo `funciones.js`.
// - Responsabilidad: inicializar select, validar el formulario y orquestar
//   el flujo de cotización al crear una instancia de `Poliza`.

import { Poliza } from './clase.js';
import { llenarSelectyears, mostrarMensajeError, validarFormulario } from './funciones.js';

// Selectores
// - `formulario` es el <form> principal que envía los datos para cotizar
const formulario = document.querySelector('#cotizar-seguro');

// Función que maneja el envío del formulario
// - Input: evento submit
// - Flujo:
//   1) prevenir comportamiento por defecto
//   2) validar con `validarFormulario()` (si falla, mostrar error y salir)
//   3) leer valores seleccionados (gama, year, cobertura)
//   4) crear instancia `Poliza`, calcular y mostrar resultados
// - Efectos: muestra modal con resumen (mediante `poliza.mostrarInfoHTML()`)
function manejarEnvioFormulario(e) {
    e.preventDefault();

    // Validación simple: funciones.js exporta `validarFormulario`
    if (!validarFormulario()) {
        // Si la validación falla, `mostrarMensajeError()` añade un mensaje al DOM
        mostrarMensajeError();
        return;
    }

    // Leer valores del formulario
    const gama = document.querySelector('#gama').value;
    const year = document.querySelector('#year').value;
    const cobertura = document.querySelector('input[name="tipo"]:checked').value;

    // Crear póliza y ejecutar cálculo
    const poliza = new Poliza(gama, year, cobertura);
    poliza.calcularSeguro();
    
    // Mostrar resultado al usuario (modal Bootstrap)
    poliza.mostrarInfoHTML();
}

// Eventos
// - DOMContentLoaded: rellenar select de años y registrar listener del formulario
document.addEventListener('DOMContentLoaded', function() {
    llenarSelectyears();
    
    formulario.addEventListener('submit', manejarEnvioFormulario);
});
