//inicia la aplicación. Puede contener alguna función complementaria

import { obtenerClientes, eliminarCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

/**
 * Script de la lista principal (index):
 * - Carga clientes desde la API y renderiza la tabla en el DOM.
 * - Maneja el evento de eliminación y refresca la vista.
 */

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarClientes();
});

/**
 * Obtener clientes y renderizarlos en la tabla HTML.
 * Maneja errores mostrando una alerta breve al usuario.
 */
async function mostrarClientes() {
    try {
        const clientes = await obtenerClientes();

        const listado = document.querySelector('#listado-clientes');
        listado.innerHTML = '';

        // Si la API devuelve null/undefined, evitar error
        if (!clientes) return;

        clientes.forEach(cliente => {
        const { nombre, email, telefono, empresa, id } = cliente;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>
                <p class="text-sm leading-10 text-gray-700">${email}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listado.appendChild(row);
    });

    // Añadir event listener a los botones de eliminar (después de renderizar)
    const botonesEliminar = document.querySelectorAll('.eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', confirmarEliminar);
    });
    } catch (error) {
        console.error('mostrarClientes error:', error);
        mostrarAlerta('Fallo al cargar clientes');
    }
}

// Confirmar eliminación
// - Previene el comportamiento por defecto del enlace
// - Pide confirmación al usuario y llama a `eliminarCliente`
// - Tras eliminar, recarga la lista llamando a `mostrarClientes()`
/**
 * Confirmar y eliminar un cliente.
 * Previene el comportamiento por defecto, pide confirmación y llama a la API.
 */
async function confirmarEliminar(e) {
    e.preventDefault();

    const clienteId = parseInt(e.target.dataset.cliente);

    const confirmar = confirm('¿Deseas eliminar este cliente?');

    if (confirmar) {
        try {
            await eliminarCliente(clienteId);
            // Recargar la lista de clientes
            await mostrarClientes();
        } catch (error) {
            console.error('confirmarEliminar error:', error);
            mostrarAlerta('Fallo al eliminar cliente');
        }
    }
}
