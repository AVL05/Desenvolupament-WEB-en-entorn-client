# UDAD 5: JS - EVENTOS, MÓDULOS Y LOCALSTORAGE

**Desarrollo Web en Entorno Cliente - 2º DAW CFGS**  
**Profesora:** Natalia Escrivá Núñez  
**IES Serra Perenxisa**

---

## 1. DOM: EVENTOS

### ¿Qué es un evento?

Un **evento** es un suceso que ocurre como resultado de una acción del usuario o por otras razones automáticas.

Los eventos son el **mecanismo para comunicar la aplicación con el usuario**. La aplicación variará su funcionamiento debido a las acciones realizadas normalmente por el usuario.

**Ejemplos de eventos:** dar un "like", añadir un comentario, navegar por el scroll.

Los eventos se asocian a un **elemento concreto del DOM**.

### Funcionamiento de los eventos

Hay un proceso que automatiza la captura de las acciones que generan los eventos (**manejador de eventos o listener**). Cuando se produce la acción (ej: click del ratón), el proceso listener ejecuta el código de una **función**.

Lo que debemos hacer es **preparar la escucha del evento** y esta se produce en segundo plano.

---

### 1.1. Modelo de eventos en línea

También conocido como **"Eventos en atributos HTML"**.

- Es el modelo más sencillo y menos profesional, por lo que **NO se recomienda**.
- Mezcla código HTML con JavaScript.
- Cada elemento HTML tiene sus posibles eventos como propiedades: **solo puede tener un evento de cada tipo**.
- Utiliza atributos en las etiquetas que comienzan con el prefijo **"on"** seguido del nombre del evento.

**Ejemplo:**

```html path=null start=null
<h2 id="cab1" onclick="this.innerHTML='Eventos en HTML'" 
    onmouseover="this.style.background='green'" 
    onmouseout="this.style.background='yellow'">Haz click...</h2>
```

También se puede hacer referencia al elemento así:

```html path=null start=null
<h2 id="cab1" onclick="document.getElementById('cab1').innerHTML='...'">...</h2>
```

**Con función externa:**

HTML:
```html path=null start=null
<h2 onclick="cambiar(this)">Haz click...</h2>
```

JavaScript:
```javascript path=null start=null
function cambiar(elem) {
    elem.innerHTML = "Eventos en HTML con función externa";
}
```

#### 1.1.1. ONLOAD

Este evento sirve para hacer que se cargue la página HTML antes de cargar ningún JavaScript.

```html path=null start=null
<body onload="alert('La página se ha cargado correctamente')">
```

---

### 1.2. Modelo de eventos tradicional

Consiste en aplicar sobre un elemento seleccionado a través de JavaScript, un evento con el prefijo **"on"**.

- Separa el código HTML del de JavaScript.
- **NO es el recomendado** porque permite asociar únicamente **UN SOLO EVENTO de cada tipo** a un elemento.

**Ejemplo:**

HTML:
```html path=null start=null
<h1>Modelo de eventos tradicional</h1>
<h2 id="trad">Haz click...</h2>
<h2 id="trad2">Haz click...</h2>
```

JavaScript:
```javascript path=null start=null
window.onload = function() {
    alert("La página ha cargado correctamente");
    document.getElementById("trad").onclick = tradicional;
    document.getElementById("trad").onmouseover = tradicional1;
    document.getElementById("trad2").onclick = tradicional2;
    document.getElementById("trad2").onclick = tradicional3;
}

function tradicional() {
    alert("Holaaaa");
    document.getElementById("trad").innerHTML = "Evento en JS, NO en etiqueta HTML (tradicional)";
    // Si lo queremos desactivar para que lo ejecute una única vez
    // document.getElementById("trad").onclick = null;
}

function tradicional1() {
    document.getElementById("trad").style.color = "yellow";
}
```

**Importante:** Si asignamos dos eventos iguales a un elemento, **se ejecutará el último** (en el ejemplo, `tradicional3` en `trad2`).

Podemos desactivar el evento asignándole el valor **null**.

---

### 1.3. Modelo de eventos W3C

