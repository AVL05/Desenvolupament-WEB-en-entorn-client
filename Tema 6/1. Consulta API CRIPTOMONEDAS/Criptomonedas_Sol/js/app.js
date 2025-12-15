// App: consulta la API de Cryptocompare y muestra cotizaciones
// - Carga top 10 criptomonedas en el select
// - Permite elegir moneda y criptomoneda y ver precio/variación
// Selecciones del DOM
const criptomonedaSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

// Objeto para almacenar la búsqueda actual
const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

/*
// OPCION II
//Promise que resuelva cuando las criptomonedas se hayan descargado correctamente
//Función anónima(creada con expression function)
const obtenerCriptomonedas = criptomonedas => new Promise (resolve => resolve(criptomonedas));
*/

// Inicializar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar las top 10 criptomonedas en el select
    consultarCriptomonedas();
    formulario.reset();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedaSelect.addEventListener('change', leerValor); 
    monedaSelect.addEventListener('input', leerValor);
});

// Consultar top 10 criptomonedas y llenar el select
function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; 

    fetch(url)
        .then(respuesta => respuesta.json())
        .catch(() => alert("Ha habido un error en la conexión, inténtelo más tarde!"))
        .then(resultado => seleccionarCriptomonedas(resultado.Data)) // OPCION I
        // Nota: console.log(resultado.Data) estaba en el original pero queda fuera del then
        
}

// Rellenar el select de criptomonedas con los resultados de la API
function seleccionarCriptomonedas(criptomonedas){
    criptomonedas.forEach(element => {
        // Destructuring para obtener nombre completo y símbolo
        const {FullName, Name} = element.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedaSelect.appendChild(option);
    });
}

// Actualizar objBusqueda cuando el usuario selecciona valores
function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

// Manejar submit: validar campos y consultar la API si está todo OK
function submitFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;

    if (moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    // Consultar la API para obtener los valores solicitados
    consultarAPI();

}

// Mostrar alerta temporal de validación
function mostrarAlerta(mensaje){
    const existeError = document.querySelector('.error');
    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);
        setTimeout(()=> {
            divMensaje.remove();
        }, 2000);
    }

}

// Consultar la API de precios para la moneda/criptomoneda seleccionadas
// Muestra spinner mientras carga
function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    mostrarSpinner();
    fetch(url)
        .then(respuesta => respuesta.json())
        .then (valor => {
            mostrarValoresHTML(valor.DISPLAY[criptomoneda][moneda]);
        })
}

// Renderizar valores en el DOM (precio, alto, bajo, variación, actualización)
function mostrarValoresHTML(endpointValores){
    limpiarHTML();
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = endpointValores;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;

    const variacion = document.createElement('p');
    variacion.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

    const actualizacion = document.createElement('p');
    actualizacion.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(variacion);
    resultado.appendChild(actualizacion);
}

// Limpiar el contenedor de resultados
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Mostrar spinner de carga
function mostrarSpinner(){
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