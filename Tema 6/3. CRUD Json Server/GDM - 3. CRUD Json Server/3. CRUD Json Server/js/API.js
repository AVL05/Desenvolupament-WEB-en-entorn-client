//Acciones con la API de Json Server

import { showError } from "./funciones.js";

// Obtiene todos los clientes desde la API
export const getData = async () => {
	try {
		const url = "http://localhost:4000/clientes";
		const res = await fetch(url);
		if (!res.ok) throw new Error("No se pudieron obtener los clientes");
		return await res.json();
	} catch (error) {
		showError("Error al obtener los datos de clientes");
		console.error("Error al obtener datos:", error);
		return [];
	}
};

// Obtiene un cliente específico por ID
export const getClient = async (id) => {
	try {
		const url = `http://localhost:4000/clientes/${id}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error(`Cliente con ID ${id} no encontrado`);
		return await res.json();
	} catch (error) {
		showError(`No se pudo encontrar el cliente con ID ${id}`);
		console.error("Error al obtener cliente:", error);
		return null;
	}
};

// Inserta un nuevo cliente en la API
export const insertClient = async (clientData) => {
	try {
		const res = await fetch(`http://localhost:4000/clientes`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(clientData),
		});
		
		if (!res.ok) {
			throw new Error("Error al crear el cliente");
		}
		
		// Redirigir a la página principal
		window.location.href = "index.html";
		
	} catch (error) {
		showError("No se pudo crear el cliente. Por favor, inténtelo de nuevo.");
		console.error("ERROR: Ha habido un error al crear el cliente:", error);
	}
};

// Edita un cliente existente
export const editClient = async (id, updatedData) => {
	try {
		const res = await fetch(`http://localhost:4000/clientes/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedData),
		});
		
		if (!res.ok) {
			throw new Error("Error al editar el cliente");
		}
		
		// Redirigir a la página principal
		window.location.href = "index.html";
		
	} catch (error) {
		showError("No se pudo editar el cliente. Por favor, inténtelo de nuevo.");
		console.error("ERROR: Ha habido un error al editar el cliente:", error);
	}
};

// Elimina un cliente de la API
export const deleteClient = async (id) => {
	try {
		const res = await fetch(`http://localhost:4000/clientes/${id}`, {
			method: "DELETE"
		});
		
		if (!res.ok) {
			throw new Error("Error al eliminar el cliente");
		}
		
		return true; // Éxito
		
	} catch (error) {
		showError("No se pudo eliminar el cliente. Por favor, inténtelo de nuevo.");
		console.error("ERROR: Ha habido un error al intentar borrar el cliente:", error);
		return false; // Fallo
	}
};