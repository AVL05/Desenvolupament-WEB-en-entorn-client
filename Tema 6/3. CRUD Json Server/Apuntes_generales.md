# TEMA 1: INTRODUCCIÓN AL DESARROLLO WEB
## DESARROLLO WEB ENTORNO CLIENTE - 2º DAW CFGM

---

## 1. INTRODUCCIÓN

El desarrollo web está presente en:
- Comercio electrónico
- Diseño web
- Aplicaciones móviles
- Internet

### EVOLUCIÓN DEL DESARROLLO WEB
- Ya no se limita solo a sitios web atractivos
- Funcionalidades modernas: membresías, venta en línea, ocio, educación online
- Relacionado con aplicaciones móviles e Internet de las cosas (IoT)

---

## 2. CÓMO FUNCIONA UNA PÁGINA WEB

### PROCESO DE FUNCIONAMIENTO
1. Usuario escribe URL en navegador → **DNS** traduce nombre a IP
2. Se genera petición **HTTP** desde cliente al servidor
3. Servidor responde con documento web
4. Cliente visualiza el documento en el navegador

### ARQUITECTURA MVC (Modelo-Vista-Controlador)
- **MODELO**: Capa de datos (SGBD) - gestiona información
- **VISTA**: Capa de presentación - interfaz de usuario (HTML/CSS)
- **CONTROLADOR**: Capa de servidor - lógica de aplicación

### DIVISIÓN DE DESARROLLO
- **FRONTEND**: Experiencia de usuario, interfaz final
- **BACKEND**: Desarrollo oculto al usuario, seguridad, acceso a datos

---

## 3. LENGUAJES DEL LADO DEL CLIENTE (FRONTEND)

Trabajan en el navegador web y gestionan:
- Apariencia visual
- Interacción con usuario
- Responsividad
- Validación de formularios
- Peticiones a APIs

### PRINCIPALES LENGUAJES

#### HTML (HyperText Markup Language)
- Lenguaje de marcado (no programación)
- Da estructura semántica al contenido
- Define elementos: texto, imágenes, videos

#### CSS (Cascading Style Sheets)
- Lenguaje de estilos
- Controla apariencia visual: colores, tamaños, espacios, animaciones
- Frameworks: **Bootstrap**, **Tailwind**

#### JavaScript
- Lenguaje de programación
- Dinamiza las páginas web
- Permite interacción, validaciones, animaciones, modificación dinámica
- Frameworks/bibliotecas: **React**, **Vue**, **Angular**

---

## 4. LENGUAJES DEL LADO DEL SERVIDOR (BACKEND)

Se ejecutan en el servidor y gestionan:
- Base de datos y relaciones
- Optimización de código
- Seguridad y prevención de ataques
- Procesos de pago seguros
- Creación de APIs

### EJEMPLOS DE LENGUAJES
- **Java**, **Python**, **PHP**, **.NET**, **C#**, **Perl**
- Todos pueden acceder a bases de datos (ej: MySQL)

---

## 5. JAVASCRIPT - CARACTERÍSTICAS PRINCIPALES

**UBICACIÓN**: Capa de Vista junto con HTML y CSS

### CARACTERÍSTICAS

#### 1. LENGUAJE DEL LADO DEL CLIENTE (navegador)
- También servidor con **Node.js**

#### 2. LENGUAJE INTERPRETADO
- No necesita compilación
- Ejecución de arriba hacia abajo
- Usa compilador **JIT (Just In Time)** para mejor rendimiento

#### 3. ORIENTADO A OBJETOS
- Antes basado en prototipos
- Desde **ES6** incorpora clases

#### 4. IMPERATIVO CON TOQUES DECLARATIVOS
- Instrucciones explícitas
- ES6+ añade funcionalidades declarativas

#### 5. LENGUAJE ESTRUCTURADO
- Secuencia, selección, iteración

#### 6. OBJETUAL, TIPIFICACIÓN DÉBIL Y DINÁMICA
- No obligatorio definir tipos de variables
- Tipos pueden cambiar durante ejecución

---

## 6. BREVE HISTORIA DE JAVASCRIPT

### ORÍGENES (1995)
- Creado por **Brendan Eich** para Netscape Navigator 2.0
- Inicialmente llamado **LiveScript** → **JavaScript**
- Microsoft crea **JScript** (copia para evitar problemas legales)

### NORMALIZACIÓN
- **ECMA** normaliza en 1997 → **ECMAScript**
- JavaScript es marca de **Oracle Corporation**
- **Mozilla Foundation** también tiene derechos del nombre

### EVOLUCIÓN
- Motor **V8** de Google (Chrome) mejora velocidad
- **RIA (Rich Internet Applications)**
- **Node.js** (2009) por Ryan Dahl → JavaScript en servidor

---

## 7. JAVASCRIPT COMO LENGUAJE MULTIPROPÓSITO

Con **Node.js** JavaScript puede:
- Crear aplicaciones de escritorio (**Electron**, **NW.js**)
- Programar hardware (**Johnny-Five**, **Cylon.js**)
- Aplicaciones móviles nativas (**PhoneGap**, **Ionic**, **React Native**)
- Manipular bases de datos (**MongoDB**)

---

## 8. LENGUAJES PREPROCESADOS

> **DEFINICIÓN**: Se escribe en un código y se convierte a JavaScript estándar

### EJEMPLOS
- **CoffeScript**: Sintaxis inspirada en Python
- **TypeScript** (Microsoft): Tipos de datos avanzados
- **Dart** (Google): Modernizar JavaScript
- **Elm**: Programación funcional

---

## 9. VERSIONES DE JAVASCRIPT

### ESTÁNDAR ECMA-262

| Versión | Año | Características principales |
|---------|-----|----------------------------|
| **ES5** | 2011 | Adoptado por todos los navegadores |
| **ES6/ES2015** | 2015 | Cambios significativos en sintaxis |
| **ES7/ES2016** | 2016 | Array.includes, operador exponencial |
| **ES8/ES2017** | 2017 | async/await |
| **ES9/ES2018** | 2018 | rest/spread, iteración asíncrona |
| **ES10/ES2019** | 2019 | Array.flat(), Array.flatMap() |
| **ES11/ES2020** | 2020 | globalThis, BigInt |
| **ES12/ES2021** | 2021 | replaceAll, Promise.any |
| **ES13/ES2022** | 2022 | Array.at(), Object.hasOwn() |
| **ES.Next** | - | Versiones futuras en desarrollo |

