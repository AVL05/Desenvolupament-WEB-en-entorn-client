/**
 * Lógica de creación de cliente (nuevo cliente).
 * - Valida campos del formulario y, si pasan, envía un POST a la API.
 * - En caso de fallo muestra una alerta amigable.
 */

import { nuevoCliente } from './API.js';
import { validar, mostrarAlerta } from './funciones.js';

// Añadir listener al formulario cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);
});

/**
 * Validar el formulario y crear un nuevo cliente via API.
 */
async function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    };

    // Validar que todos los campos estén completos
    if (validar(cliente)) {
        // Si la validación es correcta, crear el cliente
        try {
            await nuevoCliente(cliente);
        } catch (error) {
            // Mostrar mensaje de error si fallo la petición
            mostrarAlerta('Fallo al conectar con la base de datos');
        }
    } else {
        // Mostrar alerta de error si hay campos vacíos
        mostrarAlerta('Todos los campos son obligatorios');
    }
}
