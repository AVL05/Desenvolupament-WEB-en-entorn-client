# TEMA 6: JS - PROGRAMACIÓN ASÍNCRONA. APIs

## Índice
1. [Callbacks y Promises](#1-callbacks-y-promises)
2. [APIs](#2-apis)
3. [Manejo de Errores](#3-manejo-de-errores)
4. [Async Await](#4-async-await)

---

## 1. CALLBACKS Y PROMISES

### Programación Síncrona vs Asíncrona

**Lenguajes Síncronos:**
- La línea 9 NO se ejecuta hasta que termine la línea 8
- La mayoría de lenguajes son síncronos

**JavaScript es Asíncrono:**
- Una instrucción puede no haber terminado cuando ya se ejecuta la siguiente
- Es un lenguaje de **un solo hilo**
- Las operaciones de red y entrada/salida se lanzan de forma independiente

**Ejemplo de asincronía con eventos:**
```javascript
console.log(1);
window.addEventListener("load", () => {
    console.log(2);
});
console.log(3);

// Resultado: 1, 3, 2
```

**¿Por qué necesitamos asincronía?**
- Cuando el código depende de diferentes servicios externos
- Ejemplo: cargar temperatura de un servicio + mapa de otro servicio
- Si fuera síncrono, el mapa NO se cargaría hasta mostrar la temperatura → NO tiene sentido

**Solución:** Funciones **callback**

---

### 1.1. Callback

**Definición:** Son funciones que son argumento de otra función.

**Ejemplos vistos anteriormente:**
```javascript
letters.forEach((element, index) => {
    console.log(`pos=${index} letter=${element}`);
});
```

#### Ejemplo 1: Función tras inicio de sesión
```javascript
function saludar(nombre) {
    console.log('Hola ' + nombre);
}

function darBienvenidaUsuario(callback) {
    const nombre = prompt('Por favor, indica tu nombre...');
    callback(nombre);
}

darBienvenidaUsuario(saludar);
```

#### Ejemplo 2: Descarga de lista y añadir datos
```javascript
const paises = ['Francia', 'España', 'Portugal'];

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

nuevoPais('Italia', mostrarPaises);
// Resultado: Francia, España, Portugal, Italia
```

---

### 1.2. Callback Hell

**Problema:** Si repetimos callbacks anidados muchas veces, caemos en el "Callback Hell"

#### Ejemplo con frutas:
```javascript
const frutas = [];

function nuevaFruta(fruta, callback) {
    frutas.push(fruta);
    console.log(`Añadida la fruta: ${fruta}`);
    callback();
}

function mostrarFrutas() {
    console.log(frutas);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevaFruta('Fresa', mostrarFrutas);
        setTimeout(() => {
            nuevaFruta('Kiwi', mostrarFrutas);
            setTimeout(() => {
                nuevaFruta('Melocotón', mostrarFrutas);
                setTimeout(() => {
                    nuevaFruta('Pera', mostrarFrutas);
                    setTimeout(() => {
                        nuevaFruta('Manzana', mostrarFrutas);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}
```

**Problema:** Código farragoso y difícil de mantener.

**Solución:** **PROMISES**

---

### 1.3. Promise

**Definición:** Estructura que permite controlar de forma más organizada las tareas asíncronas sin tantas callbacks anidadas.

**Características:**
- Implementadas en ES2015
- NO deja de ser una callback pero con sintaxis más amigable y clara
- Permite invocar funciones cuya labor requiere ejecución asíncrona

#### Estados de una Promise:

1. **Pending (Pendiente):** En proceso de finalización
2. **Fulfilled/Resolved (Cumplida):** Finalizada con éxito → usamos `.then()`
3. **Rejected (Rechazada):** NO finalizada con éxito → usamos `.catch()`

#### Crear una Promise

**Sintaxis:**
```javascript
new Promise((resolve, reject) => {
    // código asíncrono
})
```

**Parámetros:**
- `resolve`: función callback invocada cuando la operación finaliza correctamente
- `reject`: función callback invocada cuando la operación falla

#### Ejemplo 1: Estados de una Promise

**Estado Fulfilled:**
```javascript
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('NO se pudo aplicar el descuento');
    }
});

console.log(aplicarDescuento);
// Promise {<fulfilled>: 'Descuento aplicado'}
```

**Estado Rejected:**
```javascript
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('NO se pudo aplicar el descuento');
    }
});

console.log(aplicarDescuento);
// Promise {<rejected>: 'NO se pudo aplicar el descuento'}
// Uncaught (in promise) NO se pudo aplicar el descuento
```

**Estado Pending:**
```javascript
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        // resolve('Descuento aplicado');
    } else {
        // reject('NO se pudo aplicar el descuento');
    }
});

console.log(aplicarDescuento);
// Promise {<pending>}
```

---

#### Métodos .then() y .catch()

**Usamos estos métodos para recoger y usar los resultados de las promesas.**

**Sintaxis básica:**
```javascript
aplicarDescuento
    .then(resultado => {
        console.log(`Resultado de la promesa: ${resultado}`);
    })
    .catch(error => {
        console.log(`Resultado de la promesa: ${error}`);
    });
```

**Sintaxis alternativa:**
```javascript
aplicarDescuento.then(resultado => console.log(resultado)).catch(error => console.log(error));

aplicarDescuento.then(resultado => console.log(resultado), error => console.log(error));
```

**Llamar a funciones:**
```javascript
aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(`Resultado de la promesa: ${error}`));

function descuento(mensaje) {
    console.log(mensaje);
}
```

---

#### Pasar de Callback a Promises

**Ejemplo con frutas (antes con Callback Hell):**

1. Array vacío:
```javascript
const frutas = [];
```

2. Función con Promise (sustituye a la callback):
```javascript
const nuevaFruta = fruta => new Promise(resolve => {
    setTimeout(() => {
        frutas.push(fruta);
        resolve('Resultado del Resolve:');
    }, 3000);
});
```

3. Llamadas encadenadas con `.then()`:
```javascript
function mostrarFrutas() {
    console.log(frutas);
}

nuevaFruta('Manzana')
    .then(resultado => {
        console.log(resultado);
        mostrarFrutas();
        return nuevaFruta('Fresa');
    })
    .then(resultado => {
        console.log(resultado);
        mostrarFrutas();
        return nuevaFruta('Pera');
    })
    .then(resultado => {
        console.log(resultado);
        mostrarFrutas();
        return nuevaFruta('Kiwi');
    })
    .then(resultado => {
        console.log(resultado);
        mostrarFrutas();
        return nuevaFruta('Naranja');
    });
```

**Ventaja:** Código más limpio y mantenible que el Callback Hell.

---

## 2. APIS

**Definición:** Las APIs (Interfaces de Programación de Aplicaciones) son construcciones que abstraen código complejo para proveer sintaxis sencilla.

**Función:** Interfaz de procesamiento entre un servidor web y un navegador web.

### Tipos de APIs:

#### 1. APIs de Navegador
- Integradas en el propio navegador
- Exponen datos del navegador y del entorno
- **Ejemplo:** API de Geolocalización

#### 2. APIs de Terceros
- NO incluidas en el navegador
- Hay que obtener código e información de la Web
- **Ejemplo:** API de Twitter/X

**Importante:** Las APIs utilizan **Promises**, por lo que usaremos su sintaxis.

---

### 2.1. Notification API

**Función:** Permite enviar notificaciones al usuario.

**Requisito:** Pedir permiso al usuario primero.

#### Paso 1: Pedir permiso

```javascript
const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es: ${resultado}`);
        });
});
```

**Opciones de respuesta:**
- **granted:** Usuario ha concedido el permiso
- **denied:** Usuario ha denegado el permiso
- **default:** Decisión desconocida (se actúa como denied)

#### Paso 2: Crear notificación básica

```javascript
const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        new Notification('Nueva Notificación!!!');
    }
});
```

#### Paso 3: Notificación con opciones

```javascript
const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Nueva Notificación!!!', {
            icon: 'img/ccj.jpg',
            body: 'Reserva ya tu cena de Navidad ;)'
        });

        notificacion.addEventListener('click', () => {
            window.open('http://www.google.com');
        });
    }
});
```

**Nota:** Para restablecer permisos, clic en el icono de información de la barra de direcciones.

---

### 2.2. Intersection Observer API

**Función:** Permite identificar cuando un elemento está visible en pantalla.

**Uso común:** 
- Lazy loading (cargar elementos solo cuando se necesitan)
- Scroll infinito

**Ventaja:** Más sencillo que `getBoundingClientRect()`

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Creamos el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            console.log('Ya está visible');
        } else {
            console.log('No está visible');
        }
    });

    // Indicamos qué elemento va a ser observado
    observer.observe(document.querySelector('.premium'));
});
```

