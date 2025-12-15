// Selectores principales
const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnSubmit = formulario.querySelector('button[type="submit"]');
const btnReset = formulario.querySelector('button[type="reset"]');
const spinner = document.getElementById('spinner');

// Expresión regular para validar emails (simplificada pero suficiente para el ejercicio)
// - Explica: comienza por caracteres alfanuméricos/guiones/puntos, permite +-_, dominio y TLD de 2-10 caracteres
const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Estado de errores por campo. true = hay error (inicialmente todo inválido)
const errores = {
    email: true,
    asunto: true,
    mensaje: true
};

// Mostrar alerta junto al campo
// - Crea un DIV con estilo de error y lo inserta después del campo `referencia`
// - Antes de crear, llama a `limpiarAlerta` para evitar duplicados
function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    
    const error = document.createElement('DIV');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    
    // Insertar el mensaje inmediatamente después del elemento de referencia
    referencia.parentElement.insertBefore(error, referencia.nextElementSibling);
}

// Limpiar alerta existente para un campo
function limpiarAlerta(referencia) {
    const alerta = referencia.parentElement.querySelector('.bg-red-600');
    if(alerta) {
        alerta.remove();
    }
}

// Validación del campo email
// - Usa trim() para evitar espacios en blanco
// - Usa regex.test() para comprobar formato
// - Actualiza `errores.email` y muestra/limpia alertas según corresponda
function validarEmail() {
    const valorEmail = email.value.trim();
    
    if(valorEmail === '') {
        mostrarAlerta('El campo EMAIL es obligatorio', email);
        errores.email = true;
    } else {
        // Usar el método test que devuelve un booleano
        const resultado = regex.test(valorEmail);
        if(!resultado) {
            mostrarAlerta('El campo EMAIL NO es válido', email);
            errores.email = true;
        } else {
            limpiarAlerta(email);
            errores.email = false;
        }
    }
}

// Validación del campo asunto (no vacío)
function validarAsunto() {
    const valorAsunto = asunto.value.trim();
    
    if(valorAsunto === '') {
        mostrarAlerta('El campo ASUNTO es obligatorio', asunto);
        errores.asunto = true;
    } else {
        limpiarAlerta(asunto);
        errores.asunto = false;
    }
}

// Validación del campo mensaje (no vacío)
function validarMensaje() {
    const valorMensaje = mensaje.value.trim();
    
    if(valorMensaje === '') {
        mostrarAlerta('El campo MENSAJE es obligatorio', mensaje);
        errores.mensaje = true;
    } else {
        limpiarAlerta(mensaje);
        errores.mensaje = false;
    }
}

// validarFormulario: orquesta las validaciones individuales y habilita/deshabilita el botón enviar
function validarFormulario() {
    validarEmail();
    validarAsunto();
    validarMensaje();
    
    // Si no hay errores en ninguno de los campos, habilitar el botón enviar
    if(!errores.email && !errores.asunto && !errores.mensaje) {
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('opacity-50');
    } else {
        btnSubmit.disabled = true;
        btnSubmit.classList.add('opacity-50');
    }
}

// Listeners: blur y input para validar en tiempo real y al salir del campo
email.addEventListener('blur', validarFormulario);
asunto.addEventListener('blur', validarFormulario);
mensaje.addEventListener('blur', validarFormulario);

email.addEventListener('input', validarFormulario);
asunto.addEventListener('input', validarFormulario);
mensaje.addEventListener('input', validarFormulario);

// Envío del formulario (simulado)
// - Previene el submit real, valida y si todo OK muestra spinner 3s
// - Después muestra alert, resetea formulario y estado de errores
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validarFormulario();
    
    if(!errores.email && !errores.asunto && !errores.mensaje) {
        // Mostrar spinner (simulación de envío)
        spinner.innerHTML = `
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        `;
        spinner.classList.remove('hidden');
        
        setTimeout(function() {
            // Ocultar spinner y notificar
            spinner.innerHTML = '';
            spinner.classList.add('hidden');
            
            alert('El mensaje se ha enviado');
            
            // Reset form y limpiar mensajes de error
            formulario.reset();
            limpiarAlerta(email);
            limpiarAlerta(asunto);
            limpiarAlerta(mensaje);
            
            // Restablecer estado de errores y deshabilitar botón enviar
            errores.email = true;
            errores.asunto = true;
            errores.mensaje = true;
            btnSubmit.disabled = true;
            btnSubmit.classList.add('opacity-50');
        }, 3000);
    }
});

// Reset del formulario: limpia alertas y devuelve el estado inicial
btnReset.addEventListener('click', function() {
    limpiarAlerta(email);
    limpiarAlerta(asunto);
    limpiarAlerta(mensaje);
    
    errores.email = true;
    errores.asunto = true;
    errores.mensaje = true;
    
    btnSubmit.disabled = true;
    btnSubmit.classList.add('opacity-50');
});
