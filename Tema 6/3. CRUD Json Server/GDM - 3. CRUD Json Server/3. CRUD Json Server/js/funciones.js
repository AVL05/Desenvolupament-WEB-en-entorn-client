//Funciones generales que pueden servir para varios ficheros

export { validateForm, newClientData, showError }

// Valida los campos del formulario con expresiones regulares
const validateForm = () => {
	const nombre = document.querySelector("#nombre").value.trim();
	const email = document.querySelector("#email").value.trim();
	const telefono = document.querySelector("#telefono").value.trim();
	const empresa = document.querySelector("#empresa").value.trim();

	const regex = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
		email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		telefono: /^\+?\d{7,15}$/,
	};

	if (!regex.nombre.test(nombre)) {
		showError("Nombre incompleto o inválido. Solo letras y espacios (de 2 a 50 caracteres).");
		return false;
	}

	if (!regex.email.test(email)) {
		showError("Correo incompleto o inválido.");
		return false;
	}

	if (!regex.telefono.test(telefono)) {
		showError("Teléfono incompleto o inválido. Debe contener entre 7 y 15 dígitos.");
		return false;
	}

	if (empresa.length < 2 || empresa.length > 100) {
		showError("Empresa incompleta o inválida. Debe tener entre 2 y 100 caracteres.");
		return false;
	}

	return true;
};

// Muestra un mensaje de error en el formulario
const showError = (errorContext) => {
	const form = document.querySelector("form");
	
	// Buscar si ya existe un contenedor de error
	let errorContainer = form.querySelector(".error-container");
	
	// Crear contenedor solo si no existe
	if (!errorContainer) {
		errorContainer = document.createElement("div");
		errorContainer.className =
			"error-container bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center";
		form.appendChild(errorContainer);
	}

	// Actualizar contenido
	errorContainer.innerHTML = `<strong>ERROR:</strong> ${errorContext}`;

	// Quitar mensaje después de 3 segundos
	setTimeout(() => {
		errorContainer.remove();
	}, 3000);
};

// Obtiene los datos del formulario y los retorna como objeto
const newClientData = () => {
	const nombre = document.querySelector("#nombre").value.trim();
	const email = document.querySelector("#email").value.trim();
	const telefono = document.querySelector("#telefono").value.trim();
	const empresa = document.querySelector("#empresa").value.trim();
	
	return {
		nombre,
		email,
		telefono,
		empresa,
	};
};