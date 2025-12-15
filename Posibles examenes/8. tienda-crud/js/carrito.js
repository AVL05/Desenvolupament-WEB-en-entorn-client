// Lógica del carrito almacenado en localStorage
// - Mantiene una copia en memoria (`carrito`) y la persiste tras cada cambio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregar(producto) {
  const existe = carrito.find(p => p.id === producto.id);
  if (existe) {
    // Aumentar cantidad hasta el stock máximo
    if (existe.cantidad < producto.stock) existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardar();
}

export function eliminar(id) {
  carrito = carrito.filter(p => p.id !== id);
  guardar();
}

export function cambiarCantidad(id, cantidad) {
  carrito = carrito.map(p => p.id === id ? { ...p, cantidad } : p);
  guardar();
}

export function vaciar() {
  carrito = [];
  guardar();
}

export function obtener() {
  return carrito;
}

function guardar() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}