> **COMPATIBILIDAD**: Consultar [www.caniuse.com](https://caniuse.com)

---

## 10. FRAMEWORKS Y BASES DE DATOS

### FRAMEWORKS
**Código preescrito que proporciona funcionalidades comunes**

#### VENTAJAS ✅
- Código probado y respaldado
- Ahorro de tiempo
- Buenas prácticas
- Documentación

#### INCONVENIENTES ❌
- Aprender nueva sintaxis
- Pueden ser excesivamente densos

### FRAMEWORKS FRONTEND
- **Herramientas HTML**: HTML5 Boilerplate
- **CSS**: Bootstrap, Tailwind, Semantic UI
- **JavaScript**: React, Vue.js, Angular

### FRAMEWORKS BACKEND
- **Java**: Spring Boot, Struts
- **PHP**: Laravel, Symfony
- **Python**: Django, Flask
- **JavaScript**: Express

### BASES DE DATOS
- **Relacionales**: MySQL, PostgreSQL, Oracle
- **NoSQL**: MongoDB
- **Aplicaciones CRUD**: Create, Read, Update, Delete

---

## 11. HERRAMIENTAS PARA DESARROLLO WEB

### EDITORES DE CÓDIGO - CARACTERÍSTICAS
- ✨ Coloreado de código
- 🧭 Navegación avanzada
- 🔍 Búsqueda y reemplazo
- ✔️ Autocorrección
- 📝 Snippets
- 👀 Visualización de resultado
- 🔧 Integración de herramientas
- 🔌 Extensiones/plugins

### TIPOS DE EDITORES

#### 1. Multipropósito
- Sublime Text, Notepad++

#### 2. Especializados en web
- **Visual Studio Code**, Atom, Brackets

#### 3. IDEs
- WebStorm, Eclipse, Visual Studio

#### 4. Online
- Fiddle, Plunker

> **⭐ EDITOR RECOMENDADO**: Visual Studio Code

### AMBIENTES DE DESARROLLO
- **MAMP** (Windows): Apache, Nginx, PHP, MySQL
- **XAMPP** (Multiplataforma): Apache, MariaDB, PHP, Perl
- **Bitnami**: Entornos específicos virtualizados

### HOSTING
- Espacio en servidores con acceso a Internet
- Recursos: bases de datos, lenguajes, espacio, RAM
- Acceso FTP, cPanel
- Ejemplos: AWS, hosting compartido

---

## 12. NAVEGADORES WEB

### ESTADÍSTICAS DE USO (2024)
| Navegador | Cuota de mercado |
|-----------|------------------|
| **Chrome** | 65.18% |
| **Safari** | 18.55% |
| **Edge** | 5.26% |
| **Firefox** | 2.74% |
| **Samsung Internet** | 2.56% |
| **Opera** | 2.15% |

### NAVEGADORES PRINCIPALES

#### 🟢 Google Chrome
- Más popular, alto consumo recursos, muchas extensiones

#### 🟠 Mozilla Firefox
- Open source, estable, muchas extensiones

#### 🔵 Safari
- Exclusivo Apple, buena protección datos

#### 🟡 Microsoft Edge
- Reemplazo Internet Explorer

#### 🔴 Opera
- Bajo consumo recursos, monedero cripto

> **🛠️ PARA DESARROLLO**: Google Chrome y/o Firefox

---

## 13. WEB DEVELOPER TOOLS

### Herramientas de navegador para desarrollo
**Acceso**: Botón derecho → Inspeccionar

### FUNCIONALIDADES

1. **Inspector de elementos**: Ver/modificar HTML y CSS
2. **Responsive design**: Probar diferentes tamaños dispositivos
3. **Console**: Ver errores, warnings, interactuar con aplicación
4. **Network**: Analizar carga de elementos, tiempos
5. **Sources**: Inspeccionar código, debugger, breakpoints
6. **Performance/Memory**: Analizar rendimiento

### ATAJOS IMPORTANTES
- **F12**: Abrir herramientas desarrollador
- **Ctrl+Shift+C**: Inspector elementos
- **Ctrl+Shift+I**: Abrir console

# APUNTES JAVASCRIPT - UDAD 2: MANEJO DE SINTAXIS Y USO DATOS PRIMITIVOS

## 1. VISUAL STUDIO CODE Y EXTENSIONES

**Extensiones recomendadas:**
- **Live Server**: Servidor local con recarga automática
- **Flatland Monokai Theme**: Tema de color que resalta elementos del código
- **JavaScript (ES6) code snippet**: Facilita la codificación
- **VsCode-Icons**: Iconos identificativos para archivos
- **Open In Browser**: Abrir en navegador no predeterminado

## 2. CÓMO AÑADIR CÓDIGO JS EN HTML

### 2.1 Incluir JS en el mismo documento HTML ❌ NO RECOMENDABLE
```html
<script>
    // código JavaScript
</script>
```

### 2.2 Incluir JS a través de archivo externo ✅ RECOMENDABLE
```html
<!-- Antes del cierre de </body> -->
<script src="./js/UDAD2.js"></script>
```

## 3. SINTAXIS DEL LENGUAJE

### 3.1 Mayúsculas y minúsculas
- JavaScript **distingue** entre mayúsculas y minúsculas
- `alert()` ≠ `Alert()`

### 3.2 Comentarios
```javascript
// Comentario de una línea

/* Comentario
   de varias
   líneas */
```

### 3.3 Tabulaciones y saltos de línea
- JavaScript **ignora** espacios, tabulaciones y saltos de línea
- **Recomendación**: usar indentación para mejor legibilidad

### 3.4 El punto y coma
- **NO obligatorio** pero recomendable
- **Obligatorio** para separar instrucciones en la misma línea
```javascript
let i = 0; let j = 2; // Con punto y coma
```

### 3.5 Palabras reservadas (ES2015)
```
break, case, catch, class, const, continue, debugger, default, 
delete, do, else, export, extends, finally, for, function, 
if, import, in, instanceof, new, return, super, switch, 
this, throw, try, typeof, var, void, while, with, yield
```

## 4. LA CONSOLA DE JS

**Acceso**: F12 → Consola
- Ver resultados y pruebas
- Ver errores y advertencias
- Medir tiempo de ejecución con `console.time()` y `console.timeEnd()`

## 5. VARIABLES Y CONSTANTES

JavaScript es **NO tipado** y **dinámico**.

### 5.1 Declaración de variables
```javascript
// Antes de ES6
var nombre = "Juan";

// ES6 en adelante (RECOMENDADO)
let edad = 25;
```

### 5.2 Ámbito de las variables (Scope)
- **Globales**: Fuera de funciones, accesibles en toda la página
- **Locales**: Dentro de funciones, accesibles solo en esa función

### 5.3 Use Strict
```javascript
"use strict";
// Obliga a declarar variables antes de usarlas
```

### 5.4 Diferencia entre let y var
- **var**: Permite redeclaración, scope global/función
- **let**: NO permite redeclaración, scope de bloque

### 5.5 Declaración de constantes
```javascript
const PI = 3.14159;
// NO se puede reasignar
// DEBE inicializarse en la declaración
// Los objetos y arrays SÍ se pueden modificar
```

### 5.6 Valores primitivos
- **String**: Cadenas de texto
- **Number**: Números (enteros y decimales)
- **Boolean**: true/false
- **undefined**: Variable declarada sin valor
- **null**: Valor nulo intencionado

## 6. INSTRUCCIONES DE SALIDA

### 6.1 window.alert()
```javascript
alert("Mensaje");
```

### 6.2 window.confirm()
```javascript
let respuesta = confirm("¿Continuar?"); // true/false
```

### 6.3 window.prompt()
```javascript
let nombre = prompt("Tu nombre:", "Valor por defecto");
// ⚠️ Siempre devuelve un String
```

### 6.4 document.write() ❌ NO RECOMENDABLE
```javascript
document.write("<h2>Título</h2>");
```

### 6.5 innerHTML
```javascript
document.getElementById("miId").innerHTML = "Nuevo contenido";
```

### 6.6 console.log()
```javascript
console.log("Mensaje para la consola");
```

## 7. ESTRUCTURAS DE CONTROL

### 7.1 Estructuras de selección

#### IF
```javascript
if (condicion) {
    // código
}
```

#### IF...ELSE
```javascript
if (condicion) {
    // código si true
} else {
    // código si false
}
```

#### IF...ELSE IF
```javascript
if (condicion1) {
    // código
} else if (condicion2) {
    // código
} else {
    // código por defecto
}
```

#### SWITCH
```javascript
switch (variable) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código por defecto
}
```

#### Operador ternario
```javascript
let resultado = condicion ? valorSiTrue : valorSiFalse;
```

### 7.2 Estructuras iterativas

#### FOR
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

#### WHILE
```javascript
while (condicion) {
    // código
}
```

#### DO...WHILE
```javascript
do {
    // código (se ejecuta al menos una vez)
} while (condicion);
```

#### Break y Continue
- **break**: Sale del bucle
- **continue**: Salta a la siguiente iteración

## 8. FUNCIONES

### 8.1 Function Declaration
```javascript
function nombre(parametros) {
    return resultado;
}
```

### 8.2 Function Expression
```javascript
const miFuncion = function(parametros) {
    return resultado;
};
```

### 8.3 Arrow Functions
```javascript
// Sintaxis básica
const miFuncion = (parametros) => {
    return resultado;
};

// Sintaxis simplificada (una expresión)
const suma = (a, b) => a + b;

// Un parámetro (sin paréntesis)
const doble = x => x * 2;
```

### 8.4 Parámetros
- **Por defecto**: `function saludo(nombre = "Usuario") {}`
- **Rest parameters**: `function suma(...numeros) {}`
- **Arguments object**: `arguments` (solo en funciones normales)

### 8.5 Hoisting
- **Function Declaration**: Se puede llamar antes de declararla
- **Function Expression**: NO se puede llamar antes de declararla

### 8.6 Recursividad
```javascript
function factorial(n) {
    if (n <= 1) return 1; // Caso base
    return n * factorial(n - 1); // Paso recursivo
}
```

## 9. STRINGS

### 9.1 Declaración
```javascript
let texto1 = "Comillas dobles";
let texto2 = 'Comillas simples';
let texto3 = `Template literals`; // ES6
```

### 9.2 Template Strings y concatenación
```javascript
let nombre = "Juan";
let edad = 25;

// Template strings (ES6)
let mensaje = `Hola ${nombre}, tienes ${edad} años`;

// Concatenación tradicional
let mensaje2 = "Hola " + nombre + ", tienes " + edad + " años";

// Método concat
let mensaje3 = "Hola ".concat(nombre).concat(", tienes ").concat(edad);
```

### 9.3 Secuencias de escape
- `\n`: Salto de línea
- `\t`: Tabulador
- `\"`: Comillas dobles
- `\'`: Comillas simples
- `\\`: Backslash

### 9.4 Propiedades y métodos principales

#### Propiedad
- `length`: Longitud de la cadena

#### Métodos de búsqueda
```javascript
let texto = "JavaScript es genial";

texto.indexOf("Script");        // Primera posición
texto.lastIndexOf("a");         // Última posición
texto.includes("Java");         // true/false
texto.charAt(4);                // Carácter en posición
texto.search("genial");         // Posición (regex)
```

#### Mayúsculas/minúsculas
```javascript
texto.toUpperCase();    // MAYÚSCULAS
texto.toLowerCase();    // minúsculas
```

#### Empieza/termina
```javascript
texto.startsWith("Java");  // true/false
texto.endsWith("nial");    // true/false
```

#### Extraer/modificar
```javascript
texto.slice(0, 4);          // Extrae desde posición
texto.substring(0, 4);      // Como slice pero no negativos
texto.replace("Java", "Type"); // Reemplaza primera ocurrencia
texto.trim();               // Elimina espacios extremos
texto.split(" ");           // Convierte a array
```

#### Repetir
```javascript
"*".repeat(5);  // "*****"
```

### 9.5 Recorrer un String
```javascript
for (let char of miString) {
    console.log(char);
}
```

## 10. NUMBERS

### 10.1 Declaración
```javascript
let num1 = 42;              // Entero
let num2 = 3.14;            // Decimal
let num3 = 2e4;             // Notación científica
let num4 = 0xFF;            // Hexadecimal
let num5 = 0o77;            // Octal
let num6 = 0b1010;          // Binario
```

### 10.2 Infinity y NaN
```javascript
let infinito = Infinity;
let noEsNumero = NaN;
```

### 10.3 Propiedades de Number
- `Number.MAX_VALUE`
- `Number.MIN_VALUE`
- `Number.POSITIVE_INFINITY`
- `Number.NEGATIVE_INFINITY`
- `Number.NaN`

### 10.4 Métodos importantes
```javascript
// Conversión
Number("123");          // 123
parseInt("123.45");     // 123
parseFloat("123.45");   // 123.45

// Formateo
num.toFixed(2);         // "123.45" (string)
num.toPrecision(4);     // "123.5" (string)
num.toString(2);        // Conversión a base 2

// Validación
isNaN(value);           // true/false
Number.isInteger(123);  // true/false
```

## 11. BOOLEAN

```javascript
let verdadero = true;
let falso = false;

// Valores que se evalúan como false (falsy):
// 0, "", NaN, undefined, null, false

// Todo lo demás es truthy
```

## 12. OPERADORES

### 12.1 Aritméticos
```javascript
+ - * ** / %    // Suma, resta, multiplicación, potencia, división, módulo
++ --           // Incremento, decremento
```

### 12.2 De asignación
```javascript
= += -= *= /= %= **=
```

### 12.3 Relacionales
```javascript
> < >= <=       // Mayor, menor, mayor igual, menor igual
== !=           // Igualdad, desigualdad (con conversión)
=== !==         // Igualdad estricta (sin conversión)
```

### 12.4 Lógicos
```javascript
&& || !         // AND, OR, NOT
```

## 13. CONVERSIÓN DE TIPOS

### 13.1 Conversión automática
JavaScript convierte automáticamente tipos cuando es necesario.

### 13.2 Conversión explícita
```javascript
// A Number
Number("123");
parseInt("123");
parseFloat("123.45");

// A String
String(123);
(123).toString();

// A Boolean
Boolean(value);
```
# Apuntes: UDAD 3 - Programación con Objetos en JavaScript

## 1. INTRODUCCIÓN

**Programación Orientada a Objetos (POO)** es un modelo de programación que permite mayor modularidad.

Los **objetos** son estructuras que contienen:
- **Propiedades**: datos o características (ej: marca, color, potencia)
- **Métodos**: acciones o funciones (ej: arrancar, parar, acelerar)

### Características de la POO

- **Abstracción**: reutilizar objetos sin conocer su funcionamiento interno
- **Encapsulamiento**: ocultar propiedades y métodos internos
- **Polimorfismo**: objetos diferentes con métodos del mismo nombre pero diferente comportamiento
- **Herencia**: clases que heredan características de otras clases

**JavaScript** era basado en prototipos, pero desde **ES6/ECMAScript2015** incorpora clases similares a otros lenguajes.

---

## 2. OBJETOS

### 2.1. Creación de objetos

#### Object Literal (más común)

```javascript
const trabajador = {
    nombre: "Natalia",
    apellidos: "Escrivá Núñez",
    departamento: "informática",
    antigAnyos: 5,
    tutoria: true
};
```

**Sintaxis**:
- Propiedades entre llaves `{}`
- Separación `clave: valor`
- Propiedades separadas por comas

#### Constructor Integrado: new

```javascript
const trabajador1 = new Object();
trabajador1.nombre = "Natalia";
trabajador1.apellido = "Escrivá";
```

**Nota**: No es el método más usado. Es mejor usar object literal.

#### Object Constructor

```javascript
function Persona(nom, ape, anyos, prof) {
    this.nombre = nom;
    this.apellido = ape;
    this.edad = anyos;
    this.profesion = prof;
}

const ana = new Persona("Ana", "López", 45, "cirujana");
const pedro = new Persona("Pedro", "Ximénez", 36, "vinicultor");
```

Usa `this` para referenciar las propiedades del objeto actual.

---

### 2.2. Propiedades de un objeto

#### Acceder a valores

```javascript
// Sintaxis del punto
console.log(alumno1.nombre);

// Con corchetes
console.log(alumno1["ciclo"]);
```

#### Añadir, editar y eliminar propiedades

```javascript
// Añadir
alumno1.nia = "XXXX";

// Editar
alumno1.nia = 12345678;

// Borrar
delete alumno1.curso;
```

#### Destructuring de objetos

```javascript
const {nombre} = alumno1;
console.log(nombre); // "Natalia Escrivá"

// Múltiples propiedades
const {nombre, nia, ciclo} = alumno1;
```

---

### 2.3. Objetos dentro de objetos

```javascript
const producto = {
    articulo: "Ratón inalámbrico",
    precio: 35,
    disponible: true,
    informacion: {
        peso: "30 gramos",
        rgba: true,
        fabricacion: {
            pais: "China",
            anyo: 2022
        }
    }
};

console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);
```

---

### 2.4. Palabra reservada this

`this` hace referencia al objeto actual que ejecuta el código.

```javascript
const mueble = {
    prod: "mesa",
    tipo: "comedor",
    material: "madera",
    pvp: 350,
    stock: 105,
    mostrarInfo: function() {
        return `El mueble: ${this.prod}, es de la categoría ${this.tipo}. 
                Está hecho de ${this.material}, tiene un precio de ${this.pvp}€ 
                y hay ${this.stock} unidades en stock`;
    }
};
```

---

### 2.5. Métodos de los objetos

| Método | Función |
|--------|---------|
| `Object.freeze(objeto)` | Congela el objeto (no se puede modificar) |
| `Object.isFrozen(objeto)` | Indica si está congelado |
| `Object.seal(objeto)` | Permite editar pero no añadir/borrar propiedades |
| `Object.isSealed(objeto)` | Indica si está sellado |
| `Object.assign(obj1, obj2)` | Une objetos |
| `Object.keys(objeto)` | Devuelve array con las propiedades |
| `Object.values(objeto)` | Devuelve array con los valores |
| `Object.entries(objeto)` | Devuelve array con propiedades y valores |

**Spread Operator** (`...`):
```javascript
// Unir objetos
const objetosUnidos = {...modulo, ...perro};

// Copiar objeto
const citaClone = structuredClone(citaObj);
```

---

### 2.8. Recorrer un objeto

```javascript
// For...in
for (let propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`);
}

