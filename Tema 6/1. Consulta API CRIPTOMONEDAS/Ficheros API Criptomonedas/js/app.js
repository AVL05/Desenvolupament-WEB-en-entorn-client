// Selectores
// Elementos del DOM que vamos a manipular. Se obtienen una sola vez
// y se reusan en las funciones posteriores.
const criptomonedasSelect = document.querySelector('#criptomonedas'); // <select> para la cripto (value = código, ex: 'BTC')
const monedaSelect = document.querySelector('#moneda'); // <select> para la moneda fiat (value = código, ex: 'EUR')
const formulario = document.querySelector('#formulario'); // <form> que contiene los selects y botón
const resultado = document.querySelector('#resultado'); // contenedor donde se mostrará la cotización o spinner

// Objeto con las criptomonedas principales
// Estructura: array de objetos { codigo, nombre }
// - 'codigo' se utiliza para construir la consulta a la API (fsyms)
// - 'nombre' es lo que mostramos en el <option> visible para el usuario
const criptomonedas = [
    { codigo: 'BTC', nombre: 'Bitcoin' },
    { codigo: 'ETH', nombre: 'Ethereum' },
    { codigo: 'XRP', nombre: 'Ripple' },
    { codigo: 'LTC', nombre: 'Litecoin' },
    { codigo: 'ADA', nombre: 'Cardano' },
    { codigo: 'DOT', nombre: 'Polkadot' },
    { codigo: 'BNB', nombre: 'Binance Coin' },
    { codigo: 'DOGE', nombre: 'Dogecoin' },
    { codigo: 'SOL', nombre: 'Solana' },
    { codigo: 'MATIC', nombre: 'Polygon' }
];

// Objeto para almacenar la búsqueda
// - Se usa como estado simple del formulario.
// - Las claves deben coincidir con los atributos `name` de los <select>
//   en el HTML: 'moneda' y 'criptomoneda'.
const objBusqueda = {
    moneda: '',        // p.ej. 'EUR' o 'USD' (llenado desde el select `#moneda`)
    criptomoneda: ''   // p.ej. 'BTC' (llenado desde el select `#criptomonedas`)
};

// Event Listeners
// Event Listeners
// - DOMContentLoaded: esperamos a que el DOM esté listo para manipularlo
// - submit: validación y envío (preventDefault para manejarlo por JS)
// - change en ambos selects: sincroniza los valores con objBusqueda
document.addEventListener('DOMContentLoaded', () => {
    cargarCriptomonedas(); // carga las <option> del <select> de criptomonedas
    
    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Funciones

/**
 * Carga las opciones de criptomonedas en el <select> del DOM.
 * Inputs: ninguno (usa la constante `criptomonedas`).
 * Efecto: modifica el DOM añadiendo <option> al elemento `criptomonedasSelect`.
 * Nota: no devuelve valor; idóneo para inicializar el formulario.
 */
function cargarCriptomonedas() {
    criptomonedas.forEach(cripto => {
        const option = document.createElement('option');
        option.value = cripto.codigo;   // valor usado para la API
        option.textContent = cripto.nombre; // texto legible para el usuario
        criptomonedasSelect.appendChild(option);
    });
}

/**
 * Lee el valor seleccionado y lo guarda en el objeto de búsqueda
 * - e.target.name debe ser 'moneda' o 'criptomoneda'
 * - actualiza `objBusqueda` en tiempo real
 */
function leerValor(e) {
    // Guardamos el valor en el objeto de estado. Esto permite que
    // submitFormulario pueda usar la información sin leer el DOM otra vez.
    objBusqueda[e.target.name] = e.target.value;
}

/**
 * Valida el formulario y realiza la consulta a la API
 * - Previene el envío por defecto del formulario
 * - Comprueba que ambos campos están seleccionados
 * - Si todo está OK, llama a `consultarAPI()`
 * Casos borde: valores vacíos -> alerta; objBusqueda siempre contiene
 * las claves aunque no estén seleccionadas.
 */
function submitFormulario(e) {
    e.preventDefault();
    
    // Validar leyendo el estado actual
    const { moneda, criptomoneda } = objBusqueda;
    
    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    
    // Si la validación pasa, realizar la consulta asíncrona
    consultarAPI();
}

/**
 * Muestra una alerta de error en el formulario.
 * - Evita mostrar múltiples errores simultáneamente buscando `.error` existente.
 * - Añade el elemento al final del formulario y lo elimina tras 3s.
 * - Ideal para feedback simple; no accesibilidad avanzada (p.ej. role="alert").
 */
function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');
    
    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;
        
        formulario.appendChild(divMensaje);
        
        // Limpiar el mensaje automáticamente para no saturar la UI
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

/**
 * Consulta la API de CryptoCompare para obtener la cotización
 * - Construye la URL con `fsyms` (símbolo(s) cripto) y `tsyms` (moneda destino)
 * - Muestra un spinner mientras espera la respuesta
 * - Maneja errores de red y respuestas inesperadas
 * Inputs: usa `objBusqueda` (moneda y criptomoneda)
 * Efectos: actualiza el DOM llamando a `mostrarCotizacionHTML` o muestra una alerta
 */
async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;
    
    // URL pública de CryptoCompare para obtener display-friendly info
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    // Mostrar indicador visual de carga
    mostrarSpinner();
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        // La API organiza datos en resultado.DISPLAY[<CRYPTO>][<MONEDA>]
        if (resultado.DISPLAY && resultado.DISPLAY[criptomoneda] && resultado.DISPLAY[criptomoneda][moneda]) {
            // Pasamos la sección DISPLAY ya formateada para mostrarla
            mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda]);
        } else {
            // Si no hay datos en la estructura esperada, avisamos al usuario
            mostrarAlerta('No se encontraron datos para esta combinación');
        }
        
    } catch (error) {
        // Error de red o problema al parsear JSON
        console.error('Error en consultarAPI:', error);
        mostrarAlerta('Hubo un error al consultar la API. Intenta de nuevo.');
    }
}

