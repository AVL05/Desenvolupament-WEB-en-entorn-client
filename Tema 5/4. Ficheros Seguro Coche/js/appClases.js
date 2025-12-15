// Clase Poliza (versión clásica, sin módulos)
// - Propósito: encapsular los datos de una póliza y la lógica de cálculo
// - Inputs constructor: gama (string '1'|'2'|'3'), año (string o número), cobertura ('Básico'|'Completo')
// - Propiedad calculada: `importe` (número redondeado)
class Poliza {
    constructor(gama, año, cobertura) {
        this.gama = gama;
        this.año = año;
        this.cobertura = cobertura;
        this.importe = 0;
    }


    // calcularSeguro
    // - Calcula el precio de la póliza con la siguiente lógica:
    //   1) tarifa base: 300
    //   2) multiplicador por gama: '1' => 1.05, '2' => 1.15, '3' => 1.30
    //   3) incremento por antigüedad: 3% compuesto por cada año transcurrido
    //   4) multiplicador por cobertura: 'Básico' => 1.30, 'Completo' => 1.50
    // - Efecto: actualiza this.importe con el valor redondeado
    calcularSeguro() {
        let importe = 300; 
        
        // Ajuste por gama
        if (this.gama === '1') { 
            importe = importe * 1.05; 
        } else if (this.gama === '2') { 
            importe = importe * 1.15; 
        } else if (this.gama === '3') { 
            importe = importe * 1.30;
        }

        // Ajuste por antigüedad: 3% compuesto por año
        const añoActual = new Date().getFullYear();
        const antigüedad = añoActual - parseInt(this.año);
        
        for (let i = 0; i < antigüedad; i++) {
            importe = importe * 1.03;
        }

        // Ajuste por cobertura
        if (this.cobertura === 'Básico') {
            importe = importe * 1.30; 
        } else if (this.cobertura === 'Completo') {
            importe = importe * 1.50;
        }

        this.importe = Math.round(importe);
    }

    // mostrarInfoHTML
    // - Efecto: genera y muestra un modal Bootstrap con el resumen de la póliza
    // - Requisitos DOM: debe existir un modal con id="modal" y los contenedores
    //   `.modal-title`, `.modal-body` y `.modal-footer`
    mostrarInfoHTML() {
        const modal = new bootstrap.Modal('#modal', {});

        const modalTitle = document.querySelector('#modal .modal-title');
        const modalBody = document.querySelector('#modal .modal-body');
        const modalFooter = document.querySelector('#modal .modal-footer');

        // Limpiar contenido anterior
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';
        modalFooter.innerHTML = '';

        // Título
        const titulo = document.createElement('div');
        titulo.textContent = 'RESUMEN DE PÓLIZA';
        titulo.className = 'header col';
        modalTitle.appendChild(titulo);

        // Convertir la gama a texto legible
        const tipoTexto = this.gama === '1' ? 'Gama Baja' : 
                         this.gama === '2' ? 'Gama Media' : 'Gama Alta';

        // Crear los divs de información
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

        // Botón de cierre
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