---

### 2.3. Navigator API

**Función:** Obtener información sobre la aplicación que se está ejecutando.

**Propiedad:** `window.navigator` (solo lectura)

**Ejemplo: Detectar conexión a Internet**

```javascript
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if (navigator.online) {
        console.log('Tienes conexión a Internet');
    } else {
        console.log('No estás conectado...');
    }
}
```

---

### 2.4. FullScreen API

**Función:** Ejecutar código en pantalla completa.

**Requisito:** Indicar qué elemento del HTML se ejecuta en pantalla completa.

```javascript
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}
```

---

### 2.5. Speech Recognition API

**Función:** Detectar lo que el usuario habla y trasladarlo a la página web (asistentes por voz).

**Requisitos:**
- Dar permisos al micrófono
- NO todos los navegadores lo soportan (Firefox no)

**Propiedades importantes:**
- **confidence:** Valor entre 0 y 1 que indica el grado de legibilidad (0-100%)
- **transcript:** El audio detectado

#### Implementación:

**1. HTML:**
```html
<button type="button" id="microfono">Speech Recognition API</button>
<div id="salida" class="ocultar"></div>
```

**2. Seleccionar elementos:**
```javascript
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');
```

**3. Asignar evento:**
```javascript
microfono.addEventListener('click', ejecutarSeechAPI);
```

