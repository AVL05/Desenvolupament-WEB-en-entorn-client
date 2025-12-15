// Módulo que contiene las funciones genéricas y variables globales
// Estas funciones son auxiliares: rellenan el select de años, validan
// el formulario y muestran mensajes de error en la UI.

// Función para llenar el select de años
// - Efecto: añade 20 opciones al <select id="year"> con años desde el actual hacia atrás
// - Input: ninguno (accede al DOM)
// - Uso: llamada en DOMContentLoaded desde `app.js`
export function llenarSelectyears() {
    const selectyear = document.querySelector('#year');
    const yearActual = new Date().getFullYear();
        
    for (let i = 0; i < 20; i++) {
        const year = yearActual - i;
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        selectyear.appendChild(option);
    }
}

// Función para mostrar mensaje de error
// - Evita duplicados buscando un elemento con clase .error
// - Inserta un mensaje en el contenedor #resultado y lo elimina tras 3s
// - Ideal para notificar al usuario que los campos son obligatorios
export function mostrarMensajeError() {
    const errorExistente = document.querySelector('.error');
    if (errorExistente) {
        return;
    }

    const mensajeError = document.createElement('div');
    mensajeError.className = 'error mt-10';
    
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Todos los campos son OBLIGATORIOS';
    mensajeError.appendChild(parrafo);
    
    const divResultado = document.querySelector('#resultado');
    divResultado.appendChild(mensajeError);

    // Eliminar el mensaje pasado 3 segundos para que la UI no quede saturada
    setTimeout(() => {
        if (mensajeError.parentNode) {
            mensajeError.remove();
        }
    }, 3000);
}

// Función para validar el formulario
// - Comprueba que exista una gama seleccionada, un year y que haya una cobertura marcada
// - Retorna true si todo está correcto, false en caso contrario
// - Nota: la función asume que siempre hay un input radio seleccionado para 'tipo'
//         si no hay ninguno, el acceso a `.value` podría lanzar; en el examen mencionar
//         que es buena práctica comprobar la existencia del elemento antes de acceder.
export function validarFormulario() {
    const gama = document.querySelector('#gama').value;
    const year = document.querySelector('#year').value;
    const cobertura = document.querySelector('input[name="tipo"]:checked').value;

    return gama !== '' && year !== '' && cobertura;
}
