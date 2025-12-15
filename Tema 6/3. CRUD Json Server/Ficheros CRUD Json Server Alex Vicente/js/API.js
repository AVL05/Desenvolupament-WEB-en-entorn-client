/**
 * Módulo API — llamadas a json-server para la entidad `clientes`.
 * Cada función es asíncrona y puede lanzar una excepción si falla la red.
 * Mantener la URL base aquí facilita cambios posteriores (p. ej. otro puerto).
 */
const url = 'http://localhost:4000/clientes';

/**
 * Obtener todos los clientes.
 */
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        // En entorno real conviene propagar o mostrar un mensaje al usuario
        console.error('obtenerClientes error:', error);
    }
}

/**
 * Obtener un cliente por su id.
 */
export const obtenerCliente = async (id) => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.error('obtenerCliente error:', error);
    }
}

/**
 * Crear un nuevo cliente en el servidor.
 * En caso de éxito, redirige a 'index.html'.
 */
export const nuevoCliente = async (cliente) => {
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (respuesta.ok) {
            // Comportamiento de la app: redirigir a la lista de clientes
            window.location.href = 'index.html';
        } else {
            // Lanzamos error para que el llamador pueda manejarlo
            throw new Error('Fallo al conectar con la base de datos');
        }
    } catch (error) {
        console.error('nuevoCliente error:', error);
        throw error; // Lanzar el error para que sea capturado en nuevocliente.js
    }
}

/**
 * Actualizar un cliente existente (PUT completo).
 * En caso de éxito, redirige a 'index.html'.
 */
export const editarCliente = async (cliente) => {
    try {
        const respuesta = await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (respuesta.ok) {
            window.location.href = 'index.html';
        } else {
            throw new Error('Fallo al conectar con la base de datos');
        }
    } catch (error) {
        console.error('editarCliente error:', error);
        throw error; // Lanzar el error para que sea capturado en editarcliente.js
    }
}

/**
 * Eliminar un cliente por id.
 */
export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('eliminarCliente error:', error);
    }
}
