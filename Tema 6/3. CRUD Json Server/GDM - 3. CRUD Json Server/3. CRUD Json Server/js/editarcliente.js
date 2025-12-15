/*EDITAR UN REGISTRO:
  Todo lo relacionado con las dos fases de la edición
*/

import { validateForm, newClientData, showError } from "./funciones.js";
import { getClient, editClient } from "./API.js";

// Carga los datos del cliente en el formulario
const loadClient = async (idClient) => {
	const client = await getClient(idClient);

	if (!client) {
		showError("Cliente no encontrado");
		return;
	} else {
		document.querySelector("#nombre").value = client["nombre"];
		document.querySelector("#email").value = client["email"];
		document.querySelector("#telefono").value = client["telefono"];
		document.querySelector("#empresa").value = client["empresa"];
	}
};

// Obtener ID de la URL
const paramsURL = new URLSearchParams(window.location.search);
const id = parseInt(paramsURL.get("id"));

// Inicializar página de edición
window.addEventListener("DOMContentLoaded", () => {
	loadClient(id);

	const formulario = document.querySelector('#formulario');

	if (formulario) {
		// Maneja el envío del formulario de edición
		formulario.addEventListener("submit", async (e) => {
			e.preventDefault();

			if (validateForm()) {
				await editClient(id, newClientData());
			}
		});
	}
});