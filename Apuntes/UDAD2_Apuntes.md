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

---

## 📝 CONSEJOS PARA EL EXAMEN

1. **Usa siempre `let` y `const`**, evita `var`
2. **Punto y coma al final** de cada instrucción
3. **Usa `===` en lugar de `==`** para comparaciones
4. **Template literals** son más legibles que concatenación
5. **Arrow functions** para funciones simples
6. **Recuerda el hoisting** en funciones
7. **Ten cuidado con el scope** de las variables
8. **Usa `"use strict"`** para código más seguro

---

## 🎯 PUNTOS CLAVE PARA RECORDAR

- JavaScript es **case-sensitive**
- Las variables se **declaran antes de usarse**
- `prompt()` siempre devuelve un **string**
- Diferencia entre `==` y `===`
- Los **objetos y arrays** en `const` sí se pueden modificar
- **Template literals** usan backticks (`)
- **Arrow functions** no tienen `this` propio
- **Infinity** y **NaN** son valores especiales de Number