Este es el **modelo que debemos seguir** porque trabaja con **"escuchadores de eventos"**, es decir, los procesos que están esperando que se produzca la acción para ejecutar la función.

El listener será el método **addEventListener**.

Si queremos eliminar el evento usaremos **removeEventListener**.

#### Parámetros de addEventListener:

- **Nombre del evento** que estamos esperando (sin el prefijo "on").
- **Función que se va a ejecutar** (sin paréntesis). Podemos llamar a una función, usar una anónima o una arrow function.

**Evento de carga:**

```javascript path=null start=null
window.addEventListener("load", inicio);
```

O bien:

```javascript path=null start=null
document.addEventListener("DOMContentLoaded", inicio);
```

En ambos casos se ejecuta la función `inicio()` cuando la página esté cargada.

**Ejemplo de secuencia:**

```javascript path=null start=null
console.log(1);
window.addEventListener("load", () => {
    console.log(2);
});
console.log(3);
```

**Resultado:** 1, 3, 2

---

### 1.4. Eventos de ratón

Los más usuales son:

- **click**: clic sobre el elemento
- **dblclick**: doble clic
- **mousedown**: similar al click (cuando se presiona)
- **mouseup**: cuando soltamos el ratón
- **mouseenter**: cuando entramos en la zona del elemento
- **mouseout**: cuando salimos de la zona del elemento
- **mousemove**: cada vez que el ratón se mueva

**Ejemplo:**

HTML:
```html path=null start=null
<h1>Modelo de eventos W3C</h1>
<button id="w3c">Haz click...</button>
<button id="w3canonim">Haz click...</button>
```

JavaScript:
```javascript path=null start=null
document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    document.querySelector('#w3c').addEventListener("click", saludar);
    document.querySelector('#w3c').addEventListener("click", colorear);
    document.querySelector('h1:last-of-type').addEventListener("mouseenter", colorear);
    document.querySelector('h1:last-of-type').addEventListener("mouseout", quitarColor);
    document.querySelector('#w3canonim').addEventListener("dblclick", function() {
        this.innerHTML = "Modificado con función anónima";
        this.style.backgroundColor = "yellow";
    });
}

function saludar() {
    alert("Holaaaa, este método SI es bueno!!!!!!");
    // Si solo queremos que lo ejecute una vez:
    // this.removeEventListener("click", saludar);
}

function colorear() {
    this.style.color = "red";
}

function quitarColor() {
    this.style.color = "white";
}
```

#### Propiedades del evento de ratón:

- **pageX, pageY**: posición horizontal y vertical en px del puntero del ratón, relativo al documento completo (incluyendo desplazamiento).
- **clientX, clientY**: en relación a la ventana del navegador.

---

### 1.5. Eventos de teclado

Los eventos más comunes son:

- **keydown**: cada vez que presionamos el teclado
- **keyup**: cuando soltamos la tecla
- **blur**: cuando se pierde el foco del elemento
- **input**: dispara el evento cada vez que el valor del elemento cambia (caja de texto)
- **change**: dispara el evento cada vez que el valor del elemento cambia (combo, check) y el usuario confirma (perdiendo el foco)

---

### 1.6. Objeto de tipo evento

Cuando se produce un evento, el navegador crea automáticamente un **objeto de tipo evento** cuyas propiedades pueden ser muy útiles.

La función que se ejecuta cuando el evento se produce puede incluir un **parámetro** que hará referencia al objeto de tipo evento.

#### 1.6.1. Propiedades TARGET y TYPE

- **target**: hace referencia al elemento del document que causa el evento.
- **type**: hace referencia al tipo de evento que ha ejecutado la función.

**Ejemplo 1:** Saber qué se está escribiendo en un formulario:

```javascript path=null start=null
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    console.log(e.target);
    console.log(e.type);
});
```

**Ejemplo 2:** Varios eventos asociados a distintos elementos que llaman a una misma función:

HTML:
```html path=null start=null
<h1>Modelo de eventos W3C</h1>
<h2 id="uno">Pasa tu ratón por encima....</h2>
<h2 id="dos">Pasa tu ratón por encima....</h2>
```

