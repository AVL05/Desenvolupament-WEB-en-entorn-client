let filas = parseInt(prompt("Introduce el número de filas:"));
let columnas = parseInt(prompt("Introduce el número de columnas:"));
let nombre = "TuNombre";

let tablaHTML = "<table border='1'>";

for (let i = 0; i < filas; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < columnas; j++) {
        tablaHTML += "<td>" + nombre + "</td>";
    }
    tablaHTML += "</tr>";
}

tablaHTML += "</table>";


document.write(tablaHTML);