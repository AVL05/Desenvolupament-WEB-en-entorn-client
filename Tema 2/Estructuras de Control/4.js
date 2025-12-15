function jugarAdivinanza() {
    let numeroAleatorio = Math.floor(Math.random() * 11); // 0 a 10
    let intentos = 0;
    let adivinado = false;

    alert("¡Bienvenido al juego! Adivina el número entre 0 y 10");

    while (!adivinado) {
        let respuesta = prompt("Introduce tu número (0-10):");
        
        if (respuesta === null || respuesta === "") {
            let seguirJugando = confirm("¿Quieres seguir jugando?");
            if (!seguirJugando) {
                alert("¡Gracias por jugar!");
                return;
            }
            continue;
        }

        let numeroUsuario = parseInt(respuesta);
        
        if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
            alert("Por favor, introduce un número válido entre 0 y 10");
            continue; // No cuenta como intento
        }

        intentos++;

        if (numeroUsuario === numeroAleatorio) {
            alert(`¡Enhorabuena! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`);
            adivinado = true;
        } else if (numeroUsuario < numeroAleatorio) {
            alert(`Tu número es menor. Llevas ${intentos} intentos.`);
        } else {
            alert(`Tu número es mayor. Llevas ${intentos} intentos.`);
        }
    }

    let volverAJugar = confirm("¿Quieres volver a jugar?");
    if (volverAJugar) {
        jugarAdivinanza();
    }
}

jugarAdivinanza();