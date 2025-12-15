let contador = document.querySelector('.contador');
let barraFront = document.querySelector('.barraFront');

let porcentaje = 0;

function actualizarProgreso() {
    contador.textContent = porcentaje + '%';
    
    barraFront.style.width = porcentaje + '%';
    
    porcentaje++;
    
    if (porcentaje > 100) {
        clearInterval(intervalo);
    }
}

let intervalo = setInterval(actualizarProgreso, 50);