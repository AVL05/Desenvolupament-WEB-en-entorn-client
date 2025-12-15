// Función: Renderiza un array de libros en el DOM como tarjetas con botones
// Entrada: libros (Array), contenedor (elemento DOM), callbacks (funciones)
// Nota: utiliza delegación inversa (pasa callbacks a la UI, UI los invoca al hacer click)
export function renderizarLibros(libros, contenedor, editarCallback, eliminarCallback) {
  // Limpia el contenedor (borra tarjetas previas)
  contenedor.innerHTML = "";
  
  // Itera cada libro: crea un div con datos y botones
  libros.forEach(libro => {
    const div = document.createElement("div");
    div.className = "card";
    
    // Template literal: inserta datos del libro en HTML (interpola propiedades)
    div.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
      <p><strong>Estado:</strong> ${libro.leido ? "✅ Leído" : "📖 No leído"}</p>
      <button class="editar">Editar</button>
      <button class="eliminar">Eliminar</button>
    `;
    
    // Registra listeners en botones: al hacer click, invoca los callbacks
    // Los callbacks (editarLibro, eliminarLibro) reciben los datos necesarios
    div.querySelector(".editar").addEventListener("click", () => editarCallback(libro));
    div.querySelector(".eliminar").addEventListener("click", () => eliminarCallback(libro.id));
    
    // Añade la tarjeta construida al contenedor
    contenedor.appendChild(div);
  });
}