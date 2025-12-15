let nombre = prompt("Introduce tu nombre:");
let salarioActual = parseFloat(prompt("Introduce tu salario actual:"));
let numeroHijos = parseInt(prompt("Introduce el número de hijos:"));
let edad = parseInt(prompt("Introduce tu edad:"));

let nuevoSalario = salarioActual;

if (salarioActual < 1000 && edad < 30 && numeroHijos > 0) {
    nuevoSalario = 1200;
}
if (salarioActual < 1000 && edad < 30 && numeroHijos === 0) {
    nuevoSalario = salarioActual * 1.05;
}

if (edad >= 30 && edad <= 45 && salarioActual < 1250 && numeroHijos > 1) {
    nuevoSalario = salarioActual * 1.10;
}
if (edad >= 30 && edad <= 45 && salarioActual < 1250 && numeroHijos >= 3) {
    nuevoSalario = salarioActual * 1.15;
}

if (edad > 45 && salarioActual < 2000) {
    nuevoSalario = salarioActual * 1.15;
}

alert(`Nombre: ${nombre}\nSalario actual: ${salarioActual}€\nNuevo salario: ${nuevoSalario.toFixed(2)}€`);