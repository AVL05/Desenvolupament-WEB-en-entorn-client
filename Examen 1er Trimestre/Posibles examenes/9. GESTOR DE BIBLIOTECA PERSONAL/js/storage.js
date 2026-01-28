// Función: Serializa el array de libros a JSON y lo guarda en localStorage bajo la clave "biblioteca"
// Entrada: libros (Array)
// Salida: ninguna (efecto colateral: modifica localStorage)
export function guardarLibros(libros) {
  localStorage.setItem("biblioteca", JSON.stringify(libros));
}

// Función: Lee la clave "biblioteca" de localStorage, parsea JSON y devuelve el array
// Si no existe la clave, devuelve un array vacío (evita null/undefined)
// Caso borde: si JSON es inválido, JSON.parse() lanzará excepción (aquí no se captura)
export function cargarLibros() {
  return JSON.parse(localStorage.getItem("biblioteca")) || [];
}