**4. Función principal:**
```javascript
const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Iniciar Speech API
recognition.start();

// Evento cuando inicia
recognition.addEventListener('start', () => {
    salida.classList.add('mostrar');
    salida.textContent = 'Escuchando...';
});

// Evento cuando detecta pausa
recognition.addEventListener('speechend', () => {
    setTimeout(() => {
        salida.textContent = 'Grabación finalizada!';
    }, 2000);
    recognition.stop();
});

// Evento de transcripción de resultados
recognition.addEventListener('result', transcribirAudio);

function transcribirAudio(e) {
    salida.textContent = '';
    const {confidence, transcript} = e.results[0][0];
    console.log(e.results);
    
    const speech = document.createElement('p');
    speech.innerHTML = `Grabado: ${transcript}`;
    
    const seguridad = document.createElement('p');
    seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)}%`;
    
    salida.appendChild(speech);
    salida.appendChild(seguridad);
}
```

---

### 2.6. Fetch API

**Función:** Obtener datos de otros servidores o APIs.

**Características:**
- Es nativa de JavaScript
- Permite enviar y recibir datos
- Solo puede leer **texto plano** o **JSON** (NO XML)
- Antes se usaba AJAX

**Utiliza Promises implementados** (no necesitamos crear Promise con resolve/reject)

#### Objeto Response

**Propiedades importantes:**
- **status:** Código de estado de la solicitud
- **statusText:** Mensaje de estado legible
- **url:** Dirección de donde leemos/escribimos datos
- **type:** Tipo de transacción

---

#### 2.6.1. Consultar un TXT

```javascript
const url = "data/datos.txt";

