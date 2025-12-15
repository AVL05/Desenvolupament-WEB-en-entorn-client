// Módulo que contiene la clase Poliza
// - Representa una póliza de seguro y encapsula la lógica de cálculo
// - Inputs del constructor: gama (string '1'|'2'|'3'), año (string o número), cobertura ('Básico'|'Completo')
// - Propiedad calculada: `importe` (número, redondeado)

export class Poliza {
    constructor(gama, año, cobertura) {
        this.gama = gama;
        this.año = año;
        this.cobertura = cobertura;
        this.importe = 0; // valor calculado por calcularSeguro()
    }

    // calcularSeguro
    // - Calcula el importe final basándose en:
    //   * tarifa base (300)
    //   * multiplicador por gama (1.05, 1.15, 1.30)
    //   * incremento por antigüedad: 3% compuesto por cada año desde `año`
    //   * multiplicador por tipo de cobertura (Básico 1.30, Completo 1.50)
    // - Efecto: actualiza `this.importe` con el valor redondeado
    calcularSeguro() {
        let importe = 300; 
        
        // Incremento por gama del coche
        // Nota: la gama viene codificada en el formulario como '1','2' o '3'
        if (this.gama === '1') { 
            importe = importe * 1.05; 
        } else if (this.gama === '2') { 
            importe = importe * 1.15; 
        } else if (this.gama === '3') { 
            importe = importe * 1.30;
        }

        // Incremento por antigüedad
        // - Calculamos años desde el `año` seleccionado hasta el año actual
        // - Aplicamos un incremento compuesto del 3% por cada año
        const añoActual = new Date().getFullYear();
        const antigüedad = añoActual - parseInt(this.año);
        
        for (let i = 0; i < antigüedad; i++) {
            // 3% adicional por cada año
            importe = importe * 1.03;
        }

        // Incremento por tipo de cobertura
        // - 'Básico' y 'Completo' tienen multiplicadores distintos
        if (this.cobertura === 'Básico') {
            importe = importe * 1.30; 
        } else if (this.cobertura === 'Completo') {
            importe = importe * 1.50;
        }

        // Guardamos el importe redondeado
        this.importe = Math.round(importe);
    }

    // mostrarInfoHTML
    // - Efecto: genera el contenido del modal (Bootstrap) con el resumen de la póliza
    // - Detalles:
    //   * Crea elementos DOM para título, tipo, año, cobertura y total
    //   * Añade un botón Cerrar que oculta el modal
    // - Requiere: que exista en el HTML un modal con id="modal" y las zonas
    //   `.modal-title`, `.modal-body` y `.modal-footer`
    mostrarInfoHTML() {
        const modal = new bootstrap.Modal('#modal', {});

        const modalTitle = document.querySelector('#modal .modal-title');
        const modalBody = document.querySelector('#modal .modal-body');
        const modalFooter = document.querySelector('#modal .modal-footer');

        // Limpiar contenido previo
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';
        modalFooter.innerHTML = '';

        // Título del modal
        const titulo = document.createElement('div');
        titulo.textContent = 'RESUMEN DE PÓLIZA';
        titulo.className = 'header col';
        modalTitle.appendChild(titulo);

        // Convertir la gama numérica a texto legible
        const tipoTexto = this.gama === '1' ? 'Gama Baja' : 
                         this.gama === '2' ? 'Gama Media' : 'Gama Alta';

        // Crear elementos para mostrar la información
        const tipoDiv = document.createElement('div');
        tipoDiv.className = 'font-bold';
        tipoDiv.textContent = `TIPO: ${tipoTexto}`;

        const añoDiv = document.createElement('div');
        añoDiv.className = 'font-bold';
        añoDiv.textContent = `AÑO: ${this.año}`;

        const coberturaDiv = document.createElement('div');
        coberturaDiv.className = 'font-bold';
        coberturaDiv.textContent = `COBERTURA: ${this.cobertura}`;

        const totalDiv = document.createElement('div');
        totalDiv.className = 'font-bold';
        totalDiv.textContent = `TOTAL: ${this.importe}€`;

        modalBody.appendChild(tipoDiv);
        modalBody.appendChild(añoDiv);
        modalBody.appendChild(coberturaDiv);
        modalBody.appendChild(totalDiv);

        // Botón de cierre: oculta el modal al hacer click
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        botonCerrar.className = 'btn btn-primary btn-raised col';
        botonCerrar.addEventListener('click', () => {
            modal.hide();
        });
        modalFooter.appendChild(botonCerrar);

        // Mostrar modal
        modal.show();
    }
}
