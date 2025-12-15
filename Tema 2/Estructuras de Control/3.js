function calcularDoble(numero, veces = 3) {
    console.log(`Número inicial: ${numero}`);
    console.log(`Se calculará el doble ${veces} veces:`);
    
    let resultado = numero;
    for (let i = 1; i <= veces; i++) {
        resultado = resultado * 2;
        console.log(`Iteración ${i}: ${resultado}`);
    }
}

let numero = parseInt(prompt("Introduce un número:"));
let veces = prompt("¿Cuántas veces quieres calcular el doble? (por defecto 3):");

if (veces === null || veces === "" || isNaN(veces)) {
    calcularDoble(numero);
} else {
    calcularDoble(numero, parseInt(veces));
}