fetch(url)
    .then(respuesta => {
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.statusText);
        console.log(respuesta.url);
        console.log(respuesta.type);
        
        return respuesta.text();
    })
    .then(datos => {
        console.log(datos);
    })
    .catch(error => {
        console.log(error);
    });
```

**Resultados:**
- `status: 200` (OK)
- `statusText: "OK"`
- `url: "http://127.0.0.1:5501/data/datos.txt"`
- `type: "basic"`

---

#### 2.6.2. Consultar un JSON como Objeto

**JSON:** Tecnología de intercambio de datos que permite separar lenguajes del emisor y receptor.

**Diferencia con objeto JS:** En JSON todo está entre comillas.

**Archivo empleado.json:**
```json
{
    "id": 1,
    "nombre": "Roberto López Buhadilla",
    "empresa": "Transportes Buhadilla",
    "trabajo": "Gerente"
}
```

**Código:**
```javascript
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerInfo);

function obtenerInfo() {
    fetch('data/empleado.json')
        .then(respuesta => {
            console.log(respuesta);
            return respuesta.json();
        })
        .then(resultado => mostrarHTML(resultado));
}
```

**Resultado:** Muestra los datos del empleado en el HTML.

---

#### 2.6.3. Consultar un JSON como Array

**Archivo empleados.json:**
```json
[
    {
        "id": 1,
        "nombre": "Roberto López Buhadilla",
        "empresa": "Desarrollo en un click",
        "trabajo": "Diseño"
    },
    {
        "id": 2,
        "nombre": "Alejandra Martínez López",
        "empresa": "Desarrollo en un click",
        "trabajo": "Desarrollo frontend"
    },
    {
        "id": 3,
        "nombre": "Pedro Masiá Gómez",
        "empresa": "Desarrollo en un click",
        "trabajo": "Desarrollo backend"
    }
]
```

**Código:**
```javascript
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerInfoEmpleados);

function obtenerInfoEmpleados() {
    const url = 'data/empleados.json';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHTMLArray(respuesta));
}
```

---

#### 2.6.4. Consultar e Imprimir Resultados de una API

**API a usar:** `https://picsum.photos/list` (fotos gratuitas de Unsplash)

**Herramienta útil:** Extensión **JSONView** (jsonview.com) para visualizar JSON en el navegador.

**Código:**
```javascript
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatosAPI);

function obtenerDatosAPI() {
    const url = 'https://picsum.photos/list';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .catch(error => document.write(error))
        .then(resultados => mostrarHTMLDatosAPI(resultados));
}
```

**Resultado:** Lista de autores con enlaces "Ver Imagen" que llevan a las fotos en Unsplash.

---

## 3. MANEJO DE ERRORES

### Tipos de Errores

1. **Errores de sintaxis**
   - Se producen al escribir código
   - Ejemplos: expresiones incorrectas, llaves olvidadas, palabras mal escritas
   - Fáciles de detectar (el IDE o el intérprete los marca)

2. **Errores lógicos**
   - Mala lógica al desarrollar
   - Sintaxis correcta pero el programa NO hace lo esperado
   - NO hay herramienta que avise
   - Importante detectarlos en fase de testing

3. **Errores del sistema**
   - Fuera del control del programador
   - Ejemplos: fallo de red, caída de servicio
   - NO podemos controlarlos pero sí minimizar daños

4. **Errores de usuario**
   - Acciones inesperadas del usuario
   - Causan errores en tiempo de ejecución
   - Son errores lógicos por no prever actuaciones

---

### 3.1. try() & catch()

**Problema:** JavaScript es interpretado, cuando encuentra un error, NO sigue ejecutando.

**Solución:** Gestionar excepciones con `try...catch`

**Función:**
- **try:** Intentar ejecutar código
- **catch:** Si falla, obtener excepción pero el código NO deja de funcionar

