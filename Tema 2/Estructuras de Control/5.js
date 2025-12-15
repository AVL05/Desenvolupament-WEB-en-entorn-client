function esPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

function encontrarPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function mostrarMenu() {
    let opcion = prompt(
        "Selecciona una opción:\n" +
        "1. Dame un número y te digo si es primo o no\n" +
        "2. Dame un número y te digo qué números primos hay entre el 1 y tu número"
    );

    switch(opcion) {
        case "1":
            let numero = parseInt(prompt("Introduce un número:"));
            if (isNaN(numero)) {
                alert("Por favor, introduce un número válido");
                break;
            }
            
            if (esPrimo(numero)) {
                alert(`El número ${numero} ES primo`);
            } else {
                alert(`El número ${numero} NO es primo`);
            }
            break;

        case "2":
            let limite = parseInt(prompt("Introduce el número límite:"));
            if (isNaN(limite) || limite < 1) {
                alert("Por favor, introduce un número válido mayor que 0");
                break;
            }
            
            let primosEncontrados = encontrarPrimos(limite);
            console.log(`Números primos entre 1 y ${limite}:`);
            console.log(primosEncontrados.join(", "));
            console.log(`Total de números primos encontrados: ${primosEncontrados.length}`);
            
            alert(`Se han encontrado ${primosEncontrados.length} números primos. Revisa la consola para ver la lista completa.`);
            break;

        default:
            alert("Opción no válida. Por favor, selecciona 1 o 2");
    }
}

mostrarMenu();