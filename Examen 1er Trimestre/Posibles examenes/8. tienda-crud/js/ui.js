// UI utilities: crear nodos DOM reutilizables para la tienda
// - crearTarjeta: tarjeta de producto con botón "Agregar"
// - crearFilaCarrito: fila para la tabla del carrito con input de cantidad y botón eliminar

export function crearTarjeta(producto, agregarCallback) {
  const div = document.createElement("div");
  // Contenido visual simple: imagen, nombre, precio y botón
  div.innerHTML = `
    <img src="${producto.imagen}" width="150">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio} €</p>
    <button>Agregar</button>
  `;
  // Al pulsar agregar, llamamos al callback proporcionado por la lógica de negocio
  div.querySelector("button").addEventListener("click", () => agregarCallback(producto));
  return div;
}

export function crearFilaCarrito(item, eliminarCallback, cambiarCantidadCallback) {
  const tr = document.createElement("tr");
  // Fila: nombre, precio unitario, input cantidad, subtotal y botón eliminar
  tr.innerHTML = `
    <td>${item.nombre}</td>
    <td>${item.precio}</td>
    <td><input type="number" value="${item.cantidad}" min="1" max="${item.stock}"></td>
    <td>${(item.precio * item.cantidad).toFixed(2)}</td>
    <td><button>X</button></td>
  `;
  // Cuando cambia la cantidad, avisamos al controlador con id y nueva cantidad
  tr.querySelector("input").addEventListener("change", e => {
    cambiarCantidadCallback(item.id, parseInt(e.target.value));
  });
  // Botón eliminar: llamamos al callback de negocio con el id del producto
  tr.querySelector("button").addEventListener("click", () => eliminarCallback(item.id));
  return tr;
}