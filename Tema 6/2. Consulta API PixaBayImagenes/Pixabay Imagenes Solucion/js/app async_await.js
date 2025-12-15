
/**
 * Pequeña app de ejemplo que consulta la API de Pixabay y muestra imágenes.
 * Versión con async/await. Comentarios breves pensados para repaso rápido.
 */
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
// Número de imágenes por página que pedimos a la API
const registrosPorPagina = 40;
let totalPaginas;
let paginaActual = 1;
let iterador;
const paginacionDiv = document.querySelector('#paginacion');

// Inicializar: añadir listener al envío del formulario
document.addEventListener('DOMContentLoaded', () =>{
    formulario.addEventListener('submit', validarFormulario);
});

/**
 * Validar el formulario de búsqueda.
 * Evita enviar vacío y llama a la búsqueda si hay término.
 */
function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('   AÑADE TEMA DE BÚSQUEDA...');
        return;
    }

    // Llamar a la función que consulta la API
    buscarImagenes();
}

/**
 * Mostrar una alerta temporal debajo del formulario.
 * Evita duplicados comprobando la clase `.bg-red-100`.
 */
function mostrarAlerta(mensaje){
    // Para detectar si existe el cartel de error, no volver a crearlo
    const existeAlerta = document.querySelector('.bg-red-100');
    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-lg', 'mx-auto', 'mt-6','text-center');
        alerta.innerHTML = `
            <strong class="font-bold"> Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);

        // Quitar la alerta tras 3 segundos
        setTimeout(() =>{
            alerta.remove();
        },3000);
    }  
}

/**
 * Consultar la API de Pixabay con async/await y procesar resultados.
 * Calcula el total de páginas y muestra las imágenes actuales.
 */
async function buscarImagenes(){
    const terminoBusqueda = document.querySelector('#termino').value;
    const key = '41334952-e59cd0fa01a7c4126b2ef9006';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;
/*    
    fetch(url)
        .then(respuesta => respuesta.json())
        //esta API ofrece las imágenes en un array de "hits"
        .then(resultado => {
            //console.log(resultado);
            totalPaginas = calcularPaginas(resultado.totalHits);
            //console.log(totalPaginas);
            mostrarImagenes(resultado.hits);
        });
*/
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            //este código estará bloqueado hasta que se obtengan los resultados de la promesa
            totalPaginas = calcularPaginas(resultado.totalHits);
           
            
            
            mostrarImagenes(resultado.hits);
        }catch(error){
            console.log(error);
        }
}
/**
 * Calcular el número total de páginas para el paginador.
 */
function calcularPaginas(total){
    // redondeamos al alza
    return parseInt(Math.ceil(total/registrosPorPagina));
}


/**
 * Renderizar las imágenes en el DOM usando un grid (Tailwind).
 * Limpia los resultados anteriores y reconstruye el paginador.
 */
function mostrarImagenes(imagenes){
    // Limpiar contenedor de resultados
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    // Recorrer el array de imágenes y montarlas en la UI
    imagenes.forEach(element => {
        const {previewURL, likes, views, largeImageURL} = element;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}" >
                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light"> Me gusta</span></p>
                        <p class="font-bold"> ${views} <span class="font-light"> Veces vista</span></p>
                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"> Ver Imagen 
                        </a>
                </div>    
            </div>
        `;
    });

    // Limpiar paginador anterior y crear el nuevo
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
    imprimirPaginador();
}

//Generador que registra la cantidad de elementos según las páginas
/**
 * Generador que produce los índices de página (1..total).
 * Usado por el paginador para crear botones por página.
 */
function * crearPaginador(total){
    for (let i= 1; i <= total; i++){
        yield i;
    }
}

//pinta las páginas
/**
 * Pintar el paginador en el DOM: crea un botón por cada página.
 * Cada botón actualiza `paginaActual` y vuelve a llamar a la API.
 */
function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    while(true){
        const {value, done} = iterador.next();
        if (done) return; // fin del generador

        const boton= document.createElement('a');
        boton.href = '#';
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded' );

        boton.addEventListener('click', () =>{
            paginaActual = value;
            buscarImagenes();
        })
        paginacionDiv.appendChild(boton);
    }
}