JavaScript:
```javascript path=null start=null
const unh2 = document.querySelector('#uno');
const otroh2 = document.querySelector('#dos');

unh2.addEventListener("mouseenter", cambiaFondo);
otroh2.addEventListener("mouseenter", cambiaFondo);

function cambiaFondo(e) {
    if(e.target.id === "uno") {
        this.style.backgroundColor = "yellow";
    } else if (e.target.id === "dos") {
        this.style.backgroundColor = "green";
    }
}
```

También podemos hacer referencia a una clase con `e.target.classList.contains('nombre_clase')`.

---

### 1.7. Eventos de formulario

El evento **submit** es el que se encarga de enviar la información recogida para almacenarla o trabajar con ella conectando con una API o nuestro servidor.

Si queremos validar la información, podemos detener el proceso natural del formulario con el método **preventDefault()**.

**Ejemplo:**

```javascript path=null start=null
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.method);
    console.log(e.target.action);
});
```

En el cuerpo de esta función pondríamos el código para comunicar y enviar los datos a través de Fetch API a un servidor.

---

### 1.8. Eventos de scroll

Estos eventos suceden en la ventana global. El evento concreto es **scroll** y podremos trabajar con el scroll a través de las propiedades del objeto window:

- **scrollY**: scroll vertical en píxels
- **scrollX**: scroll horizontal en píxels

**Ejemplo:**

```javascript path=null start=null
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);
});
```

Para saber la ubicación concreta de un elemento usaremos el método **getBoundingClientRect()**.

---

### 1.9. Propagación de eventos

Los eventos a veces pueden provocar comportamientos que no esperamos debido a la **propagación de eventos o Event Bubbling**.

La ejecución de los eventos se va a propagar de hijos a padres. Los eventos se gestionan en dos fases:

- **Fase de captura**: se capturan los eventos de forma individual
- **Fase de burbuja**: se lanzan de abajo a arriba

**Ejemplo:**

HTML:
```html path=null start=null
<div class="card">
    <img src="img/hacer1.jpg">
    <div class="info">
        <p class="categoria_concierto">concierto</p>
        <p class="titulo">Música electrónica 2021</p>
        <p class="precio">$1,200 por persona</p>
    </div>
</div>
```

JavaScript:
```javascript path=null start=null
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');
```

**Caso 1:** clicamos sobre la foto (card) → `estás en card: abuelo`

**Caso 2:** clicamos sobre la categoría (info) → `estas en info: papa` y `estás en card: abuelo`

**Caso 3:** clicamos sobre el título → `estás en titulo: hijo`, `estás en info: papá` y `estás en card: abuelo`

#### 1.9.1. Evitar la propagación de eventos

Para solucionarlo, utilizaremos el método **stopPropagation()** en cada evento:

```javascript path=null start=null
titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("estás en titulo: hijo");
});
```

---

### 1.10. Principal listado de eventos

