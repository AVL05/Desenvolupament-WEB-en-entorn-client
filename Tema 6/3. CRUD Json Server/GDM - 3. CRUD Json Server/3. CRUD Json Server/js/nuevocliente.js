//Todo lo relacionado con la validación y llamada a función conexión API

import { validateForm, newClientData } from "./funciones.js";
import { insertClient } from "./API.js";

// Maneja el envío del formulario de nuevo cliente
const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", async (e) => {
	e.preventDefault();
	
	if (validateForm()) {
		await insertClient(newClientData());
	}
});