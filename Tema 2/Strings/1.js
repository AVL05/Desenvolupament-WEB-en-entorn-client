const compararCadenas = (cadena1, cadena2) => {
    return cadena1 === cadena2;
};

function compararTextos() {
    do {
        let texto1 = prompt("Introduce la primera cadena de texto:");
        let texto2 = prompt("Introduce la segunda cadena de texto:");
        
        if (texto1 === null || texto2 === null) {
            break;
        }
        
        texto1 = texto1.trim();
        texto2 = texto2.trim();
        
        let sonIguales = compararCadenas(texto1, texto2);
        
        if (sonIguales) {
            alert(`Los textos son iguales:\n"${texto1}" = "${texto2}"`);
        } else {
            alert(`Los textos son diferentes:\n"${texto1}" ≠ "${texto2}"`);
        }
        
        let continuar = confirm("¿Quieres comparar otras cadenas?");
        if (!continuar) {
            break;
        }
        
    } while (true);
}

compararTextos();