// Lista de tareas en memoria
// - Estructura: array de strings, p.ej. ['Hacer la compra', 'Llamar a Ana']
let tareas = [];

// Inicio y carga de listeners
// - DOMContentLoaded: cargamos tareas desde localStorage y enlazamos eventos
document.addEventListener('DOMContentLoaded', () => {
    cargarTareasDeLocalStorage();
    cargarEventListeners();
});

// Añade los event listeners necesarios
// - submit del formulario para crear tareas
// - click delegada en el contenedor para eliminar tareas
function cargarEventListeners() {
    // Cuando se envía el formulario para agregar tarea
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', agregarTarea);

    // Cuando se elimina una tarea del listado (delegación)
    const listaTareas = document.querySelector('#lista-tareas');
    listaTareas.addEventListener('click', eliminarTarea);
}

// ------------------------------------------
// Funciones principales
// ------------------------------------------

// Agregar tarea
// - Input: evento submit
// - Efecto: valida, añade la tarea al array, sincroniza localStorage y renderiza
// - Casos borde cubiertos: vacío, demasiado largo (>30), duplicados (ignora mayúsculas/minúsculas)
function agregarTarea(e) {
    e.preventDefault();

    const tareaInput = document.querySelector('#tarea');
    const textoTarea = tareaInput.value.trim();

    // Validar que no esté vacío
    if(textoTarea === '') {
        mostrarError('NO HAS PUESTO NINGUNA TAREA...');
        return;
    }

    // Validar longitud máxima
    if(textoTarea.length > 30) {
        mostrarError('LA TAREA ES DEMASIADO LARGA...');
        return;
    }

    // Verificar si la tarea ya existe (comparación case-insensitive)
    const existe = tareas.some(tarea => tarea.toLowerCase() === textoTarea.toLowerCase());
    
    if(existe) {
        mostrarError(`"${textoTarea.toUpperCase()}" YA EXISTE...`);
        return;
    }

    // Agregar al array (inmutabilidad mediante spread)
    tareas = [...tareas, textoTarea];

    // Guardar en localStorage
    sincronizarStorage();
    
    // Pintar en HTML
    tareasHTML();

    // Resetear formulario
    formulario.reset();
}

// Mostrar mensaje de error
// - Crea un div temporal dentro del formulario y lo elimina tras 3s
// - Evita duplicados eliminando errores previos
function mostrarError(mensaje) {
    // Limpiar errores previos
    const errorPrevio = document.querySelector('.error');
    if(errorPrevio) {
        errorPrevio.remove();
    }

    // Crear div de error
    const divError = document.createElement('div');
    divError.classList.add('error');
    divError.textContent = mensaje;

    // Añadir al formulario
    const formulario = document.querySelector('#formulario');
    formulario.appendChild(divError);

    // Quitar después de 3 segundos
    setTimeout(() => {
        divError.remove();
    }, 3000);
}

// Eliminar tarea (delegación de eventos)
// - Se detecta click en elemento con clase 'borrar-tarea'
// - Extrae el texto de la tarea desde el padre y lo elimina del array
function eliminarTarea(e) {
    if(e.target.classList.contains('borrar-tarea')) {
        // Obtener texto de la tarea: el elemento padre contiene el texto + ' X'
        // slice(0, -1) quita la 'X' añadida al final
        const textoTarea = e.target.parentElement.textContent.trim().slice(0, -1);

        // Filtrar del array (comparación exacta porque al crear se respeta texto original)
        tareas = tareas.filter(tarea => tarea !== textoTarea);

        // Sincronizar con localStorage
        sincronizarStorage();
        
        // Actualizar HTML
        tareasHTML();
    }
}

// Mostrar tareas en HTML
// - Limpia el contenedor y renderiza cada tarea con un botón de eliminar
function tareasHTML() {
    // Limpiar el HTML
    const contenedor = document.querySelector('#lista-tareas');
    limpiarHTML(contenedor);

    // Recorrer el array y crear el HTML
    tareas.forEach(tarea => {
        const divTarea = document.createElement('div');
        // Estilos inline sencillos (mejorable con CSS externo)
        divTarea.style.marginLeft = '10%';
        divTarea.style.marginBottom = '10px';

        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarea;

        const spanBorrar = document.createElement('span');
        spanBorrar.textContent = ' X';
        spanBorrar.classList.add('borrar-tarea');
        spanBorrar.style.color = 'red';
        spanBorrar.style.cursor = 'pointer';
        spanBorrar.style.fontWeight = 'bold';
        spanBorrar.style.marginLeft = '10px';

        divTarea.appendChild(spanTexto);
        divTarea.appendChild(spanBorrar);

        contenedor.appendChild(divTarea);
    });
}

// Limpiar HTML
// - Utility para vaciar un contenedor antes de volver a renderizar
function limpiarHTML(elemento) {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

// Sincronizar con localStorage
// - Guarda el array `tareas` como JSON en localStorage
function sincronizarStorage() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Cargar tareas desde localStorage
// - Si hay datos, parsea el JSON y renderiza
// - Atención: si el formato en localStorage no es un array válido puede lanzar
//   una excepción al hacer JSON.parse; en un entorno de examen mencionar esto.
function cargarTareasDeLocalStorage() {
    // Verificar si hay tareas guardadas
    if(localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'));
        tareasHTML();
    }
}

/*
Puntos importantes para el examen:
- `localStorage` solo guarda strings: por eso usamos JSON.stringify / JSON.parse.
- Consideraciones de diseño:
  - Se hace comparación case-insensitive al añadir para evitar duplicados similares.
  - Al eliminar se compara texto exacto; si necesitas eliminar ignorando mayúsculas,
    hay que normalizar antes de comparar.
  - Posibles mejoras: manejo de IDs para cada tarea (en lugar de comparar texto),
    validación más completa, accesibilidad (teclas, roles), y separar DOM/CSS.
- Casos borde a mencionar: almacenamiento lleno, JSON corrupto en localStorage,
  X añadida al final del texto (slice) depende del formato exacto del DOM.
*/
