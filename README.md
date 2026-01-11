# Desarrollo Web en Entorno Cliente 📚

**Resumen de ejercicios y proyectos realizados**

Este repositorio contiene los apuntes, ejercicios y prácticas del módulo "Desarrollo Web en Entorno Cliente". Aquí se agrupan los materiales por temas y proyectos prácticos, con ejemplos para abrir en el navegador y notas sobre qué se ha implementado.

---

## Estructura general ✅

- `Apuntes/` - Apuntes teóricos por unidades (UDAD1...UDAD6) y recursos adicionales.
- `Examen/` - Practica de examen: Calculadora de consumos.
  - Ejemplo: `Examen/1. FICHEROS Calculadora Consumos BAR-20251112/index.html`
- `Posibles examenes/` - Propuestas y prácticas de examen (por ejemplo `tienda-crud`, `GESTOR DE BIBLIOTECA PERSONAL`).
- `Tema 1/` - Fundamentos básicos y ejercicios.
- `Tema 2/` - Estructuras de control, números y strings con ejemplos en `.js`.
- `Tema 3/` - (Carpeta para tema 3, incluye ejercicios relevantes)
- `Tema 4/` - Prácticas: reloj digital (`Práctica 2 EVALUABLE RELOJ/`) y barra de progreso (`Práctica 3 EVALUABLE BARRA PROGRESO/`).
- `Tema 5/` - Proyectos sobre DOM, carrito de compras, formularios y LocalStorage.
- `Tema 6/` - Consumo de APIs (criptomonedas, Pixabay) y CRUD con JSON Server.
- `Tema 7/` - Tienda de guitarras (proyecto con estructura `index.html` + `src/`).
- `Tema 8/` - Variantes de proyectos de tienda, presupuesto y buscadores de APIs.

---

## Proyectos destacados 🔧

- Calculadora de consumos (Examen) — `Examen/1. FICHEROS Calculadora Consumos BAR-20251112/`
- Tienda CRUD — `Posibles examenes/8. tienda-crud/` (incluye `admin.html`, `index.html` y `db.json` para datos locales)
- Gestor de biblioteca personal — `Posibles examenes/9. GESTOR DE BIBLIOTECA PERSONAL/`
- Reloj digital — `Tema 4/Práctica 2 EVALUABLE RELOJ/` (`reloj.html`, `reloj.js`)
- Barra de progreso — `Tema 4/Práctica 3 EVALUABLE BARRA PROGRESO/` (`index.html`, `index.js`)
- Tienda de guitarras — `Tema 7/1. Tienda de Guitarras Ficheros-20251117/` (`index.html`, `src/`)
- CRUD con `json-server` — Proyectos en `Tema 6/3. CRUD Json Server/` y `Posibles examenes` que usan `db.json`.

---

## Cómo ver los ejercicios en tu máquina 💡

1. Abrir el archivo `index.html` correspondiente en el navegador (doble clic o con una extensión Live Server en VS Code).
2. Para proyectos que usan `db.json` y `json-server`:
   - Instalar `json-server`: `npm install -g json-server` ⚠️
   - Ejecutar: `json-server --watch db.json --port 3000` y abrir la app que consuma la API en `http://localhost:3000`.
3. Para trabajar con módulos o proyectos más complejos, abrir la carpeta del proyecto en VS Code y usar Live Server o la configuración local necesaria.

