"use strict";

import { guardarLibros, cargarLibros } from "./storage.js";
import { renderizarLibros } from "./ui.js";

// Selectores del DOM — identifica los elementos principales
const contenedor = document.getElementById("contenedor-libros");
const formulario = document.getElementById("formulario-libro");
const modal = document.getElementById("formulario-modal");
const btnAbrir = document.getElementById("btn-abrir-formulario");
const btnCerrar = document.getElementById("btn-cerrar-formulario");
const filtroGenero = document.getElementById("filtro-genero");
const filtroLeido = document.getElementById("filtro-leido");

// Estado global: carga los libros desde localStorage al iniciar (persistencia)
// Nota: si localStorage está vacío, cargarLibros devuelve un array vacío
let biblioteca = cargarLibros();
let editandoId = null; // ID del libro en edición (null = crear nuevo)

// Evento: Abre el modal del formulario. Reset borra datos previos, editandoId=null indica modo "crear"
btnAbrir.addEventListener("click", () => {
  modal.classList.remove("oculto");
  formulario.reset();
  editandoId = null;
});

// Evento: Cierra el modal sin guardar cambios
btnCerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});

// Evento: Maneja el envío del formulario (crear o actualizar libro)
formulario.addEventListener("submit", e => {
  e.preventDefault();
  // Construye objeto libro: si editandoId existe, usa ese id; si no, genera uno único con Date.now()
  const libro = {
    id: editandoId || Date.now(),
    titulo: formulario.titulo.value.trim(),
    autor: formulario.autor.value.trim(),
    genero: formulario.genero.value,
    leido: formulario.leido.checked
  };

  // Validación: campos obligatorios
  if (!libro.titulo || !libro.autor || !libro.genero) {
    alert("Todos los campos son obligatorios");
    return;
  }

  // Si editandoId existe, actualiza el libro en el array (map busca y reemplaza)
  // Si no existe, es un libro nuevo (push al final)
  if (editandoId) {
    biblioteca = biblioteca.map(l => l.id === editandoId ? libro : l);
  } else {
    biblioteca.push(libro);
  }

  // Guarda en localStorage, cierra modal y re-renderiza
  guardarLibros(biblioteca);
  modal.classList.add("oculto");
  render();
});

// Función: Carga los datos del libro en el formulario y activa modo edición
function editarLibro(libro) {
  modal.classList.remove("oculto");
  // Rellena cada campo con los datos existentes del libro
  formulario.titulo.value = libro.titulo;
  formulario.autor.value = libro.autor;
  formulario.genero.value = libro.genero;
  formulario.leido.checked = libro.leido;
  // Marca que estamos editando este libro (en handleSubmit usará map para reemplazar)
  editandoId = libro.id;
}

// Función: Elimina un libro con confirmación del usuario
function eliminarLibro(id) {
  if (confirm("¿Eliminar este libro?")) {
    // Filter crea un nuevo array sin el libro con ese id
    biblioteca = biblioteca.filter(l => l.id !== id);
    guardarLibros(biblioteca);
    render();
  }
}

// Registra listeners en los filtros para que al cambiar valor se re-renderice
[filtroGenero, filtroLeido].forEach(f => f.addEventListener("change", render));

// Función: Aplica filtros sobre la biblioteca y renderiza el resultado
function render() {
  // Copia la biblioteca para no mutar el original
  let filtrados = [...biblioteca];

  const genero = filtroGenero.value;
  const estado = filtroLeido.value;

  // Filtra por género: si es "todos" no aplica filtro
  if (genero !== "todos") {
    filtrados = filtrados.filter(l => l.genero === genero);
  }

  // Filtra por estado de lectura: "leido" (true), "no-leido" (false) o "todos" (sin filtro)
  if (estado === "leido") {
    filtrados = filtrados.filter(l => l.leido);
  } else if (estado === "no-leido") {
    filtrados = filtrados.filter(l => !l.leido);
  }

  // Delegación: renderizarLibros recibe array filtrado, contenedor y funciones de callback
  renderizarLibros(filtrados, contenedor, editarLibro, eliminarLibro);
}

// Renderiza la biblioteca inicial al cargar la página
render();