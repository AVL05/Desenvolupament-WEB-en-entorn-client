function multiplicarHastaInfinito() {
    let numero = parseFloat(prompt("Introduce un número (evita el rango -1 a 1):"));
    
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido");
        return;
    }
    
    if (numero > -1 && numero < 1) {
        alert("El número debe estar fuera del rango -1 a 1");
        return;
    }
    
    console.log(`Número inicial: ${numero}`);
    console.log("==========================================");
    
    let resultado = numero;
    let operaciones = 0;
    
    while (isFinite(resultado)) {
        resultado = resultado * resultado;
        operaciones++;
        
        console.log(`Operación ${operaciones}: ${resultado}`);
        
        if (operaciones > 1000) {
            console.log("Se han superado las 1000 operaciones. Deteniendo...");
            break;
        }
    }
    
    console.log("==========================================");
    console.log(`Número de operaciones realizadas: ${operaciones}`);
    console.log(`Resultado final: ${resultado}`);
    
    alert(`Proceso completado. Se realizaron ${operaciones} operaciones.\nRevisa la consola para ver todos los resultados.`);
}

multiplicarHastaInfinito();