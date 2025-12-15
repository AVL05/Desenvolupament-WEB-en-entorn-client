// API helpers: llamadas al backend (json-server) para productos
// URL base utilizada por todas las funciones
const URL = "http://localhost:4000/productos";

// Obtener todos los productos (GET /productos)
export async function obtenerProductos() {
  const res = await fetch(URL);
  return await res.json();
}

// Crear un producto nuevo (POST /productos)
export async function crearProducto(producto) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });
  return await res.json();
}

// Eliminar producto por id (DELETE /productos/:id)
export async function eliminarProducto(id) {
  await fetch(`${URL}/${id}`, { method: "DELETE" });
}

// Actualizar producto (PUT /productos/:id)
export async function actualizarProducto(id, producto) {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });
}