// For...of con Object.entries()
for (let [prop, valor] of Object.entries(alumno1)) {
    console.log(`${prop} --> ${valor}`);
}
```

---

### 2.9. Get y Set

#### Get
Crea una propiedad computada cuyo valor resulta de ejecutar una función.

```javascript
get dificultad() {
    return this._dificultad;
}
```

#### Set
Modifica valores de propiedades ejecutando una función.

```javascript
set dificultad(nuevaDificultad) {
    if (nuevaDificultad >= 1 && nuevaDificultad <= 3) {
        this._dificultad = nuevaDificultad;
    }
}
```

---

## 3. CLASES

### 3.1. Crear una clase

```javascript
class Person {
    constructor(nom, ape, anyos) {
        this.nombre = nom;
        this.apellido = ape;
        this.edad = anyos;
    }
}

const persona1 = new Person("Rodolfo", "Moriente", 49);
```

---

### 3.2. Añadir métodos

```javascript
class Person {
    constructor(nom, ape, anyos) {
        this.nombre = nom;
        this.apellido = ape;
        this.edad = anyos;
    }
    
    nomComp() {
        return `${this.nombre} ${this.apellido}`;
    }
    
    mayorEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }
}
```

---

### 3.3. Métodos y atributos estáticos

Se asocian a la **clase**, no a los objetos.

```javascript
class Rectangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static area(a, b) {
        return a * b;
    }
    
    static perimetro(a, b) {
        return (a * 2) + (b * 2);
    }
}

// Se invocan desde la clase
console.log(Rectangulo.area(2, 3)); // 6
console.log(Rectangulo.perimetro(2, 3)); // 10
```

**Propiedades estáticas**:
```javascript
class Rectangulo {
    static contadorRectangulos = 0;
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Rectangulo.contadorRectangulos++;
    }
}
```

---

### 3.4. Heredar una clase

Usa `extends` y `super`.

```javascript
class Alumn extends Person {
    constructor(nombre, apellido, edad, nia, ciclo, curso) {
        super(nombre, apellido, edad); // Llama al constructor padre
        this.nia = nia;
        this.cicle = ciclo;
        this.course = curso;
    }
    
    // Método propio
    infoInsti() {
        return `El alumno ${this.nomComp()}, con nia ${this.nia}
                está cursando ${this.cicle}, ${this.course} curso`;
    }
}
```

---

### 3.5. Propiedades y métodos privados

#### Con prefijo hash (#)

```javascript
class Cliente {
    #nombre;
    #saldo;
    
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.#saldo = saldo;
    }
    
    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.#saldo}`;
    }
    
    getSaldo() {
        return this.#saldo;
    }
    
    setSaldo(nuevoSaldo) {
        if (!isNaN(nuevoSaldo)) {
            this.#saldo = nuevoSaldo;
        }
    }
}
```

---

## 4. ARRAY OBJECT

Los arrays son objetos que almacenan elementos o conjuntos de datos.
- Son **dinámicos** (no es necesario prever el tamaño)
- Son **heterogéneos** (pueden almacenar diferentes tipos)

### 4.1. Declaración

```javascript
const alumnos = [];
const modulos = ["DWES", "DWEC", "DIW", "DAW", "EiE", "Inglés"];
const numeros = new Array(1, 2, 3, 4);
```

#### Acceder a elementos

```javascript
console.log(modulos[0]); // "DWES"
```

---

### 4.2. Destructuring de arrays

```javascript
const numbers = [10, 20, 30, 40, 50];
const [primero] = numbers;
console.log(primero); // 10

