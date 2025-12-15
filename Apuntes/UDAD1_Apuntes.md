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

---

## 🎯 CONSEJOS PARA EL EXAMEN

- [ ] Repasar arquitectura **MVC**
- [ ] Conocer diferencias **Frontend/Backend**
- [ ] Memorizar características de **JavaScript**
- [ ] Estudiar evolución histórica de **JS**
- [ ] Conocer versiones **ECMAScript** principales
- [ ] Familiarizarse con **herramientas de desarrollo**
- [ ] Practicar con **Developer Tools** del navegador

---

> **📚 Documento generado a partir del PDF del Tema 1**  
> **👨‍💻 2º DAW - Desarrollo Web Entorno Cliente**  
> **🏫 IES Serra Perenxisa - Curso 2025-2026**