// Script principal de la página index: cargar productos y gestionar carrito
import { obtenerProductos } from "./api.js";
import { crearTarjeta, crearFilaCarrito } from "./ui.js";
import * as carrito from "./carrito.js";

const contenedor = document.getElementById("productos");
const tabla = document.getElementById("carrito");
const btnVaciar = document.getElementById("vaciar");

// Cargar productos desde la API y crear tarjetas con botón "Agregar"
obtenerProductos().then(productos => {
  productos.forEach(p => {
    const tarjeta = crearTarjeta(p, producto => {
      carrito.agregar(producto);
      renderizarCarrito();
    });
    contenedor.appendChild(tarjeta);
  });
});

// Vaciar carrito desde el botón
btnVaciar.addEventListener("click", () => {
  carrito.vaciar();
  renderizarCarrito();
});

// Renderizar tabla del carrito a partir de los items almacenados
function renderizarCarrito() {
  tabla.innerHTML = "";
  carrito.obtener().forEach(item => {
    const fila = crearFilaCarrito(item, carrito.eliminar, carrito.cambiarCantidad);
    tabla.appendChild(fila);
  });
}

renderizarCarrito();