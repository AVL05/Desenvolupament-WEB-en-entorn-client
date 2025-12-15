// Clase que gestiona el presupuesto y los gastos
// - `presupuesto`: importe inicial (Number)
// - `restante`: lo que queda después de sumar los gastos
// - `gastos`: array de objetos { nombre, cantidad, id }
class Presupuesto {
    constructor(presupuesto) {
        // Normalizamos a Number por seguridad
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    // nuevoGasto
    // - Input: objeto gasto { nombre, cantidad, id }
    // - Efecto: añade el gasto al array (inmutabilidad superficial) y recalcula el restante
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    // calcularRestante
    // - Calcula la suma de `cantidad` en todos los gastos y actualiza `this.restante`
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    // eliminarGasto
    // - Input: id (valor único por gasto)
    // - Efecto: filtra el gasto fuera del array y recalcula restante
    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

// Clase responsable de todo lo relacionado con la UI
// - Opera directamente sobre elementos del DOM (side-effects)
class UI {
    // imprimirPresupuesto
    // - Muestra el presupuesto y el restante inicial en los spans del DOM
    imprimirPresupuesto(cantidad) {
        totalSpan.textContent = cantidad;
        restanteSpan.textContent = cantidad;
    }

    // imprimirAlerta
    // - Muestra un mensaje temporal (3s) sobre el formulario
    // - Evita duplicados eliminando un elemento con la clase `.alert-mensaje` si existe
    imprimirAlerta(mensaje, tipo) {
        const alertaExiste = document.querySelector('.alert-mensaje');
        
        if (alertaExiste) {
            alertaExiste.remove();
        }

        const alerta = document.createElement('div');
        alerta.classList.add('alert', 'text-center', 'alert-mensaje');
        alerta.classList.add(tipo);
        alerta.textContent = mensaje;

        const contenido = document.querySelector('.contenido.primario');
        const formulario = document.querySelector('#agregar-gasto');
        
        // Insertar alerta antes del formulario
        contenido.insertBefore(alerta, formulario);

        // Eliminar la alerta tras 3 segundos
        setTimeout(function() {
            alerta.remove();
        }, 3000);
    }

    // imprimirGastosListado
    // - Recibe el array de gastos y lo renderiza en la lista `.list-group`
    // - Para cada gasto crea un <li> con el nombre, la cantidad y un botón para borrar
    imprimirGastosListado(gastos) {
        this.limpiarHTML();

        for (let i = 0; i < gastos.length; i++) {
            const gasto = gastos[i];
            
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            li.id = gasto.id;
            
            // Nota: la cantidad se muestra con el símbolo € delante
            li.innerHTML = gasto.nombre + ' <span class="badge badge-primary badge-pill">€' + gasto.cantidad + '</span>';
            
            // Botón para borrar que llama a la función global `eliminarGasto`
            const botonBorrar = document.createElement('button');
            botonBorrar.classList.add('btn', 'btn-danger', 'btn-sm');
            botonBorrar.textContent = 'Borrar X';
            botonBorrar.type = 'button';
            botonBorrar.onclick = function() {
                // Llamada al controlador para eliminar el gasto por id
                eliminarGasto(gasto.id);
            };
            
            li.appendChild(botonBorrar);
            
            gastosListado.appendChild(li);
        }
    }

    // limpiarHTML
    // - Utility: limpia los hijos del contenedor de gastos antes de re-renderizar
    limpiarHTML() {
        while (gastosListado.firstChild) {
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }

    // actualizarRestante
    // - Muestra el valor del restante en el DOM
    actualizarRestante(restante) {
        restanteSpan.textContent = restante;
    }

    // comprobarPresupuesto
    // - Cambia el color/estado del bloque `.restante` según la proporción restante
    // - Desactiva el botón de añadir si el presupuesto se agota (restante <= 0)
    // - Lógica:
    //     * si restante < 25% presupuesto -> alert-danger
    //     * si restante < 50% presupuesto -> alert-warning
    //     * en otro caso -> alert-success
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        
        const restanteDiv = document.querySelector('.restante');
        const botonAgregar = document.querySelector('button[type="submit"]');

        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el presupuesto se agota, mostrar alerta y deshabilitar añadir
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'alert-danger');
            botonAgregar.disabled = true;
        } else {
            botonAgregar.disabled = false;
        }
    }
}

// Instancia de UI utilizada globalmente por el módulo
const ui = new UI();