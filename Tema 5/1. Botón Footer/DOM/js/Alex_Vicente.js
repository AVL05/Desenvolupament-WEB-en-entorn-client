/*
  Alex_Vicente.js - Botón Footer
  ----------------------------
  Script para controlar un botón flotante que muestra/oculta el footer.
  
  Funcionamiento:
  - Al hacer click en el botón, alterna la visibilidad del footer.
  - El botón cambia su texto según el estado ('Descubre más...' ⟷ 'X Cerrar').
  - Las clases CSS 'activo' controlan la animación/visibilidad.
  
  Elementos DOM necesarios:
  - Un botón con clase '.btn-flotante'
  - Un footer con id '#footer'
  
  Nota: El CSS debe tener definidos los estilos para la clase 'activo'
  tanto en el footer como en el botón.
*/

// Esperamos a que todo el DOM esté cargado antes de ejecutar el código
window.addEventListener('load', function(){
    
    // Seleccionamos los elementos principales
    let boton = document.querySelector('.btn-flotante');
    let footer = document.querySelector('#footer');
    
    // Establecemos el texto inicial del botón
    boton.textContent = 'Descubre más...';
    
    // Manejador del click en el botón
    boton.addEventListener('click', function(evento){
        // Prevenimos el comportamiento por defecto (importante si el botón es un <a>)
        evento.preventDefault();
        
        // Toggle de clases y texto según el estado actual
        if(footer.classList.contains('activo')){
            // Si el footer está visible, lo ocultamos
            footer.classList.remove('activo');
            boton.classList.remove('activo');
            boton.textContent = 'Descubre más...';
        }else{
            // Si el footer está oculto, lo mostramos
            footer.classList.add('activo');
            boton.classList.add('activo');
            boton.textContent = 'X Cerrar';
        }
    });
});
