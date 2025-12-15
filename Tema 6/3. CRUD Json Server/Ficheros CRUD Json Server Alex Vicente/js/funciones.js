/**
 * Utilidades compartidas por las páginas (validación y alertas).
 */

/**
 * Validar que todos los campos de un objeto están completos (no cadenas vacías).
 * Uso: evitar enviar datos incompletos al servidor.
 */
export function validar(obj) {
    const valores = Object.values(obj);
    // Verificar que todos los campos tengan valores (no cadena vacía)
    return !valores.includes('');
}

/**
 * Mostrar una alerta temporal en el formulario.
 * Crea un div con estilos (Tailwind) y lo borra pasados 3s.
 * Evita duplicar alertas comprobando la clase `.bg-red-100`.
 */
export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    
    // Si ya existe una alerta, no crear otra
    if (alerta) {
        return;
    }

    const divMensaje = document.createElement('div');
    // Clases de Tailwind (u otra librería) para estilo visual
    divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'bg-red-100', 'border-red-400', 'text-red-700');
    divMensaje.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;

    const formulario = document.querySelector('#formulario');
    formulario.appendChild(divMensaje);

    // Eliminar alerta después de 3 segundos para no saturar la UI
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}