// Saltar posiciones
const [, , tercero] = numbers;
console.log(tercero); // 30

// Con Spread Operator
const [primer, segun, ...tercer] = numbers;
console.log(tercer); // [30, 40, 50]
```

---

### 4.3. Propiedad length

```javascript
console.log(dias.length); // 7
```

---

### 4.4. Métodos de array

#### Añadir/eliminar elementos

| Método | Descripción |
|--------|-------------|
| `push(elemento)` | Añade al final |
| `pop()` | Elimina el último |
| `unshift(elemento)` | Añade al inicio |
| `shift()` | Elimina el primero |
| `splice(inicio, numElem)` | Elimina elementos |
| `splice(inicio, numElem, elem1, ...)` | Elimina y añade |

**Spread Operator**:
```javascript
carrito = [...carrito, producto1];
```

---

#### Búsqueda de elementos

| Método | Descripción |
|--------|-------------|
| `includes(elemento)` | Devuelve true/false |
| `some(arrow function)` | true si alguno cumple condición |
| `every(arrow function)` | true si TODOS cumplen condición |
| `findIndex(arrow function)` | Devuelve índice |
| `indexOf(elemento)` | Primer índice del elemento |
| `lastIndexOf(elemento)` | Último índice del elemento |

```javascript
const existe = carroCompra.some(art => art.articulo === 'raton');
```

---

#### Obtener subarrays

| Método | Descripción |
|--------|-------------|
| `find(arrow function)` | Primer elemento que cumple condición |
| `filter(arrow function)` | Todos los elementos que cumplen condición |
| `slice(inicio, fin+1)` | Copia elementos del array |
| `reduce(arrow function, valorInicial)` | Acumula resultados |

```javascript
const aprobados = notas4.filter(x => x >= 5);

const suma = hastaCinco.reduce((acum, elemento) => acum + elemento, 0);
```

---

#### Convertir array en string

```javascript
console.log(trim1.join()); // separado por comas
console.log(trim1.join(", ")); // separador personalizado
console.log(trim1.toString()); // separado por comas
```

---

#### Unir arrays

```javascript
const planetas = planetas1.concat(planetas2);

// Con Spread Operator
const semanaRestOperator = [...diasSemana1, ...diasSemana2];
```

---

#### Modificar orden

```javascript
week.reverse(); // Invierte el orden

semana.sort(); // Ordena alfabéticamente

// Ordenar números
impares2.sort((a, b) => a - b); // Menor a mayor

// Ordenar strings con acentos
animales2.sort((a, b) => a.localeCompare(b, "es"));
```

---

### 4.5. Recorrer un array

```javascript
// For tradicional
for (let i = 0; i < notas2.length; i++) {
    console.log(notas2[i]);
}

// For...in (índices)
for (let indice in notas2) {
    console.log(notas2[indice]);
}

// For...of (valores)
for (let nota of notas2) {
    console.log(nota);
}

// forEach
notas2.forEach(function(elemento, indice) {
    console.log(`La nota ${indice} de "notas2" es: ${elemento}`);
});

// map (devuelve nuevo array)
const mitad = notas3.map(x => x / 2);
```

---

## 5. DATE OBJECT

### 5.1. Declaración

```javascript
let hoy = new Date();
const fecha = new Date("12-31-2023");
let fecha3 = new Date(2022, 11, 31, 23, 59);
```

---

### 5.2. Métodos get y set

```javascript
console.log(hoy.getFullYear()); // 2023
console.log(hoy.getMonth()); // 9 (inicia en 0)
console.log(hoy.getDate()); // 30 (día del mes)
console.log(hoy.getDay()); // 1 (día de la semana)

hoy.setDate(17);
hoy.setMonth(hoy.getMonth() + 2);
```

**Nota**: Los meses empiezan en 0.

---

### 5.3. Formatear fechas

```javascript
hoy.toString(); // Formato texto JS
hoy.toDateString(); // Solo fecha
hoy.toLocaleString('es'); // Formato local español
hoy.toLocaleDateString(); // Solo fecha local
```

---

## 6. MATH OBJECT

Math es un objeto global (no necesita constructor).

### 6.1. Constantes

```javascript
Math.PI
Math.E
Math.SQRT2
```

---

### 6.2. Métodos

| Método | Descripción |
|--------|-------------|
| `Math.random()` | Número aleatorio entre 0 y 1 |
| `Math.max(a, b, c)` | Número mayor |
| `Math.min(a, b, c)` | Número menor |
| `Math.round(a)` | Redondea |
| `Math.floor(a)` | Redondea hacia abajo |
| `Math.ceil(a)` | Redondea hacia arriba |
| `Math.trunc(a)` | Trunca el número |
| `Math.pow(b, e)` | Potencia |
| `Math.sqrt(a)` | Raíz cuadrada |
| `Math.abs(a)` | Valor absoluto |

```javascript
// Número aleatorio entre 0 y 10
console.log(Math.random() * 10);

// Entre 5 y 10 (incluye 10)
console.log(Math.random() * (10 - 5 + 1) + 5);
```

---

## 7. SET OBJECT

Los Sets son estructuras que **NO admiten valores duplicados**.

### 7.1. Declaración

```javascript
let lista = new Set();
const miSet2 = new Set([2, 4, 6, 8, 2, 4, 6]);
console.log(miSet2); // Set(4) {2, 4, 6, 8}
```

---

### 7.2. Métodos

```javascript
// Añadir
prueba.add(Math.random());
prueba.add(8);

// Verificar
console.log(letras.has("Natalia")); // true

// Eliminar
lista.delete(8);

// Vaciar
lista.clear();

// Tamaño
console.log(pares.size); // 3
```

---

### 7.4. Convertir set en array

```javascript
let numArray = [...num];
```

---

### 7.5. Recorrer un set

```javascript
for (let i of num) {
    console.log(i);
}

num.forEach(i => console.log(i));
```

---

## 8. MAP OBJECT

Los mapas permiten estructuras **clave-valor**.
- Las claves no se repiten
- Los valores sí pueden repetirse
- Es heterogéneo

### 8.1. Declaración

```javascript
let andalucia = new Map();
```

---

### 8.2. Métodos

```javascript
// Añadir
andalucia.set(4, "Almeria");
andalucia.set(11, "Cádiz");

// Verificar
console.log(notas.has("alta")); // true

// Obtener valor
console.log(notas.get("baja")); // 3.5
console.log(andalucia.get(18)); // "Jaén"

// Eliminar
comunVal.delete(4);

// Claves y valores
let claves = calificaciones.keys();
let valores = calificaciones.values();

// Tamaño
console.log(notas.size); // 5
```

---

### 8.4. Convertir map en array

```javascript
let calificacionesArray = [...calificaciones];
```

---

### 8.5. Recorrer un map

```javascript
for (let i of notas) {
    console.log(i);
}

for (let [clave, valor] of calificaciones) {
    console.log(`Clave: ${clave} <--> Valor ${valor}`);
}
```

---

## 9. ANEXO: PROTOTYPE

Hasta ES6, JavaScript usaba prototipos para implementar herencia.

### 9.1. Crear un prototype

```javascript
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Añadir método con prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo >= 50000) {
        tipo = "Platinum";
    } else if (this.saldo >= 10000) {
        tipo = "Gold";
    } else {
        tipo = "Normal";
    }
    return tipo;
}

const juan = new Cliente("Juan Montero Salas", 10000);
console.log(juan.tipoCliente()); // "Gold"
```

---

### 9.2. Heredar un prototype: call

```javascript
function Empresa(nombre, saldo, categoria) {
    Cliente.call(this, nombre, saldo);
    this.categoria = categoria;
}

// Heredar métodos
Empresa.prototype = Object.create(Cliente.prototype);

const empresa1 = new Empresa("ACADEMIA OPOS", 15000, "docencia");
console.log(empresa1.tipoCliente()); // "Gold"
```

---

## 10. ANEXO: REGEXP OBJECT

Las expresiones regulares permiten establecer patrones para validar textos.

### 10.1. Declaración

```javascript
const expr1 = /javascript/g;
const expr2 = new RegExp('javascript', 'g');
```

**Flags/Modificadores**:
- `i` → case-insensitive (no distingue mayúsculas/minúsculas)
- `g` → global (busca todas las coincidencias)
- `m` → multilínea

---

### 10.2. Métodos de RegExp

```javascript
// search() - devuelve posición
console.log(string.search(regExp1)); // 20

// replace() - reemplaza coincidencias
console.log(string.replace(regExp1, "JS"));

// test() - devuelve booleano
console.log(regExp1.test(string)); // true

// exec() - devuelve objeto
console.log(regExp1.exec(string));

