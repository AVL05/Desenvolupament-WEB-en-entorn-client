// Variables
// `carrito` almacena en memoria los items añadidos por el usuario.
// Estructura: array de objetos { imagen, titulo, precio, id, cantidad }
let carrito = [];

// Inicio y carga de listeners
// - DOMContentLoaded: carga el carrito desde localStorage y registra eventos
document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();
    cargarEventListeners();
});

// Registrar listeners de la interfaz
function cargarEventListeners() {
    // Cuando se añade un curso presionando "Agregar al Carrito"
    const listaCursos = document.querySelector('#lista-cursos');
    listaCursos.addEventListener('click', agregarCurso);

    // Cuando se elimina un curso del carrito (delegación)
    const carritoElement = document.querySelector('#carrito');
    carritoElement.addEventListener('click', eliminarCurso);

    // Cuando se vacía el carrito
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Funciones

// Agregar curso al carrito
// - Input: evento click (delegado desde #lista-cursos)
// - Efecto: si el objetivo es el botón correcto, lee datos, añade/actualiza item,
//   guarda en localStorage y renderiza el carrito actualizado
function agregarCurso(e) {
    e.preventDefault();

    // Verificar que se hizo click en el botón correcto
    if (e.target.classList.contains('agregar-carrito')) {
        // Subir dos niveles para encontrar el contenedor del curso (HTML específico)
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Leer datos del curso desde el DOM
// - Input: elemento DOM del curso
// - Output/efecto: construye `infoCurso` y lo añade al array `carrito`
function leerDatosCurso(curso) {
    // Crear un objeto con la información del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Verificar si el curso ya existe en el carrito (por id)
    const existe = carrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        // Actualizar cantidad: map para mantener inmutabilidad
        const cursos = carrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        carrito = [...cursos];
    } else {
        // Agregar al carrito
        carrito = [...carrito, infoCurso];
    }

    // Guardar en localStorage
    guardarCarritoEnLocalStorage();
    
    // Mostrar el carrito en el HTML
    carritoHTML();
}

// Eliminar curso del carrito
// - Input: evento click en el area del carrito
// - Efecto: decrementa cantidad o elimina el item, guarda y renderiza
function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Buscar el curso en el carrito por id
        const curso = carrito.find(curso => curso.id === cursoId);

        if (curso && curso.cantidad > 1) {
            // Si tiene más de 1, reducir cantidad
            curso.cantidad--;
            carrito = [...carrito];
        } else {
            // Eliminar del carrito
            carrito = carrito.filter(curso => curso.id !== cursoId);
        }

        // Guardar en localStorage
        guardarCarritoEnLocalStorage();
        
        // Actualizar el HTML
        carritoHTML();
    }
}

// Vaciar carrito
// - Input: evento click
// - Efecto: limpia el array, guarda y renderiza vacío
function vaciarCarrito(e) {
    e.preventDefault();

    // Vaciar el array del carrito
    carrito = [];

    // Limpiar localStorage
    guardarCarritoEnLocalStorage();

    // Limpiar el HTML
    carritoHTML();
}

// Mostrar carrito en HTML
// - Recorre `carrito` y crea filas en la tabla del carrito
function carritoHTML() {
    // Limpiar el HTML
    const carritoElement = document.querySelector('#lista-carrito tbody');
    limpiarHTML(carritoElement);

    // Recorrer el carrito y generar el HTML
    carrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        carritoElement.appendChild(row);
    });
}

// Limpiar HTML
// - Utility que elimina todos los hijos de un elemento
function limpiarHTML(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

// Guardar carrito en localStorage
// - Convierte `carrito` a string JSON y lo guarda
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
// - Lee JSON, parsea y renderiza si hay datos
// - Nota de examen: JSON.parse puede lanzar si el contenido está corrupto
function cargarCarritoDeLocalStorage() {
    // Verificar si hay algo en localStorage
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        carritoHTML();
    }
}

/*
Puntos importantes para el examen:
- `localStorage` solo almacena strings: se usa JSON.stringify / JSON.parse.
- Se identifican cursos por `id` (atributo data-id) para evitar colisiones por título.
- Al sumar cantidades se modifica el objeto dentro del array; aquí se mantiene
  la referencia al objeto y luego se reasigna el array para seguir una práctica
  de inmutabilidad superficial (spread). En aplicaciones grandes, preferir
  estructuras con IDs únicas y manejar estado con métodos inmutables.
- Casos borde: contenido corrupto en localStorage, límites de almacenamiento,
  y sincronización entre pestañas (no manejado aquí). También validar el
  formato de `precio` si se necesitan cálculos.
- Mejoras posibles: añadir total del carrito, persistencia por usuario en servidor,
  o manejo de eventos storage para sincronizar entre pestañas.
*/