**Sintaxis:**
```javascript
try {
    alert("hola");     // se ejecuta
    miFunction();      // da error
    alert("adiós");    // NO se ejecuta
} catch (error) {
    console.log(error);
}

alert(1+1);  // se ejecuta
```

**Uso:** En partes críticas de la aplicación:
- Conexión a base de datos
- Consulta de API
- Autenticar usuario

---

## 4. ASYNC AWAIT

**Introducción:** ES2017

**Función:** Alternativa a las Promises que funciona sobre ellas.

**Ventaja:** Sintaxis más clara y legible.

---

### Ejemplo Base: Descarga de Clientes

**Promise base:**
```javascript
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;
        
        setTimeout(() => {
            if (!error) {
                resolve('El listado de Clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}
```

---

### Con Function Declaration

```javascript
async function ejecutar() {
    try {
        console.log(1+1);
        const respuesta = await descargarClientes();
        
        console.log(2+2);
        console.log(respuesta);
    } catch(error) {
        console.log(error);
    }
}

ejecutar();
```

**Explicación:**
- `async` en la función "padre"
- `await` detiene la ejecución hasta que se resuelva la Promise
- El código debajo del `await` se bloquea hasta que se resuelva

**Resultado:**
1. Se ejecuta `console.log(1+1)` → 2
2. Espera 3 segundos
3. Se ejecuta `console.log(2+2)` → 4
4. Se muestra la respuesta

---

### Con Function Expression

```javascript
const ejecutar2 = async () => {
    try {
        console.log(1+1);
        const respuesta = await descargarClientes2();
        
        console.log(respuesta);
        console.log(2+2);
    } catch(error) {
        console.log(error);
    }
}

ejecutar2();
```

---

### 4.1. Async Await con Varias Promesas

**Escenario:** Dos tareas independientes (descargar clientes y pedidos).

**Funciones base:**
```javascript
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes....');
        setTimeout(() => {
            resolve('Clientes descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos....');
        setTimeout(() => {
            resolve('Pedidos descargados');
        }, 3000);
    });
}
```

#### Ejemplo 1: Una petición depende de otra

```javascript
const app = async () => {
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);
    } catch(error) {
        console.log(error);
    }
}

app();
```

**Resultado:** Primero clientes (5 seg), luego pedidos (3 seg). Total: 8 segundos.

---

#### Ejemplo 2: Peticiones independientes (simultáneas)

```javascript
const app2 = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch(error) {
        console.log(error);
    }
}

app2();
```

**Resultado:** Ambas se ejecutan simultáneamente. Total: 5 segundos (el más largo).

**Uso de `Promise.all`:** Recibe array de promesas que se ejecutan en paralelo.

---

### 4.2. Async Await con fetch()

**Elementos comunes:**
```javascript
const url = 'https://picsum.photos/v2/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);
```

**Con Promises:**
```javascript
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}
```

**Con Async/Await:**
```javascript
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch(error) {
        console.log(error);
    }
}
```

**Ventaja:** Código más limpio y fácil de leer, especialmente con múltiples operaciones asíncronas.

---

## Resumen

### Callbacks
- ✅ Funciones como argumento
- ❌ Callback Hell cuando se anidan muchas

### Promises
- ✅ Sintaxis más clara que callbacks
- ✅ Métodos `.then()` y `.catch()`
- ✅ Estados: pending, fulfilled, rejected

### Async/Await
- ✅ Sintaxis más limpia que Promises
- ✅ Funciona sobre Promises
- ✅ Usa `try...catch` para errores
- ✅ `Promise.all()` para ejecutar en paralelo

### APIs
- **Notification API:** Notificaciones al usuario
- **Intersection Observer API:** Detectar visibilidad de elementos
- **Navigator API:** Información del navegador
- **FullScreen API:** Pantalla completa
- **Speech Recognition API:** Reconocimiento de voz
- **Fetch API:** Obtener datos de servidores/APIs

---

**Natalia Escrivá Núñez**  
IES Serra Perenxisa  
n.escrivanunez@edu.gva.es
