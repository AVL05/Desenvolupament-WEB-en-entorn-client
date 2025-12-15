// Alex_Vicente.js
// Script para el simulador de envío de emails (navegador)
// - Crea el formulario dinámicamente
// - Valida nombre, email y mensaje en tiempo real (CC opcional)
// - Muestra errores inline, activa/desactiva botón Enviar
// - Simula envío con spinner y alerta

// Creamos un nodo form (no insertado directamente): se usa el id 'formulario' al renderizar.
const formulario = document.createElement('form');
formulario.id = 'formulario';

// Expresión regular para validar emails (suficientemente restrictiva para uso de examen/prácticas).
// Nota: no es 100% RFC, pero cubre formatos normales como usuario@dominio.tld y subdominios.
const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Objeto para almacenar errores por campo, e.g. { email: 'EMAIL no es válido' }
let errores = {};

// Al cargar el DOM: construir el formulario y añadir listeners.
document.addEventListener('DOMContentLoaded', () => {
    crearFormulario();
    cargarEventListeners();
});

// crearFormulario
// - Inserta el HTML del formulario en .contenido-hero
// - Añade campo CC opcional
function crearFormulario() {
    const contenedor = document.querySelector('.contenido-hero');
    // Se asume que existe el contenedor. Si no existe, el script fallará al intentar acceder a .innerHTML.
    contenedor.innerHTML = `
        <h2>Envío de Emails</h2>
        <p>Simulador de envío de mensajes</p>
        <form id="formulario">
            <div>
                <label for="nombre">Nombre:</label>
                <input class="u-full-width" type="text" id="nombre" name="nombre" placeholder="Tu nombre">
            </div>
            <div>
                <label for="email">Email:</label>
                <input class="u-full-width" type="email" id="email" name="email" placeholder="tu@email.com">
            </div>
            <div id="cc-container"></div>
            <div>
                <label for="mensaje">Mensaje:</label>
                <textarea class="u-full-width" id="mensaje" name="mensaje" placeholder="Tu mensaje" rows="4"></textarea>
            </div>
            <button type="submit" id="enviar" class="button-primary" disabled style="background-color: #ccc;">Enviar</button>
            <button type="reset" id="reset" class="button">Reset</button>
        </form>
    `;
    
    // Añadimos el campo CC dinámicamente (se queda dentro de #cc-container).
    agregarCampoCC();
}

// agregarCampoCC
// - Añade el input CC dentro del formulario (opcional)
function agregarCampoCC() {
    const ccContainer = document.querySelector('#cc-container');
    ccContainer.innerHTML = `
        <div>
            <label for="cc">CC:</label>
            <input class="u-full-width" type="email" id="cc" name="cc" placeholder="cc@email.com">
        </div>
    `;
}

// cargarEventListeners
// - Añade listeners: blur/input para validar, submit para enviar, reset para limpiar
function cargarEventListeners() {
    const form = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const cc = document.querySelector('#cc');
    const mensaje = document.querySelector('#mensaje');
    const btnReset = form.querySelector('button[type="reset"]');
    
    // Validación al salir del campo (blur)
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    cc.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    
    // Validación en tiempo real (input)
    nombre.addEventListener('input', validarCampo);
    email.addEventListener('input', validarCampo);
    cc.addEventListener('input', validarCampo);
    mensaje.addEventListener('input', validarCampo);
    
    // Envío y reseteo
    form.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', resetearFormulario);
}

