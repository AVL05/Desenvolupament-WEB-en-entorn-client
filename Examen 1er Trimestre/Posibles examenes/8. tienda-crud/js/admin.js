import { obtenerProductos, crearProducto, eliminarProducto, actualizarProducto } from "./api.js";

// Script del panel de administración
// - Carga productos desde la API y los muestra en una tabla
// - Permite crear, editar y eliminar productos (CRUD) usando json-server
// - Usa campos por id en el formulario (#nombre, #precio, #categoria, #stock, #imagen)

const tabla = document.getElementById("tabla-productos");
const formulario = document.getElementById("formulario");

let editandoId = null; // id del producto que estamos editando (null si se crea uno nuevo)

// Manejar submit del formulario: crear o actualizar producto según el estado
formulario.addEventListener("submit", async e => {
  e.preventDefault();

  // Obtener valores por id (no dependemos de name en el formulario)
  const nombreInput = document.getElementById('nombre');
  const precioInput = document.getElementById('precio');
  const categoriaInput = document.getElementById('categoria');
  const stockInput = document.getElementById('stock');
  const imagenInput = document.getElementById('imagen');

  const producto = {
    nombre: nombreInput.value.trim(),
    precio: parseFloat(precioInput.value),
    categoria: categoriaInput.value.trim(),
    stock: parseInt(stockInput.value),
    imagen: imagenInput.value.trim()
  };

  if (!producto.nombre || isNaN(producto.precio) || !producto.categoria || isNaN(producto.stock) || !producto.imagen) {
    alert("Todos los campos son obligatorios y deben ser válidos");
    return;
  }

  if (editandoId) {
    await actualizarProducto(editandoId, producto);
    editandoId = null;
  } else {
    await crearProducto(producto);
  }

  formulario.reset();
  cargarProductos();
});

async function cargarProductos() {
  // Limpiar tabla y volver a poblarla desde la API
  tabla.innerHTML = "";
  const productos = await obtenerProductos();

  productos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${p.imagen}" width="50"></td>
      <td>${p.nombre}</td>
      <td>${p.precio.toFixed(2)} €</td>
      <td>${p.categoria}</td>
      <td>${p.stock}</td>
      <td>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
      </td>
    `;

    // Editar: rellenar el formulario con los datos del producto
    tr.querySelector(".editar").addEventListener("click", () => {
      document.getElementById('nombre').value = p.nombre;
      document.getElementById('precio').value = p.precio;
      document.getElementById('categoria').value = p.categoria;
      document.getElementById('stock').value = p.stock;
      document.getElementById('imagen').value = p.imagen;
      editandoId = p.id;
    });

    // Eliminar: confirmar y llamar al endpoint DELETE
    tr.querySelector(".eliminar").addEventListener("click", async () => {
      if (confirm("¿Eliminar este producto?")) {
        await eliminarProducto(p.id);
        cargarProductos();
      }
    });

    tabla.appendChild(tr);
  });
}

// Cargar productos al iniciar el panel
cargarProductos();