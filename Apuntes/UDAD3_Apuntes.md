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
