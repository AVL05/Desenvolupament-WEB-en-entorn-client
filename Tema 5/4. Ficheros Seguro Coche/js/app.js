// Rellenar select de años
// - Añade 20 opciones (año actual y 19 anteriores)
function llenarSelectyears() {
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

// Mostrar un mensaje de error temporal en #resultado
// - Evita duplicados comprobando si ya existe .error
// - Inserta un mensaje durante 3 segundos
function mostrarMensajeError() {
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

    setTimeout(() => {
        if (mensajeError.parentNode) {
            mensajeError.remove();
        }
    }, 3000);
}

// Validar el formulario
// - Comprueba que haya una gama seleccionada, un año y una cobertura marcada
// - Nota: si no hay ningún input radio marcado, el acceso a .value lanzará
//   un error; en producción conviene comprobar la existencia del elemento
//   `document.querySelector('input[name="tipo"]:checked')` antes de usarlo.
function validarFormulario() {
    const gama = document.querySelector('#gama').value;
    const year = document.querySelector('#year').value;
    const coberturaRadio = document.querySelector('input[name="tipo"]:checked');
    const cobertura = coberturaRadio ? coberturaRadio.value : null;

    return gama !== '' && year !== '' && cobertura;
}

// Manejar envío del formulario
// - Previene el envío por defecto, valida y crea la póliza
// - Crea instancia Poliza, ejecuta cálculo y muestra el modal con el resumen
function manejarEnvioFormulario(e) {
    e.preventDefault();

    if (!validarFormulario()) {
        mostrarMensajeError();
        return;
    }

    const gama = document.querySelector('#gama').value;
    const year = document.querySelector('#year').value;
    const cobertura = document.querySelector('input[name="tipo"]:checked').value;

    const poliza = new Poliza(gama, year, cobertura);
    
    // Calcular importe y mostrar información
    poliza.calcularSeguro();
    poliza.mostrarInfoHTML();
}

// Inicialización: rellenar select y registrar handler del formulario
document.addEventListener('DOMContentLoaded', function() {
    llenarSelectyears();
    
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', manejarEnvioFormulario);
});