// match() - devuelve array
console.log(string.match(regExp1));
```

---

### 10.3. Elementos de las RegExp

#### Tipos de caracteres

- `.` → cualquier carácter
- `\w` → letra, número o guión bajo
- `\W` → NO letra, número o guión bajo
- `\s` → espacios
- `\S` → NO espacios
- `\d` → números
- `\D` → NO números

#### Cuantificadores

- `{x,y}` → entre x e y repeticiones
- `?` → 0 ó 1 vez
- `*` → 0 ó más veces
- `+` → 1 ó más veces

#### Conjunto de caracteres

- `[aeiou]` → vocales minúsculas
- `[A-Z]` → mayúsculas
- `[a-z]` → minúsculas
- `[0-9]` → números
- `[^aeiou]` → todo menos vocales

#### Limitadores

- `^` → inicio del string
- `$` → final del string
- `\b` → límite de palabra
- `\B` → NO límite de palabra

#### Alternación

- `opcion1|opcion2` → una u otra opción
- `x(?=y)` → lookahead positivo
- `x(?!y)` → lookahead negativo
- `(?<=y)x` → lookbehind positivo
- `(?<!y)x` → lookbehind negativo

---

## Resumen de diferencias

| Característica | Array | Set | Map |
|----------------|-------|-----|-----|
| Permite duplicados | Sí | No | Claves no, valores sí |
| Acceso | Por índice | Iteración | Por clave |
| Orden | Mantiene orden | Mantiene orden | Mantiene orden |
| Uso típico | Listas ordenadas | Valores únicos | Pares clave-valor |

---

## Notas finales

- **Usar const para objetos y arrays**: aunque se puedan modificar sus propiedades/elementos, la referencia no cambia
- **Preferir clases sobre prototypes**: desde ES6 es la forma estándar
- **Arrow functions**: no usar en métodos de objeto que necesiten `this`
- **Métodos encadenables**: muchos métodos de array devuelven un nuevo array, permitiendo encadenar operaciones

```javascript
const resultado = numeros
    .filter(x => x > 5)
    .map(x => x * 2)
    .reduce((acum, x) => acum + x, 0);
```

# UDAD 4: MANEJO DEL BOM/DOM

**Desarrollo Web Entorno Cliente - 2º DAW CFGS**  
**IES Serra Perenxisa - Curso 2024-2025**  
**Natalia Escrivá Núñez**

---

## Contenido

1. [Objetos del Navegador](#1-objetos-del-navegador)
2. [Objeto Window](#2-objeto-window)
   - 2.1. Propiedades básicas del objeto window
   - 2.2. Métodos del objeto window
3. [DOM: Objeto Document](#3-dom-objeto-document)
   - 3.1. Selección de los elementos del DOM
   - 3.2. Modificar textos o imágenes
   - 3.3. Modificar CSS con JavaScript
   - 3.4. Traversing the DOM
   - 3.5. Eliminar elementos del DOM
   - 3.6. Crear elementos en el DOM
4. [Anexo: BOM](#4-anexo-bom)
   - 4.1. Objeto Navigator
   - 4.2. Objeto Screen
   - 4.3. Objeto History
   - 4.4. Objeto Location

---

## 1. OBJETOS DEL NAVEGADOR

Hasta ahora hemos trabajado con objetos nativos (y datos primitivos).

Existen otros objetos que son propios del navegador.

**Todos los objetos derivan del objeto Window.**

A partir de las versiones 3.0 de los navegadores Internet Explorer y Netscape Navigator, se introdujo el concepto de **Browser Object Model o BOM**.

Si bien el BOM NO forma parte del lenguaje oficial del lenguaje JavaScript, lo cierto es que los distintos navegadores han igualado la forma de trabajar con estos objetos.

Del objeto Window dependen varios objetos relacionados entre sí:

```
window
  ├── document (DOM)
  ├── navigator (BOM)
  ├── screen (BOM)
  ├── location (BOM)
  ├── frames (BOM)
  └── history (BOM)
```

En el esquema anterior, los objetos mostrados con varios recuadros superpuestos indica que son **arrays**. El resto de los objetos, representados con un único rectángulo, indica que son **objetos simples**.

---

## 2. OBJETO WINDOW

Representa una ventana abierta del navegador.

Mediante este objeto, podremos mover, redimensionar y manipular la ventana actual del navegador. Incluso es posible abrir y cerrar nuevas ventanas de navegador (window.alert, window.prompt o window.confirm).

### 2.1. Propiedades básicas del objeto window

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| `window.name` | Permite conocer el nombre de la ventana |
| `window.outerWidth`<br>`window.outerHeight` | Permiten conocer el tamaño exterior de la ventana CON toolbar y scrollbar |
| `window.innerWidth`<br>`window.innerHeight` | Permiten conocer el tamaño interior de la ventana SIN toolbar y scrollbar: tamaño real disponible en el área de contenido de la ventana teniendo en cuenta el tamaño real |
| `window.scrollX`<br>`window.scrollY` | Permiten conocer el scroll en píxels en un momento determinado, tanto el horizontal como el vertical |
| `window.screenX`<br>`window.screenLeft` | Permiten conocer la distancia de la ventana al borde izquierdo de la pantalla: número de píxels horizontal |
| `window.screenY`<br>`window.screenTop` | Permiten conocer la distancia de la ventana al borde superior de la pantalla: número de píxels vertical |
| `window.closed` | Devuelve un booleano indicando si la ventana ha sido cerrada o no |

**Ejemplo:**

```javascript
window.name = "BOM: OBJETO WINDOW";
let texto = "";
// Nombre de la ventana
texto += `<br/>Nombre: ${window.name}`;
// Tamaño de la ventana exterior (con toolbar y scrollbar)
texto += `<br/>Ancho externo: ${window.outerWidth}`;
texto += `<br/>Alto externo: ${window.outerHeight}`;
// Tamaño de la ventana interior (sin toolbar ni scrollbar)
texto += `<br/>Ancho interno: ${window.innerWidth}`;
texto += `<br/>Alto interno: ${window.innerHeight}`;
// Scroll horizontal y vertical
texto += `<br/>Scroll horizontal: ${window.pageXOffset}`;
texto += `<br/>Scroll vertical: ${window.pageYOffset}`;
// Distancia desde la izquierda y desde arriba
texto += `<br/>Distancia desde la izquierda: ${window.screenX}`;
texto += `<br/>Distancia desde arriba: ${window.screenY}`;

document.write(texto);
```

### 2.2. Métodos del objeto window

Aquí encontramos distintos tipos de métodos que nos ayudarán a trabajar con nuestras ventanas.

#### 2.2.1. MÉTODOS GENERALES

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `open()` | Permite abrir una ventana nueva. |
| `close()` | Permite cerrar la ventana concreta. |
| `resizeBy(<pix>,<pix>)` | Permite redimensionar una ventana el nº de píxeles indicados. La ventana se "estirará" desde la esquina inferior derecha. |
| `resizeTo(<pix>,<pix>)` | Permite redimensionar la ventana al nº de píxeles indicados respecto a su posición actual. |
| `moveBy(<pix>,<pix>)` | Permite mover una ventana el número de píxeles indicados respecto a su posición actual. |
| `moveTo(<pix>,<pix>)` | Permite mover una ventana a la posición concreta según los píxeles indicados. |
| `focus()` | Permite dar el foco a la ventana |
| `print()` | Permite imprimir el contenido de la ventana concreta |
| `stop()` | Permite parar la carga de la página concreta. |

#### 2.2.2. MÉTODOS DE CUADROS DE TEXTO

En este apartado entran los tres métodos que ya hemos ido utilizando como herramientas para interactuar con el usuario.

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `alert()` | Muestra un mensaje al usuario, sin recoger valores |
| `prompt()` | Muestra un mensaje al usuario y, además, permite que el usuario introduzca un valor en su interior (String). Además, podemos incluir como segundo parámetro un texto por defecto. |
| `confirm()` | Muestra un mensaje al usuario y dos botones. Si pulsa "Aceptar", devuelve true y si pulsa "Cancelar" o cierra la ventana, devuelve false. |

#### 2.2.3. MÉTODOS RELACIONADOS CON TEMPORIZADORES

El manejo del tiempo es fundamental en la programación de videojuegos, creación de animaciones, publicidad y otras áreas.

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `setTimeout(<función>,ms)` | Ejecuta la función pasado el tiempo indicado en el parámetro. |
| `clearTimeout(<variable>)` | Si el método setTimeout ha sido asignada a una variable, la podremos parar antes de su ejecución. |
| `setInterval(<función>,ms)` | Repite la función pasada como argumento cada intervalo de tiempo pasado en milisegundos. |
| `clearInterval(<variable>)` | Cancela la repetición de la función. |

**Ejemplo setTimeout:**

```html
<button onclick="saludar()">Saludo Ventana</button>
<button onclick="clearTimeout(saludo)"> Cancelar Saludo </button>
```

```javascript
function saludar(){
    miVentana.document.write("<h2>Hola</h2>");
}
```

**Ejemplo setInterval:**

```html
<button onclick="saludoRepe = setInterval(saludar2,3000)">Saludo repe Ventana</button>
<button onclick="clearInterval(saludoRepe)"> Cancelar Saludo </button>
```

```javascript
function saludar2(){
    miVentana.document.write("<h3>Hola</h3>")
}
```

---

## 3. DOM: OBJETO DOCUMENT

**DOM (Document Object Model)**, es el objeto generado por el navegador en el momento en que el documento HTML de una web se carga.

Ese objeto (que desciende del objeto Window), será el que usaremos como base para manipular cualquier página web.

El DOM define la **página web como una estructura organizada que forma un árbol de recorrido**: la raíz sería el HTML y sus elementos estarían distribuidos en **HTML nodes** ("ramas" o hijos). El primer nodo, padre de todos los demás, será **node `<html>`**, **root node** o **root element**.

### Tipos de nodos

Existen dos tipos de nodos:

- **Element Nodes**: Se refiere a los `<head>`, `<title>`, `<body>`, `<header>`, `<nav>`, `<div>`, `<p>`, `<button>`, `<a>`, etc.

- **Text Nodes**: Se refiere al contenido de algunos element nodos (p, h2, button...). Aquí incluimos los saltos de línea. Distinguiremos con los saltos de línea entre:
  - Los encerrados entre etiquetas (`<br/>`)
  - Los propios de la creación de un documento HTML

Los **Element Nodes** pueden tener **atributos** (nos referimos a id, class, src, href...)

```
Document
    │
    └── Root element: <html>
            ├── Element: <head>
            │       ├── Element: <title>
            │       │       └── Text: "My title"
            │       └── Attribute: "href"
            │
            └── Element: <body>
                    ├── Element: <a>
                    │       └── Text: "My link"
                    └── Element: <h1>
                            └── Text: "My header"