// validarCampo
// - Valida campos en blur/input
// - Reglas: obligatorio salvo CC; email con regex
// - Actualiza objeto errores y llama comprobarFormulario
function validarCampo(e) {
    // Trim para evitar espacios en blanco que den falsos positivos.
    if(e.target.value.trim().length > 0) {
        if(e.target.type === 'email') {
            if(regex.test(e.target.value)) {
                // Email válido: eliminar error si existía
                delete errores[e.target.id];
                mostrarError(e.target, null);
            } else {
                // Email inválido: registrar error
                errores[e.target.id] = `${e.target.id.toUpperCase()} no es válido`;
                mostrarError(e.target, errores[e.target.id]);
            }
        } else {
            // Campo no-email y no vacío: eliminar error
            delete errores[e.target.id];
            mostrarError(e.target, null);
        }
    } else {
        // Campo vacío
        if(e.target.id !== 'cc') {
            // CC es opcional, el resto es obligatorio
            errores[e.target.id] = `${e.target.id.toUpperCase()} es obligatorio`;
            mostrarError(e.target, errores[e.target.id]);
        } else {
            // CC vacío: no error
            delete errores[e.target.id];
            mostrarError(e.target, null);
        }
    }
    
    comprobarFormulario();
}

// mostrarError
// - Muestra o elimina mensaje de error junto al campo
function mostrarError(campo, mensaje) {
    limpiarError(campo);
    
    if(mensaje) {
        const error = document.createElement('div');
        // Clases usadas para estilo (pueden venir de un CSS utilitario)
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        error.textContent = mensaje;
        error.id = `error-${campo.id}`;
        
        // Insertamos el mensaje como hijo del contenedor del campo
        campo.parentElement.appendChild(error);
    }
}

// limpiarError
// - Quita el mensaje de error asociado al campo si existe
function limpiarError(campo) {
    const errorAnterior = document.querySelector(`#error-${campo.id}`);
    if(errorAnterior) {
        errorAnterior.remove();
    }
}

// comprobarFormulario
// - Activa el botón Enviar si no hay errores y campos obligatorios rellenos
function comprobarFormulario() {
    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();
    const btnEnviar = document.querySelector('#enviar');
    
    if(Object.keys(errores).length === 0 && nombre && email && mensaje) {
        // Habilitar botón y restaurar color por defecto
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor = '';
    } else {
        // Deshabilitar botón y aplicar apariencia desactivada
        btnEnviar.disabled = true;
        btnEnviar.style.backgroundColor = '#ccc';
    }
}

// enviarEmail
// - Simula el envío: mostrar spinner, esperar y mostrar alerta
function enviarEmail(e) {
    e.preventDefault();
    
    // Muestra un spinner de carga (simulación)
    mostrarSpinner();
    
    // Simulación de envío asíncrono: 3 segundos
    setTimeout(() => {
        ocultarSpinner();
        mostrarAlerta('El mensaje se ha enviado');
        resetearFormulario();
    }, 3000);
}

// mostrarSpinner
// - Añade un spinner al formulario (animación dependiente de CSS)
function mostrarSpinner() {
    const spinner = document.createElement('div');
    spinner.classList.add('sk-circle');
    spinner.id = 'spinner';
    
    // Se crean 12 elementos para la animación (dependen del CSS asociado)
    for(let i = 1; i <= 12; i++) {
        const circle = document.createElement('div');
        circle.classList.add(`sk-circle${i}`);
        spinner.appendChild(circle);
    }
    
    document.querySelector('#formulario').appendChild(spinner);
}

// ocultarSpinner
// - Elimina el spinner si está presente
function ocultarSpinner() {
    const spinner = document.querySelector('#spinner');
    if(spinner) {
        spinner.remove();
    }
}

// mostrarAlerta
// - Notifica al usuario (usa alert por simplicidad)
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// resetearFormulario
// - Resetea el formulario, limpia errores y desactiva el botón Enviar
function resetearFormulario(e) {
    if(e) {
        e.preventDefault();
    }
    
    document.querySelector('#formulario').reset();
    errores = {};
    
    // Eliminar todos los nodos de error creados (id que empiezan por 'error-')
    const erroresDOM = document.querySelectorAll('[id^="error-"]');
    erroresDOM.forEach(error => error.remove());
    
    const btnEnviar = document.querySelector('#enviar');
    btnEnviar.disabled = true;
    btnEnviar.style.backgroundColor = '#ccc';
}
