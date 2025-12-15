function cifradoCesar() {
    let texto = prompt("Introduce el texto a cifrar:");
    
    if (texto === null) {
        alert("Operación cancelada");
        return;
    }
    
    let desplazamiento;
    
    do {
        desplazamiento = prompt("Introduce el número de desplazamiento:");
        
        if (desplazamiento === null) {
            alert("Operación cancelada");
            return;
        }
        
        if (isNaN(desplazamiento) || desplazamiento === "") {
            alert("Por favor, introduce un número válido");
        }
        
    } while (isNaN(desplazamiento) || desplazamiento === "");

    desplazamiento = parseInt(desplazamiento);
    
    let codigosUnicode = "";
    let textoCifrado = "";
    
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);
        let codigoUnicode = caracter.charCodeAt(0);
        let nuevoCodigoUnicode = codigoUnicode + desplazamiento;
        let nuevoCaracter = String.fromCharCode(nuevoCodigoUnicode);
        
        codigosUnicode += nuevoCodigoUnicode;
        if (i < texto.length - 1) {
            codigosUnicode += " ";
        }
        
        textoCifrado += nuevoCaracter;
    }
    
    alert(`Texto original: "${texto}"\nTexto cifrado: "${textoCifrado}"\nCódigos Unicode: ${codigosUnicode}`);
}

cifradoCesar();