```

Podremos, partiendo del HTML, **crear, modificar, borrar elementos del document** y también **modificar sus atributos**, y todo esto, de forma dinámica.

Para interactuar con la página, tenemos que hacerlo a través de los nodos, obteniendo una referencia a ellos. De esa forma podremos modificar (elementos o atributos) y borrarlos.

También podremos crear y borrar elementos, a través del **DOM Scripting**.

La referencia a document sería `window.document` pero podremos hacer **directamente referencia al objeto document y sus elementos**.

### 3.1. Selección de los elementos del DOM

Tenemos a nuestro alcance varios métodos para seleccionar elementos del DOM.

Debemos tener en cuenta que los elementos del DOM son objetos.

Sabemos que para seleccionar elementos haremos referencia siempre al objeto `document`.

Los resultados de la selección de elementos se presentan como:

- **HTMLCollection**: es como un array de elementos HTML que corresponden a esa selección
- **NodeList**: es como un array de nodos (incluye saltos de línea...) que corresponden a esa selección.

#### 3.1.1. SELECCIÓN POR CLASE

Seleccionaremos elementos del documento que tengan asignada una clase determinada de CSS.

El selector que utilizaremos es `getElementsByClassName()` que recibe como argumento un string con el valor que buscamos.

Si la clase NO existe, devuelve un HTMLCollection vacío, NO dará error.

NO es el selector más actual.

**Ejemplo:**

```javascript
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
```

Resultado: `HTMLCollection(4) [header.header.contenedor, div.contenido-hero.contenedor, main.contenido.contenedor, div.contenedor]`

#### 3.1.2. SELECCIÓN POR ETIQUETA

Seleccionaremos elementos del documento que tengan una etiqueta HTML concreta.

El selector que utilizaremos es `getElementsByTagName()` que recibe como argumento un string con el valor que buscamos.

Si la clase NO existe, devuelve un HTMLCollection vacío, NO dará error.

NO es el selector más actual.

**Ejemplo:**

```javascript
const parrafosTodos = document.getElementsByTagName('p');
console.log(parrafosTodos);
```

Resultado: `HTMLCollection(37) [p.categoria.concierto, p.titulo, p.precio, ...]`

#### 3.1.3. SELECCIÓN POR IDENTIFICADOR

Seleccionaremos UN NODO del documento a través del valor del atributo id.

El selector que utilizaremos es `getElementById()` que recibe como argumento un string con el valor que buscamos.

Nos devolverá el primer elemento que coincida con ese id. Tendremos en cuenta que las buenas prácticas hacen que nunca se repitan los ids en un HTML.

Si el id NO existe, devuelve null, NO dará error.

NO es el selector más actual.

**Ejemplo:**

```javascript
const formulario = document.getElementById('formulario');
console.log(formulario);
```

Resultado: `<form action="/buscador" method="POST" class="formulario formulario-buscar" id="formulario">...</form>`

#### 3.1.4. SELECCIÓN POR SELECTORES CSS: UN ELEMENTO

Los tres selectores anteriores han sido los utilizados hasta el momento, pero ya NO es la forma más actual de seleccionar elementos, aunque debemos conocerlas ya que veremos ese código en muchos proyectos.

El selector que utilizaremos en este caso es `querySelector()` que recibe como argumento un string con el **valor de cualquier selector válido para CSS**, de hecho, su sintaxis es muy parecida a la de las hojas de estilos de CSS.

Nos devolverá el primer elemento que coincida con ese selector.

Si el selector NO existe, NO devuelve nada, sin dar error.

Usaremos:

- El **punto** para hacer referencia a las clases
- El **prefijo hash** para hacer referencia a los identificadores
- Su **nombre** para hacer referencia a las etiquetas

**Ejemplo 1 - Varios elementos: solo devuelve el primero:**

```javascript
const card = document.querySelector('.card');
console.log(card);
```

**Ejemplo 2 - Seleccionamos un elemento hijo:**

```javascript
const premium = document.querySelector('section.hacer .premium');
console.log(premium);

const premiumInfo = document.querySelector('.premium .info');
console.log(premiumInfo);

const enlaceInfo = document.querySelector('.premium .info .btn-mi-viaje');
console.log(enlaceInfo);
```

**Ejemplo 3 - Seleccionamos elementos concretos de entre los que tienen el mismo nombre de clase:**

```javascript
// Primer card de la sección hospedaje
const primerCard = document.querySelector('section.hospedaje .card:first-of-type');
console.log(primerCard);

// Segundo card
const segunCard = document.querySelector('section.hospedaje div.card:nth-child(2)');
console.log(segunCard);

// Último card
const tercerCard = document.querySelector('section.hospedaje div.card:last-of-type');
console.log(tercerCard);
```

**Ejemplo 4 - Seleccionamos un elemento a través de su id:**

```javascript
const formularioQuery = document.querySelector('#formulario');
console.log(formularioQuery);

// Podemos ir "ajustando" la selección
const formularioQuery = document.querySelector('.contenido-hero #formulario');
console.log(formularioQuery);
```

**Ejemplo 5 - Seleccionamos un elemento según su etiqueta HTML y sus hijos:**

```javascript
const navegacion = document.querySelector('nav');
console.log(navegacion);

// Primer y último hijo
const primNav = navegacion.firstElementChild;
console.log(primNav);

const ultNav = navegacion.lastElementChild;
console.log(ultNav);
```

#### 3.1.5. SELECCIÓN POR SELECTORES CSS: VARIOS ELEMENTOS

A través de este selector podremos seleccionar TODOS los elementos del DOM que coincidan con el/los selector/es de CSS.

El selector que usaremos será `querySelectorAll()`

Nos devolverá un **NodeList**, una lista de nodos que coinciden con el argumento del método selector.

Si el elemento NO existe, devolverá un NodeList vacío, NO dará error.

También en este caso podemos especificar los selectores indicando padres e hijos.

**Ejemplo:**

```javascript
const cardTodos = document.querySelectorAll('.card');
console.log(cardTodos);
```

Resultado: `NodeList(15) [div.card, div.card, div.card, ...]`

Este resultado (NodeList), lo podremos tratar como un array:

```javascript
for (let card of cardTodos){
    console.log(card);
}
```

### 3.2. Modificar textos o imágenes

Una vez seleccionados los elementos del DOM, vamos a ver cómo modificarlos a través de JavaScript.

#### 3.2.1. MODIFICAR TEXTOS

Vamos a modificar el texto del encabezado: "Encuentra alojamiento para tus próximas vacaciones".

Podemos hacerlo de tres formas:

- **innerText** → recoge el texto plano, pero NO literal. Si en CSS la propiedad visibility: hidden, NO lo encuentra.

- **textContent** → recoge el texto plano literal. Si en CSS la propiedad visibility: hidden, SÍ lo encuentra.

- **innerHTML** → recoge el HTML

**Primero seleccionamos el elemento a modificar:**

```javascript
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
```

**Vamos a ver cómo se recoge el texto:**

```javascript
console.log(encabezado.innerText);    // Encuentra alojamiento para tus próximas vacaciones
console.log(encabezado.textContent);  // Encuentra  alojamiento  para tus próximas vacaciones
console.log(encabezado.innerHTML);    // Encuentra <span> alojamiento </span> para tus próximas vacaciones
```

**Vamos a modificar el texto:**

**Ejemplo 1 - innerText:**

```javascript
document.querySelector('h1').innerText = "Prepara tus vacaciones con innerText";
```

**Ejemplo 2 - textContent:**

```javascript
encabezado.textContent = "Busca un HOSPEDAJE con textContent";
```

**Ejemplo 3 - innerHTML:**

```javascript
encabezado.innerHTML = "<h1>Encuentra <strong> alojamiento </strong> con innerHTML</h1>";
```

#### 3.2.2. MODIFICAR IMÁGENES

Al igual que los textos, también vamos a poder modificar imágenes.

Vamos a acceder a la primera imagen del proyecto de muestra:

```javascript
const imagen = document.querySelector('.card img');
console.log(imagen);
```

Modificamos la propiedad `src` del elemento:

```javascript
imagen.src = 'img/hacer2.jpg';
```

### 3.3. Modificar CSS con JavaScript

Podemos, a través de JavaScript agregar o quitar clases, modificar el css o los estilos de un elemento.

Como ejemplo, en los formularios cuando dejamos algún campo vacío, y queda resaltado en rojo.

#### 3.3.1. PROPIEDAD STYLE

Debemos saber que, cuando las propiedades de CSS son compuestas (separadas por un guión), en JavaScript se elimina el guión y seguimos la norma de Lower Camel Case:

- `background-color` → `backgroundColor`
- `justify-content` → `justifyContent`

Para modificar estilos utilizaremos la palabra reservada `style`, seguido de un punto y el estilo a modificar.

**Ejemplo - Cambiamos varios atributos de estilo de un elemento:**

Vamos a cambiar el color del `<h1>` de nuestro proyecto de muestra. También modificamos el tipo de letra y lo pondremos en mayúsculas.

```javascript
const encabezadoCSS = document.querySelector('h1');
encabezadoCSS.style.backgroundColor = "red";
encabezadoCSS.style.fontFamily = "Georgia";
encabezadoCSS.style.textTransform = "upperCase";
```

#### 3.3.2. GETATTRIBUTE() / HASATTRIBUTE()

Estos métodos nos ayudan a averiguar detalles sobre los atributos de los elementos:

- `getAttribute()` obtiene el valor de un atributo concreto
- `hasAttribute()` nos devolverá true si el elemento tiene el atributo pasado como argumento.

**Ejemplo - Seleccionamos los elementos `<h2>` y solo mostramos aquellos que tienen el atributo 'class':**

```javascript
const h2Todos = document.querySelectorAll('h2');
console.log(h2Todos);