/**
 * Muestra la cotización en el HTML
 * Input: `cotizacion` es la estructura dentro de resultado.DISPLAY[cripto][moneda]
 * Campos esperados (ejemplos): PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE
 * - PRICE suele venir ya formateado (incluye símbolo y separadores) por la API
 * - CHANGEPCT24HOUR es un número con el % de cambio en 24h (normalmente string formateado)
 */
function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;
    
    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<span>Precio más alto del día:</span> ${HIGHDAY}`;
    
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<span>Precio más bajo del día:</span> ${LOWDAY}`;
    
    const variacion = document.createElement('p');
    variacion.innerHTML = `<span>Variación últimas 24 horas:</span> ${CHANGEPCT24HOUR}%`;
    
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<span>Última actualización:</span> ${LASTUPDATE}`;
    
    // Añadimos los elementos al contenedor de resultado
    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(variacion);
    resultado.appendChild(ultimaActualizacion);
}

/**
 * Muestra un spinner mientras carga
 * - Limpia resultados anteriores y coloca un contenedor con clases
 * - Requiere estilos CSS para `.spinner .bounce1/.bounce2/.bounce3`
 */
function mostrarSpinner() {
    limpiarHTML();
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    
    resultado.appendChild(spinner);
}

/**
 * Limpia el HTML del contenedor de resultado
 * - Bucle simple para eliminar todos los hijos
 * - Útil para evitar duplicados y antes de renderizar nuevo contenido
 */
function limpiarHTML() {
        while (resultado.firstChild) {
                resultado.removeChild(resultado.firstChild);
        }
}

/*
Notas para el examen / puntos importantes:
- `objBusqueda` actúa como estado local; los nombres de campos deben coincidir
    con los atributos `name` de los controles del formulario.
- La API usada es CryptoCompare (endpoint `pricemultifull`). La estructura
    esperada es `resultado.DISPLAY[<CRYPTO>][<MONEDA>]`.
- Casos borde a comentar en examen: problemas CORS, límites de la API,
    respuestas con estructura distinta (comprobar existencia de propiedades),
    y errores de red (catch). Siempre mostrar feedback al usuario.
- Para añadir más criptos, editar la constante `criptomonedas` o cargarla
    dinámicamente desde un servicio.
*/
