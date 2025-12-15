const formulario = document.getElementById('formulario');
const mesa = document.getElementById('mesa');
const hora = document.getElementById('hora');
const modalFormulario = document.getElementById('formulario-modal');
const URL = "http://localhost:4000/platillos";

const errores = {
  mesa: true,
  hora: true
};

function mostrarAlerta(mensaje, referencia) {
  limpiarAlerta(referencia);

  const error = document.createElement('DIV');
  error.textContent = mensaje;
  error.classList.add('bg-red-600', 'text-black', 'p-2', 'text-center', 'invalid-feedbak', 'd-block', 'js-error');

  referencia.parentElement.insertBefore(error, referencia.nextElementSibling);
}

function limpiarAlerta(referencia) {
  const alerta = referencia.parentElement.querySelector('.js-error, .bg-red-600');
  if (alerta) alerta.remove();
}

function validarMesa() {
  const ValorMesa = mesa.value.trim();

  if (ValorMesa === '') {
    mostrarAlerta('El valor de MESA es obligatorio', mesa);
    errores.mesa = true;
  } else {
    limpiarAlerta(mesa);
    errores.mesa = false;
  }
}

function validarHora() {
  const valorHora = hora.value.trim();

  if (valorHora === '') {
    mostrarAlerta('La hora es obligatoria', hora);
    errores.hora = true;
  } else {
    limpiarAlerta(hora);
    errores.hora = false;
  }
}

function validarFormulario() {
  validarMesa();
  validarHora();
}

mesa.addEventListener('blur', validarFormulario);
hora.addEventListener('blur', validarFormulario);
mesa.addEventListener('input', validarFormulario);
hora.addEventListener('input', validarFormulario);

const btnNuevaOrden = document.querySelector('#guardar-cliente');

function crearSeccionOculta(id, titulo) {
  let existente = document.getElementById(id);
  if (existente) return existente;

  const seccion = document.createElement('section');
  seccion.id = id;
  seccion.classList.add('seccion-oculta', 'd-none');
  seccion.setAttribute('hidden', '');

  const header = document.createElement('h2');
  header.textContent = titulo;
  seccion.appendChild(header);

  const contenido = document.createElement('div');
  contenido.className = 'contenido-' + id;
  seccion.appendChild(contenido);

  return seccion;
}

function insertarDespues(openerEl, seccion) {
  if (!seccion) return;
  if (openerEl && openerEl.parentElement) {
    openerEl.insertAdjacentElement('afterend', seccion);
  } else {
    const main = document.querySelector('main') || document.body;
    main.appendChild(seccion);
  }
}

const seccionPlatillos = crearSeccionOculta('platillos', 'Platillos');
const seccionResumen = crearSeccionOculta('resumen-consumo', 'Resumen de Consumo');

if (!seccionPlatillos.parentElement) insertarDespues(btnNuevaOrden, seccionPlatillos);
if (!seccionResumen.parentElement) {
  if (seccionPlatillos.parentElement) seccionPlatillos.insertAdjacentElement('afterend', seccionResumen);
  else insertarDespues(btnNuevaOrden, seccionResumen);
}

function mostrarSecciones() {
  [seccionPlatillos, seccionResumen].forEach(el => {
    if (!el) return;
    el.classList.remove('d-none', 'seccion-oculta', 'visually-hidden');
    el.removeAttribute('hidden');
    if (el.style && el.style.display === 'none') el.style.display = '';
  });
}

async function fetchPlatillos() {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error('Error al obtener platillos');
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('fetchPlatillos:', err);
    return [];
  }
}



formulario.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (typeof validarFormulario === 'function') validarFormulario();

  if (Object.values(errores).some(v => v)) {
    return;
  }

  const nuevaOrden = {
    id: Date.now(),
    mesa: mesa.value.trim(),
    hora: hora.value.trim(),
    creadoEn: new Date().toISOString()
  };

  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    const modalBootsrap = bootstrap.Modal.getInstance(modalFormulario) || new bootstrap.Modal(modalFormulario);
    modalBootsrap.hide();
  }

  mostrarSecciones();
  const platillos = await fetchPlatillos();

  if (!seccionPlatillos.querySelector('.contenido-platillos')) {
    const cont = document.createElement('div');
    cont.className = 'contenido-platillos';
    seccionPlatillos.appendChild(cont);
  }
  if (!seccionResumen.querySelector('.contenido-resumen-consumo')) {
    const cont = document.createElement('div');
    cont.className = 'contenido-resumen-consumo';
    seccionResumen.appendChild(cont);
  }

  renderPlatillos(platillos);
  renderResumen(platillos);

  limpiarAlerta(mesa);
  limpiarAlerta(hora);
  formulario.reset();
});

function platillos() {
    const contenedor = document.querySelector('.contenido-hero');
    contenedor.innerHTML = `
        <h2>Platillos</h2>
        <form id="formulario">
            <div>
                <label for="nombre">Nombre:</label>
                <input class="u-full-width" type="text" id="nombre" name="nombre" placeholder="Tu nombre">
            </div>
            <div>
                <label for="email">Email:</label>
                <input class="u-full-width" type="email" id="email" name="email" placeholder="tu@email.com">
            </div>
            <div id="cc-container"></div>
            <div>
                <label for="mensaje">Mensaje:</label>
                <textarea class="u-full-width" id="mensaje" name="mensaje" placeholder="Tu mensaje" rows="4"></textarea>
            </div>
            <button type="submit" id="enviar" class="button-primary" disabled style="background-color: #ccc;">Enviar</button>
            <button type="reset" id="reset" class="button">Reset</button>
        </form>
    `;
}