h2Todos.forEach(h2 => {
    if (h2.hasAttribute('class')){
        console.log(`El elemento: "${h2.innerHTML}",
            tiene la clase: ${h2.getAttribute('class')}`);
    }
});
```

Resultado: `El elemento: "Presentamos Miviaje.com Plus", tiene la clase: mi-viaje-plus`

#### 3.3.3. REMOVEATTRIBUTE()

Con el método `removeAttribute()` podremos **eliminar un atributo o propiedad**.

**Ejemplo - Eliminamos varios estilos de un elemento:**

Si recordamos los estilos que habíamos dado al encabezado...

```javascript
const encabezadoCSS = document.querySelector('h1');
encabezadoCSS.style.backgroundColor = "red";
encabezadoCSS.style.fontFamily = "Georgia";
encabezadoCSS.style.textTransform = "upperCase";
```

Eliminamos la propiedad "style":

```javascript
encabezadoCSS.removeAttribute("style");
```

#### 3.3.4. CREAR Y BORRAR CLASES

El método anterior está bien conocerlo, pero deberemos usarlo en contadas ocasiones.

Esto es porque debemos respetar la independencia de código, y de los estilos se encargan las hojas de estilos, es decir, los ficheros CSS.

Una buena opción es modificar las clases. De esa forma, los estilos se los estaremos dando desde la propia hoja de estilos y mantendremos la coherencia (asociaremos estilos a clases y no a elementos).

Si seleccionamos un elemento de DOM que tiene asignada una clase, podemos ver que tiene dos propiedades:

- **classList**: devuelve TODAS las clases como si fuese un array
- **className**: devuelve el nombre de la/s clase/s (como string)

```javascript
const main = document.querySelector('main')
```

Resultado:
- `main.classList` → `DOMTokenList(2) ['contenido', 'contenedor', value: 'contenido contenedor']`
- `main.className` → `'contenido contenedor'`

**En el caso de classList, detallamos los distintos métodos que podemos usar:**

✓ **add(`<"nomClase1">`,…,[`"nomClasen"`])**: Permite añadir una clase al elemento. Se pueden añadir varias separadas por comas.

✓ **remove(`<"nomClase1">`,…,[`"nomClasen"`])**: Igual que el anterior pero eliminando las clases.

✓ **toggle(`<"Clase">`,[forzar])**: Con solo un parámetro, se considera la clase. Si el elemento no tiene una clase asignada, se la asigna y, si ya la tiene, se la quita. El segundo parámetro recibe un true que añadirá la clase tanto si el elemento la tiene como si no. Por el contrario, si es false, quita la clase del elemento.

Este método consigue hacer lo que hacen los dos anteriores.

✓ **contains(`<"Clase">`)**: Devuelve true si el elemento tiene asignada la clase del parámetro.

✓ **replace (`<"vieja">`,`<"nueva">`)**: Permite cambiar una clase por otra en el elemento.

**Ejemplo - Añadir y borrar clases:**

Seleccionamos el primer elemento cuya clase es "card" para añadir y borrar posteriormente clases.

```javascript
const card1 = document.querySelector('.card');
console.log(card1.classList);
console.log(card1.className);
```

Añadimos dos clases:

```javascript
card1.classList.add('nueva-clase', 'segunda-clase');
console.log(card1.classList);
console.log(card1.className);
```

Borramos ahora la clase "card":

```javascript
card1.classList.remove('card');
console.log(card1.classList);
console.log(card1.className);
```

#### 3.3.5. CLASSLIST.TOGGLE()

Este método de classList permite añadir al elemento el atributo que se indica si no lo tiene, o lo quitará si ya lo tiene.

La primera vez que se usa, lo añade, la siguiente, la elimina, y repite así el proceso.

**Ejemplo - Vamos a modificar la clase a los elementos de menú de navegación superior:**

Les vamos a añadir a todas los elementos la clase ".fondoAmarillo":

```javascript
const hrefTodas = document.querySelectorAll('.navegacion a');

hrefTodas.forEach(element => {
    element.classList.toggle("fondoAmarillo");
});
```

Ahora vamos a quitarle esa clase al segundo y cuarto elemento:

```javascript
for(let i =1; i< hrefTodas.length; i++){
    if (i === 1 || i === 3){
        hrefTodas[i].classList.toggle("fondoAmarillo");
    }
}
```

### 3.4. Traversing the DOM

Sabemos que TODOS los elementos del DOM están considerados como nodos y que están conectados, unos dependen de otros.

Hemos visto cómo seleccionar elementos, cómo modificar su aspecto o sus atributos.

Los nodos tienen varias propiedades, entre ellas, destacamos:

- **nodeType**: Nos indica el tipo de nodo:
  - De tipo elemento (1) → las etiquetas HTML
  - De tipo texto (3)
  - De tipo comentario (8)

- **nodeName**: Nos da el tipo de nodo HTML (etiqueta)

Vamos a ver cómo podemos "navegar" a través del DOM o recorrerlo, como si se tratase de un mapa.

#### 3.4.1. DE PADRES A HIJOS

Contamos con dos propiedades que nos van a servir para acceder o trabajar con los nodos hijos de un elemento.

Utilizaremos **childNodes** y **children**

**Ejemplo 1 - Acceder a nodos "hijos" de un elemento (nav):**

```javascript
const navDOM = document.querySelector('nav');
console.log(navDOM);
```

Si queremos acceder a los hijos podemos usar `childNodes`:

```javascript
console.log(navDOM.childNodes);
```

Nos devuelve un NodeList con 9 elementos pero en nuestro HTML SOLO hay 4 links.

Veamos el nombre y tipo del primer elemento del NodeList:

```javascript
console.log(navDOM.childNodes[0].nodeType);  // 3
console.log(navDOM.childNodes[0].nodeName);  // #text
```

Esto es porque cada salto de línea se considera un elemento de texto. Para que no aparecieran todos, en el HTML tendríamos que poner los links seguidos unos de otros.

Esto nos desordenaría el código HTML, por lo que podemos utilizar **children**, que nos devolverá los elementos HTML hijos.

```javascript
console.log(navDOM.children);
```

Nos va a devolver un HTMLCollection con los 4 elementos reales:

```javascript
console.log(navDOM.children[0].nodeType);  // 1
console.log(navDOM.children[0].nodeName);  // A
```

**Ejemplo 2 - Acceder a nodos "hijos" de un elemento (card):**

```javascript
const cardBici = document.querySelectorAll('.card')[3];
console.log(cardBici);
```

Vamos a ver sus hijos:

```javascript
console.log(cardBici.children);
```

Resultado: `HTMLCollection(2) [img, div.info]`

Veamos los hijos de su hijo "div":

```javascript
console.log(cardBici.children[1].children);
```

Resultado: `HTMLCollection(3) [p.categoria.paseo, p.titulo, p.precio]`

Vamos a navegar hasta el título ("Paseo en las Montañas") y de paso, lo modificamos:

```javascript
cardBici.children[1].children[1].textContent = "Traversing the DOM";
```

Modificamos ahora la foto también recorriendo el DOM:

```javascript
cardBici.children[0].src = 'img/hacer3.jpg';
```

#### 3.4.2. DE HIJOS A PADRES

Contamos con dos propiedades que nos van a servir para acceder o trabajar con el nodo padre de un elemento.

Utilizaremos **parentNode** y **parentElement**

**Ejemplo 1 - Acceder al nodo "padre" de un nodo:**

Seguimos con nuestro proyecto de muestra y vamos a acceder al padre del primer card.

```javascript
const padreCardMusica = document.querySelector('.card').parentElement;
console.log(padreCardMusica);
```

Efectivamente, hemos llegado a su nodo padre: `<div class="contenedor-cards">`

Vamos a ver el padre del padre:

```javascript
console.log(document.querySelector('.card').parentElement.parentElement);
```

Si seguimos seleccionando el elemento padre del elemento padre, llegamos hasta el HTML, el origen:

```
<html lang="en">
    <head>...</head>
    <body>...</body>
