//Inicia la aplicación. Puede contener alguna función complementaria

import { getData, deleteClient } from "./API.js";

// Cargar clientes al iniciar la página
window.addEventListener("DOMContentLoaded", async () => {
    const clientsData = await getData();
	injectClients(clientsData);
});

// Inyecta los datos de clientes en la tabla HTML
const injectClients = async (data) => {
	const listadoClientes = document.querySelector("#listado-clientes");

	listadoClientes.innerHTML = "";
	const cellClass = "px-6 py-4 whitespace-no-wrap border-b border-gray-200";

	data.forEach((cliente) => {
		const tr = document.createElement("tr");

		// Nombre + correo
		const nombreCorreo = document.createElement("td");
		nombreCorreo.className = cellClass;

		// Nombre en negrita
		const nombreDiv = document.createElement("div");
		nombreDiv.textContent = cliente["nombre"];
		nombreDiv.className = "text-sm leading-5 font-medium text-gray-700 text-lg font-bold";

		// Correo debajo en texto más pequeño y gris
		const emailDiv = document.createElement("div");
		emailDiv.textContent = cliente["email"];
		emailDiv.className = "text-sm leading-10 text-gray-700";

		nombreCorreo.appendChild(nombreDiv);
		nombreCorreo.appendChild(emailDiv);

		// Telefono
		const telefono = document.createElement("td");
		telefono.textContent = cliente["telefono"];
		telefono.className = `text-gray-700 ${cellClass}`;

		// Empresa
		const empresa = document.createElement("td");
		empresa.textContent = cliente["empresa"];
		empresa.className = `text-gray-600 ${cellClass}`;

		// Editar + Eliminar
		const acciones = document.createElement("td");
		acciones.className = "px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5";

		acciones.innerHTML = `
			<a href="editar-cliente.html?id=${cliente.id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
			<a href="#" data-cliente="${cliente.id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
		`;

		// Añadir a la fila
		tr.appendChild(nombreCorreo);
		tr.appendChild(telefono);
		tr.appendChild(empresa);
		tr.appendChild(acciones);
		listadoClientes.appendChild(tr);
	});
};

// Maneja el evento click en los botones de eliminar
document.addEventListener("click", async (e) => {
	if (e.target.classList.contains("eliminar")) {
		e.preventDefault();
		const id = e.target.getAttribute("data-cliente");
		
		if (confirm("¿Deseas eliminar este cliente?")) {
			const success = await deleteClient(id);
			
			if (success) {
				// Recargar la tabla después de eliminar
				const updatedTable = await getData();
				injectClients(updatedTable);
			}
		}
	}
});