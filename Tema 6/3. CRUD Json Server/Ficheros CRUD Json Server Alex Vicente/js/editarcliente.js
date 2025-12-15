/**
 * Página de edición de cliente:
 * - Fase 1: cargar datos existentes en el formulario (GET por id).
 * - Fase 2: validar y enviar cambios al servidor (PUT).
 * Uso: abrir `editar-cliente.html?id=<id>` y editar campos.
 */

import { obtenerCliente, editarCliente } from './API.js';
import { validar, mostrarAlerta } from './funciones.js';

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del cliente de la URL (query string ?id=)
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosURL.get('id'));

    // Cargar datos del cliente en el formulario
    cargarCliente(idCliente);

    // Listener al formulario para procesar la edición
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarClienteEdicion);
});

/**
 * Cargar datos de un cliente en el formulario.
 */
async function cargarCliente(id) {
    try {
        const cliente = await obtenerCliente(id);

        // Proteger contra respuestas vacías
        if (!cliente) return;

        // Llenar el formulario con los valores existentes
        const { nombre, email, telefono, empresa } = cliente;
        document.querySelector('#nombre').value = nombre;
        document.querySelector('#email').value = email;
        document.querySelector('#telefono').value = telefono;
        document.querySelector('#empresa').value = empresa;
        // Campo oculto para mantener el id al enviar
        document.querySelector('#id').value = id;
    } catch (error) {
        console.error('cargarCliente error:', error);
        mostrarAlerta('Fallo al cargar los datos del cliente');
    }
}

/**
 * Validar campos del formulario y enviar la edición al servidor.
 * Muestra una alerta si la validación falla o si la API devuelve error.
 */
async function validarClienteEdicion(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;
    const id = document.querySelector('#id').value;

    const cliente = {
        nombre,
        email,
        telefono,
        empresa,
        id
    };

    // Validar que todos los campos estén completos
    if (validar(cliente)) {
        // Si la validación es correcta, editar el cliente
        try {
            await editarCliente(cliente);
        } catch (error) {
            // Mostrar mensaje amigable al usuario si la API falla
            mostrarAlerta('Fallo al conectar con la base de datos');
        }
    } else {
        // Mostrar alerta de error si hay campos vacíos
        mostrarAlerta('Todos los campos son obligatorios');
    }
}