</html>
```

#### 3.4.3. ENTRE HERMANOS

También vamos a poder seleccionar, trabajar y navegar a través de los nodos del mismo rango, es decir, los hermanos.

Para ello usaremos **nextElementSibling** y **previousElementSibling**

**Ejemplo 1 - Acceder al siguiente hermano:**

Retomamos el ejemplo del primer card y llegamos hasta su siguiente hermano:

```javascript
const hermano1 = document.querySelector('.card').nextElementSibling;
console.log(hermano1);
```

**Ejemplo 2 - Acceder al hermano anterior:**

Vamos a seleccionar el cuarto card de la primera sección.

```javascript
const hermano = document.querySelector('section.hacer div.card:nth-child(4)');
console.log(hermano);
```

Seleccionamos ahora el hermano anterior:

```javascript
const hermanoAnt = hermano.previousElementSibling;
console.log(hermanoAnt);
```

### 3.5. Eliminar elementos del DOM

A veces vamos a tener que eliminar elementos de la página como una foto, un "like" equivocado, un artículo de un carrito...

Podemos eliminar elementos del DOM con dos métodos:

- Eliminando directamente el elemento.
- Eliminando el elemento a través de la referencia del padre.

#### 3.5.1. ELIMINAR EL ELEMENTO DIRECTAMENTE

Vamos a eliminar el primer elemento de los enlaces de navegación.

Primero lo seleccionamos:

```javascript
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
```

Eliminamos el elemento:

```javascript
primerEnlace.remove();
```

#### 3.5.2. ELIMINAR EL ELEMENTO A TRAVÉS DE SU PADRE

Podemos eliminar un elemento a través de la referencia de su padre.

Seguimos con el menú de navegación.

Seleccionamos la navegación:

```javascript
const navegacion2 = document.querySelector('.navegacion');
console.log(navegacion2.children);
```

Borramos el último enlace ("Iniciar Sesión"):

```javascript
navegacion2.removeChild(navegacion2.children[2]);
```

### 3.6. Crear elementos en el DOM

En ocasiones nos podemos encontrar con que tenemos que generar HTML desde JS. Por ejemplo, si hacemos un comentario, escribiremos en una cajita de texto y, al clicar en el botón se unirá al resto de comentarios que, a su vez podrán ser comentados.

Esto es solo un ejemplo.

Podremos utilizar distintos métodos.

#### 3.6.1. CREAR UN ELEMENTO AL FINAL DEL ELEMENTO

Este método colocará el nuevo elemento al final de los elementos hijos.

Utilizaremos el método **appendChild()**.

**Ejemplo - Creamos un enlace y lo insertamos al final del menú de navegación superior:**

Creamos el enlace usando el método `createElement()`. Como argumento le pasaremos el nombre de etiqueta que vamos a crear. Después le añadimos el texto y su link.

```javascript
const newEnlace = document.createElement('a');
newEnlace.textContent = 'Nuevo Enlace';
newEnlace.href = '#';
console.log(newEnlace);
```

Se lo añadimos a la navegación superior de la página.

Primero seleccionamos el elemento al que se lo queremos añadir.

```javascript
const navegacion3 = document.querySelector('.navegacion');
console.log(navegacion3);
```

Ahora se lo añadimos:

```javascript
navegacion3.appendChild(newEnlace);
console.log(navegacion3);
```

#### 3.6.2. CREAR ELEMENTO EN UBICACIÓN CONCRETA

Este método nos permite controlar más la ubicación del elemento que incorporamos al DOM.

El método que usaremos será **insertBefore()**, que recibe dos argumentos:

- El elemento que queremos insertar
- Donde queremos insertarlo (antes de qué elemento queremos insertarlo).

**Ejemplo 1 - Modificamos la posición de un enlace del menú de navegación superior:**

Partimos del mismo elemento nav. Vemos sus elementos hijos:

```javascript
console.log(navegacion3.children);
```

Decidimos cambiar de sitio el nuevo enlace en la segunda posición:

```javascript
navegacion3.insertBefore(newEnlace, navegacion3.children[1]);
console.log(navegacion3);
```

**Ejemplo 2 - Incluimos un enlace en una ubicación concreta en el menú de navegación:**

Creamos otro enlace:

```javascript
const otroEnlace = document.createElement('a');
otroEnlace.textContent = 'Otro';
otroEnlace.href = '#';
navegacion3.insertBefore(otroEnlace, navegacion3.children[3]);
```

#### 3.6.3. CREAR ESTRUCTURA DE ELEMENTOS

Las estructuras que se incorporan al DOM de manera dinámica son muy habituales cuando hacemos consultas a nuestra base de datos o usamos una API.

Vamos a crear un card dentro de nuestro proyecto de muestra.

Este elemento tiene, a su vez, elementos hijos, que también los crearemos.

La estructura es la siguiente:

```html
<div class="card">
    <img src="img/hacer1.jpg">
    <div class="info">
        <p class="categoria concierto">concierto</p>
        <p class="titulo">Música electrónica 2021</p>
        <p class="precio">$1,200 por persona</p>
    </div>
</div>
```

Vemos que el elemento tiene:

- Una imagen
- Un div con tres párrafos

Creamos los tres párrafos. Vamos a asignar textos las clases correspondientes a cada párrafo para que los estilos se mantengan.

```javascript
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'CONCIERTO';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Festival de Música Rock';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '80€ por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);
```

Vemos que los tres párrafos están dentro de un `<div class = 'info'>`

Creamos un div con esa característica:

```javascript
const info = document.createElement('div');
info.classList.add('info');
console.log(info);
```

Ahora vamos a incluir en el div, los tres párrafos:

```javascript
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info.children);
```

Resultado: `HTMLCollection(3) [p.categoria.concierto, p.titulo, p.precio]`

Vamos a crear la imagen para el card:

```javascript
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);
```

Lo que nos falta es el elemento "padre", el card, que es un `<div class = 'card'>`

```javascript
const divCard = document.createElement('div');
divCard.classList.add('card');
console.log(divCard);
```

Por último, debemos añadir imagen y el div 'info' con los 3 párrafos al card:

```javascript
divCard.appendChild(imagen);
divCard.appendChild(info);
console.log(divCard.children);
```

Resultado: `HTMLCollection(2) [img, div.info]`

Lo asignamos en el HTML en el primer bloque de cards del proyecto:

```javascript
const padreCard1 = document.querySelector('.contenedor-cards');
console.log(padreCard1);
```

Lo añadimos al inicio, como novedad:

```javascript
padreCard1.insertBefore(divCard, padreCard1.children[0]);
```

Muchos frameworks y librerías hacen este trabajo de forma automática pero es importante que dominemos estas acciones.

---

## 4. ANEXO: BOM

Este apartado de anexos incluirá la explicación y detalle de propiedades y métodos básicos de algunos objetos que se relacionan con BOM.

### 4.1. Objeto Navigator

Objeto que representa al navegador del usuario que está utilizando la aplicación web.

#### 4.1.1. PROPIEDADES DEL OBJETO NAVIGATOR

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `platform` | Devuelve la plataforma del navegador.<br>`console.log(navigator.platform); //Win32` |
| `onLine / offLine` | Devuelve true o false si el usuario está conectado a Internet<br>`console.log(navigator.onLine); //true` |
| `language` | Devuelve el idioma en el que está configurado el navegador<br>`console.log(navigator.language); //es-ES` |
| `cookieEnabled` | Devuelve true o false si están activadas o no las cookies<br>`console.log(navigator.cookieEnabled); //true` |
| `userAgent()` | Permite obtener la cadena de información del navegador<br>`console.log(navigator.userAgent)`<br>Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101<br>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 |
| `geolocation` | Devuelve un objeto que nos servirá para acceder a la posición GPS del usuario (usando la API de geolocalización) |
| `Storage` | Devuelve un objeto que nos servirá para trabajar el almacenamiento de datos persistentes (usanda la API correspondiente). |

### 4.2. Objeto Screen

Objeto que hace referencia a la pantalla de la ventana que se está visualizando.

#### 4.2.1. PROPIEDADES DEL OBJETO SCREEN

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `width` | Devuelve el ancho de la pantalla |
| `height` | Devuelve el alto de la pantalla |
| `availWidth` | Devuelve el ancho de la pantalla sin la barra de tareas |
| `availHeight` | Devuelve el alto de la pantalla sin la barra de tareas |
| `colorDepth` | Indica la profundidad en bits de los colores de la pantalla. El número de colores disponibles en la pantalla será 2 elevado a la cantidad devuelta. |

### 4.3. Objeto History

Guarda las URL visitadas por el usuario dentro de una ventana del explorador.

NO lo podemos confundir con el historial del navegador.

#### 4.3.1. PROPIEDAD DEL OBJETO SCREEN

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| `length` | Devuelve el número de URLs en el historial de la página. |

#### 4.3.2. MÉTODOS DEL OBJETO SCREEN

| MÉTODO | SIGNIFICADO |
|--------|-------------|
| `back()` | Carga la URL anterior en el historial |
| `forward()` | Carga la URL siguiente en el historial |
| `go(<num>\|<URL>)` | Va a una página concreta del historial.<br>Si el número es positivo, irá hacia adelante, el número de páginas indicadas. Lo mismo si es negativo.<br>Si lo que indicamos es una URL, irá a esa URL |

### 4.4. Objeto Location

Este objeto representa la dirección URL de la propia aplicación o página que se está visitando.

#### 4.4.1. PROPIEDADES DEL OBJETO LOCATION

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| `href` | Devuelve la URL de la página |
| `hostname` | Devuelve el nombre del host de la página. |
| `host` | Devuelve el nombre del host de la página con el puerto |
| `pathname` | Devuelve la ruta de directorios a partir del host de la URL. |
| `protocol` | Devuelve el protocolo de la página |
| `hash` | Devuelve el ancla o marcador, si lo tiene, de la URL. |
| `origin` | Devuelve el protocolo, hostname y puerto. |
| `search` | Permite extraer la querystring de la página. |

#### 4.4.2. MÉTODOS DEL OBJETO LOCATION

| PROPIEDAD | SIGNIFICADO |
|-----------|-------------|
| `assign(<url>)` | Asigna un nuevo documento a la página. |
| `reload()` | Recarga la página. |
| `replace(<url>)` | Sustituye la página por otra (desaparece su historial). |

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