Podemos encontrar los eventos disponibles en la página oficial de [w3schools](https://www.w3schools.com) o en [Mozilla Developer](https://developer.mozilla.org).

#### Principales tipos de eventos:

✓ **Eventos de ratón**: click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove, mouseover, mouseout, contextmenu

✓ **Eventos de teclado**: keypress, keydown, keyup

✓ **Eventos de movimiento en la ventana**: scroll, resize

✓ **Eventos sobre carga y descarga de elementos**: load, DOMContentLoaded, abort, error, progress, readystatechange

✓ **Eventos sobre el historial**: popstate

✓ **Eventos sobre la reproducción de medios**: play, pause, ended, suspend, waiting, playing, canplay

✓ **Eventos de arrastre**: dragstart, drag, dragstop, dragenter, dragover, dragleave, drop (el elemento debe incluir el atributo `draggable="true"`)

✓ **Eventos sobre animaciones y transiciones**: animationstart, animationinteraction, animationend, transitionrun, transitionstart, transitionend

✓ **Eventos del portapapeles**: cut, copy, paste

---

## 2. MÓDULOS

A medida que una aplicación web crece, la **modularidad del código** mejora la legibilidad y el mantenimiento.

Un **módulo** es un conjunto de funciones, constantes, clases, datos primitivos, objetos y demás elementos que se utilizan como una librería que podremos reutilizar para facilitar el desarrollo de aplicaciones.

Los módulos nos permiten:
- Utilizar código de librerías de terceros de forma eficaz
- Crear código que pueda reutilizarse en otras aplicaciones

---

### 2.1. Creación de módulos

Para poder utilizar código de un archivo a otro, debo **importar y exportar** la información.

**Pasos:**

1. Indicar en el fichero HTML que ese script es un módulo:

```html path=null start=null
<script src="js/app.js" type="module"></script>
```

2. Indicar, a través de la palabra reservada **export**, el código que permitimos que otros ficheros utilicen.

```javascript path=null start=null
export const nombreCliente = 'Natalia Escrivá';
```

3. Indicar, a través de la palabra reservada **import**, el código que vamos a utilizar de otros ficheros.

```javascript path=null start=null
import { nombreCliente } from "./cliente.js";
console.log(nombreCliente);
```

**Importante:** Ya no necesitamos incluir en el HTML todos los ficheros que vamos a utilizar. Simplemente importaremos código a través de los módulos.

---

### 2.2. Importar/Exportar variables

Podemos exportar e importar varias variables a la vez separadas por comas.

**En cliente.js:**

```javascript path=null start=null
export const nombreCliente = 'Natalia Escrivá';
export const tipoCliente = 'VIP';
```

**En app.js:**

```javascript path=null start=null
import { nombreCliente, tipoCliente } from "./cliente.js";
console.log(nombreCliente, tipoCliente);
```

**Resultado:** `Natalia Escrivá VIP`

---

### 2.3. Importar/Exportar funciones

**En cliente.js:**

```javascript path=null start=null
export function mostrarInfo(nombre, tipo) {
    return `Cliente: ${nombre}; Tipo: ${tipo}`;
}
```

**En app.js:**

```javascript path=null start=null
import { nombreCliente, tipoCliente, mostrarInfo } from "./cliente.js";
console.log(mostrarInfo(nombreCliente, tipoCliente));
```

**Resultado:** `Cliente: Natalia Escrivá; Tipo: VIP`

---

### 2.4. Importar/Exportar clases

**En cliente.js:**

```javascript path=null start=null
export class Cliente {
    constructor(nombre, tipo, ahorro) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ahorro = ahorro;
    }
    
    mostrarInfo() {
        return `Cliente: ${this.nombre}; Tipo: ${this.tipo}; Saldo: ${this.ahorro}`;
    }
}
```

**En app.js:**

```javascript path=null start=null
import { Cliente } from "./cliente.js";

const cliente = new Cliente(nombreCliente, tipoCliente, ahorro);
console.log(cliente.mostrarInfo());
```

**Resultado:** `Cliente: Natalia Escrivá; Tipo: VIP; Saldo: 200`

#### 2.4.1. Heredar una clase importada

**En empresa.js:**

```javascript path=null start=null
import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, ahorro, tipo, categoria) {
        super(nombre, ahorro, tipo);
        this.categoria = categoria;
    }
}
```

**En app.js:**

```javascript path=null start=null
import { Empresa } from './empresa.js';

const empresa = new Empresa('Botica Mariano', 25000, 'Silver', 'Parafarmacia');
console.log(empresa);
console.log(empresa.mostrarInfo());
```

---

### 2.5. Export default

Los ejemplos anteriores incluyen la palabra reservada **export** por cada elemento que permitimos que se reutilice.

Podemos utilizar también **export default**.

Su función es la misma que export pero cuando la vayamos a importar, **NO la incluiremos en las llaves**.

**IMPORTANTE:** SOLO HABRÁ UN EXPORT DEFAULT por fichero.

#### Ejemplo 1: export default function

**En cliente.js:**

```javascript path=null start=null
export default function funcionExportDefault() {
    console.log('Ejemplo de export default');
}
```

**En app.js:**

```javascript path=null start=null
import funcionExportDefault, { ahorro, mostrarInfo, nombreCliente, tipoCliente, verificarSaldo, Cliente } from "./cliente.js";

funcionExportDefault();
```

**Resultado:** `Ejemplo de export default`

Podemos usar un alias:

```javascript path=null start=null
import miFuncion, { ahorro, mostrarInfo, nombreCliente, tipoCliente, verificarSaldo, Cliente } from "./cliente.js";

miFuncion();
```

Podríamos incluso declarar la función sin nombre:

```javascript path=null start=null
export default function() {
    console.log('Ejemplo de export default');
}
```

#### Ejemplo 2: export default class

**En cliente.js:**

```javascript path=null start=null
export default class Cliente {
    constructor(nombre, tipo, ahorro) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ahorro = ahorro;
    }
    
    mostrarInfo() {
        return `Cliente: ${this.nombre}; Tipo: ${this.tipo}; Saldo: ${this.ahorro}`;
    }
}
```

**En empresa.js:**

```javascript path=null start=null
import Cliente from "./cliente.js";
```

**En app.js:**

```javascript path=null start=null
import miCliente, { funcionExportDefault, ahorro, mostrarInfo, nombreCliente, tipoCliente, verificarSaldo } from "./cliente.js";

const cliente = new miCliente(nombreCliente, tipoCliente, ahorro);
console.log(cliente.mostrarInfo());
```

#### Ejemplo 3: export default variable

**En cliente.js:**

```javascript path=null start=null
const ahorro = 200;
export default ahorro;
```

**En app.js:**

```javascript path=null start=null
import ahorro, { mostrarInfo, nombreCliente, tipoCliente, verificarSaldo, Cliente } from "./cliente.js";
```

---

### 2.6. Alias

Cuando estamos usando módulos, podemos utilizar **alias** para renombrar lo que estamos importando.

Con **export default** podemos usar un alias directamente, pero si usamos **export** necesitaremos la palabra reservada **as**.

**Ejemplo:**

```javascript path=null start=null
import miFuncion, { ahorro, mostrarInfo, nombreCliente, tipoCliente as nivel, verificarSaldo, Cliente } from "./cliente.js";

const cliente = new Cliente(nombreCliente, nivel, ahorro);
console.log(cliente.mostrarInfo());
```

---

### 2.7. Otras formas de exportar/importar

#### Ejemplo 1: Exportar varios elementos entre llaves

**En cliente.js:**

```javascript path=null start=null
const nombreCliente = 'Natalia Escrivá';
const tipoCliente = 'VIP';
const ahorro = 200;

export {
    nombreCliente,
    tipoCliente,
    ahorro
}
```

#### Ejemplo 2: Importar todo el fichero

**En app.js:**

```javascript path=null start=null
import * as Cliente from "./cliente.js";

console.log(Cliente.nombreCliente, Cliente.tipoCliente);
console.log(Cliente.mostrarInfo(Cliente.nombreCliente, Cliente.tipoCliente));
```

**O bien:**

```javascript path=null start=null
const cliente = new Cliente.Cliente(Cliente.nombreCliente, Cliente.nivel, Cliente.ahorro);
console.log(cliente.mostrarInfo());
```

---

## 3. LOCALSTORAGE Y SESSIONSTORAGE

Pertenecen al objeto global **Window** y permiten el **almacenamiento de datos relacionados con las sesiones de los navegadores en local**.

Su finalidad es NO depender del uso de las cookies para realizar esta labor.

**Características:**

- Almacenan información de tipo **clave-valor**
- Con menos restricciones y más ventajas que las cookies
- Los datos que se almacenan **NO se envían al servidor** en ningún momento
- NO forman parte de ninguna petición ni respuesta HTTP (como sí ocurre en las cookies)

---

### 3.1. LocalStorage

Solo podremos almacenar **Strings**, ningún otro tipo de dato.

Guardará los datos en el equipo del usuario **SIN caducidad**.

#### Añadir o editar elementos

```javascript path=null start=null
localStorage.setItem('nombre', 'Natalia');
console.log(window.localStorage);
```

También podemos pasar el valor de variables:

```javascript path=null start=null
const apellidos = "Escrivá Núñez";
localStorage.setItem('apellidos', apellidos);
```

#### Almacenar objetos y arrays

Si necesitamos almacenar algún elemento que NO es un String, utilizaremos el método **JSON.stringify()**.

```javascript path=null start=null
const producto = {
    nombre: "Ratón",
    precio: 12
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);
console.log(window.localStorage);
```

Sin usar `JSON.stringify()`, localStorage almacena el objeto así: `[object Object]`

**Para arrays:**

```javascript path=null start=null
const finDeSemana = ['sábado', 'domingo'];
localStorage.setItem('finDe', JSON.stringify(finDeSemana));
```

#### Consultar elementos

```javascript path=null start=null
const usuario = `${localStorage.getItem('nombre')} ${localStorage.apellidos}`;
console.log(usuario);
```

**Resultado:** `Natalia Escrivá Núñez`

Si el elemento que buscamos NO existe, devolverá **null**.

#### Obtener objetos y arrays

Si necesitamos obtener algún elemento que NO era un String, utilizaremos el método **JSON.parse()** para volver a tener el objeto o el array.

```javascript path=null start=null
const articulo = JSON.parse(localStorage.getItem('producto'));
console.log(articulo);

const dias = JSON.parse(localStorage.finDe);
console.log(dias);
```

#### Eliminar elementos

```javascript path=null start=null
localStorage.removeItem('apellidos');
```

#### Eliminar todos los elementos

```javascript path=null start=null
localStorage.clear();
```

---

### 3.2. SessionStorage

Los datos que se almacenan se pierden cuando salimos del navegador, es decir, **son de sesión**.

Cada vez que cierre el navegador esa información se perderá.

```javascript path=null start=null
const puntos = prompt("Puntua la experiencia del 1 al 10");
sessionStorage.setItem('puntuacionWeb', puntos);
```

---

## 4. ANEXO: FORMULARIOS

Los formularios constituyen la base de la comunicación de las aplicaciones web con el usuario.

El objeto **document** dispone de una propiedad llamada **forms** que devuelve una colección con todos los formularios del documento.

**Importante:** La validación de formularios desde el lado del cliente con JavaScript **NO garantiza** que los datos enviados son correctos. La validación de un formulario se debe realizar en el lado del servidor y en la base de datos.

---

### 4.1. Acceso a los formularios

HTML:
```html path=null start=null
<body>
    <h1>Formulario</h1>
    <form action="procesar.php" method="post" id="miFormulario">
    </form>
</body>
```

**Formas de acceder:**

```javascript path=null start=null
let formulario = document.forms.miFormulario;
let form2 = document.forms["miFormulario"];
let form1 = document.getElementById("miFormulario");
let form3 = document.getElementsByTagName("form")[0];
let form4 = document.forms[0];
```

---

### 4.2. Propiedades y métodos de los formularios

| MÉTODO/PROPIEDAD | SIGNIFICADO |
|------------------|-------------|
| **elements** | Devuelve una colección que contiene todos los controles del formulario |
| **length** | Devuelve el número de controles del formulario |
| **action** | Devuelve el contenido de la propiedad action, que marca la URL destino de los datos del formulario |
| **method** | Devuelve el contenido de la propiedad method del formulario (get o post) |
| **submit()** | Envía los datos del formulario a su destino |
| **reset()** | Deja los valores de los controles del formulario a su estado por defecto |

**Ejemplo con elements:**

HTML:
```html path=null start=null
<input type="radio" name="sexo" value="H" /> Hombre
<input type="radio" name="sexo" value="M" /> Mujer
```

JavaScript:
```javascript path=null start=null
let sexoElem = formulario.elements.sexo;
console.log(sexoElem);
```

Podremos recorrer ese elemento y ver sus valores:

```javascript path=null start=null
for (let i=0; i<sexoElem.length; i++) {
    console.log(sexoElem[i].value);
}
```

**Resultado:** `H` `M`

---

### 4.3. Propiedades de los controles

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| **name** | Nombre del control |
| **type** | Valor del atributo type: controles de tipo input |
| **value** | Devuelve el valor actual del control |
| **checked** | Puede valer true o false. Indica si un botón de tipo radio o check está clicado |
| **disabled** | Indica con true o false si el control está deshabilitado |
| **readonly** | Indica con true o false si el control es de solo lectura |
| **required** | Indica con true o false si es obligatorio cambiar el valor del control |
| **min / max** | Valor mínimo/máximo posible para el control: input de tipo numérico o de fecha |
| **pattern** | Patrón a seguir para validar un control |

---

### 4.4. Métodos de los controles

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| **focus()** | Fuerza a que el control obtenga el foco |
| **blur()** | Provoca la pérdida del foco del control |

---

### 4.5. Validación de los formularios

Podemos realizar validaciones de los formularios en el lado del cliente de distintas formas: solo con HTML5 y también con JavaScript.

**Ejemplo:**

HTML:
```html path=null start=null
<input type="text" name="nombre" id="nombre" value="Natalia Escrivá" />
```

JavaScript:
```javascript path=null start=null
function validaNombre() {
    let elem = form1.elements.nombre;
    let exp = /^[A-Z][a-zñáéíóú]+( [A-Z][a-zñáéíóú]+)*$/;
    limpiarError(elem);
    
    if (elem.value == "") {
        alert("El campo 'nombre' NO puede estar vacío");
        error(elem);
        return false;
    }
    
    if (exp.test(elem.value) == false) {
        alert("El campo 'nombre' debe ser correcto");
        error(elem);
        return false;
    }
    
    return true;
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}
```

**Otro ejemplo con checkbox:**

HTML:
```html path=null start=null
<input type="checkbox" name="mayor" id="mayor" checked/>
```

JavaScript:
```javascript path=null start=null
function validaEdad() {
    let check = document.getElementById("mayor");
    if (!check.checked) {
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;
}
```

---

### 4.6. API de validación de los formularios

Vamos a utilizar el método **checkValidity()**, que valida si el elemento HTML tiene restricciones y las cumple.

Este método tiene unas propiedades:

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| **validity** | Propiedad booleana que valora la validez de otras propiedades |
| **validationMessage** | Contiene el mensaje que mostrará el navegador cuando la validez sea falsa |

La propiedad **validity** tiene, a su vez, unas propiedades booleanas:

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| **valueMissing** | Será true si un elemento requerido no tiene valor |
| **patternMismatch** | El valor del elemento NO coincide con el patrón |
| **rangeUnderflow** | El valor de un elemento es menor que el mínimo requerido |
| **rangeOverflow** | El valor de un elemento es mayor que el máximo requerido |
| **typeMismatch** | El valor del elemento no es válido por el tipo de atributo |

**Ejemplo con validationMessage:**

HTML:
```html path=null start=null
<td>Nombre*: </td>
<td>
    <input type="text" name="nombre" id="nombre" maxlength="15" pattern="[A-Za-z ]{2,15}" 
           title="Introduce entre 2 y 15 letras" required/>
</td>
```

JavaScript:
```javascript path=null start=null
function validaNombre() {
    let elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}
```

**Ejemplo con mensajes personalizados:**

```javascript path=null start=null
function validaNombre() {
    let elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre");
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        return false;
    }
    return true;
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}
```

**Ejemplo con edad:**

HTML:
```html path=null start=null
<td>Edad*: </td>
<td>
    <input type="number" name="edad" id="edad" min="18" max="100" required/>
</td>
```

JavaScript:
```javascript path=null start=null
function validaEdad() {
    let elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad");
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "El valor debe ser menor de 100");
        }
        if (elemento.validity.rangeUnderflow) {
            error2(elemento, "El valor debe ser mayor o igual que 18");
        }
        return false;
    }
    return true;
}
```

**Más información:**
- https://www.w3schools.com/js/js_validation.asp
- https://www.w3schools.com/js/js_validation_api.asp

---

## 5. ANEXO: COOKIES

Las **cookies** son archivos de texto que las aplicaciones web guardan en el navegador que contienen datos que la aplicación puede volver a recuperar.

### Características:

- Cada navegador tendrá unas cookies independientes
- El protocolo HTTP es un protocolo sin estado, por lo que cada petición es distinta a la anterior
- Las cookies se envían automáticamente en la cabecera de cada petición
- Permiten a las aplicaciones recordar aspectos de peticiones anteriores
- Tienen fecha de expiración. Si no se especifica, caducan cuando se cierre el navegador

### Tipos de cookies (según la UE):

✓ **Estrictamente necesarias**: Imprescindibles para el correcto funcionamiento (ej: datos de inicio de sesión)

✓ **Técnicamente necesarias**: De análisis o seguimiento. Se debe pedir permiso al usuario

---

### 5.1. Crear y modificar una cookie

Es el objeto **document** el que posee la propiedad **cookie**.

La información de la cookie se guarda en formato `"nombre = valor"` y, seguido de punto y coma, otros parámetros.

#### Parámetros:

- **name**: nombre de la cookie, su identificador
- **expires**: fecha de caducidad, en formato UTC
- **max-age**: número de segundos que la cookie estará activa
- **path**: directorio (se suele poner `/` para el directorio raíz)
- **domain**: dominio en el que se crea la cookie

**Ejemplo de cookie sin caducidad (se borra al cerrar el navegador):**

```javascript path=null start=null
document.cookie = "usuario = Natalia Escrivá;";
```

**Ejemplo con fecha de caducidad:**

```javascript path=null start=null
document.cookie = "usuario = Natalia Escrivá; expires = Sun, 01 Jan 2023 12:00:00 GMT; path =/;";
```

**Modificar una cookie:**

```javascript path=null start=null
document.cookie = "usuario = Natalia Escrivá Nunez; ";
```

**IMPORTANTE:** Si modificamos una cookie debemos respetar TODOS los parámetros utilizados, de lo contrario, el navegador entenderá que se trata de una cookie distinta.

---

### 5.2. Leer una cookie

Podemos hacer referencia a las cookies. Si tenemos más de una, las veremos como cadenas separadas por puntos y comas.

```javascript path=null start=null
document.cookie = "usuario = Natalia Escrivá;";
document.cookie = "sexo = mujer;";

let miCookie = document.cookie;
console.log(miCookie);
```

**Resultado:** `usuario=Natalia Escrivá; sexo=mujer`

---

### 5.3. Borrar una cookie

Podremos borrar una cookie poniendo como fecha de expiración una fecha pasada.

**Importante:** Es importante que algunos navegadores no borran las cookies si no ponemos la ruta.

```javascript path=null start=null
document.cookie = "usuario = Natalia Escrivá Nunez; expires=Thu, 01 Jan 1970 00:00:01 GMT";
document.cookie = "sexo = mujer; expires=Thu, 01 Jan 1970 00:00:01 GMT";
console.log(document.cookie);
```

**Resultado:** `<empty string>`

---

## Comparación: Cookies vs LocalStorage vs SessionStorage

| CRITERIO | COOKIES | LOCAL STORAGE | SESSION STORAGE |
|----------|---------|---------------|-----------------|
| **Maximum data size** | 4 KB | 5 MB | 5 MB |
| **Blockable by users** | YES | YES | YES |
| **Auto-expiry option** | YES | NO | YES |
| **Supported data types** | STRING ONLY | STRING ONLY | STRING ONLY |
| **Browser support** | VERY HIGH | VERY HIGH | VERY HIGH |
| **Accessible server side** | YES | NO | NO |
| **Data transferred on every HTTP request** | YES | NO | NO |
| **Editable by users** | YES | YES | YES |
| **Supported on SSL** | YES | N/A | N/A |
| **Can be accessed on** | SERVER & CLIENT SIDE | CLIENT SIDE ONLY | CLIENT SIDE ONLY |
| **Clearing/deleting lifetime** | PHP, JS, AUTOMATIC | JS ONLY | JS & AUTOMATIC |
| **Lifetime** | AS SPECIFIED | TILL DELETED | TILL TAB IS CLOSED |
| **Secure data storage** | NO | NO | NO |

---

**FIN DE LOS APUNTES**
