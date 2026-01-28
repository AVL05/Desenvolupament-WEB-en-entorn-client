Perfecto, Alex. Aquí tienes un ejercicio avanzado que fusiona la lógica de un carrito de compra con la gestión CRUD de productos, todo basado en lo que has aprendido en clase y reflejado en tus apuntes. El enunciado está redactado con el mismo estilo que los ejercicios oficiales que me has compartido.

---

## 🧪 EJERCICIO AVANZADO: GESTOR DE TIENDA + CARRITO DE COMPRA

### DWEC 2º DAW  
DOM, EVENTOS, CRUD, LOCALSTORAGE, CLASES, MÓDULOS  
Curso 2.025-2026

---

## INTRODUCCIÓN RESUMEN

Partiendo de los ficheros `.html`, `.css` y una base de datos simulada con `json-server`, vamos a desarrollar una aplicación web que combine dos funcionalidades:

1. **Gestión CRUD de productos**: Alta, edición, eliminación y listado de productos.
2. **Carrito de compra**: Añadir productos al carrito, modificar cantidades, eliminar productos y vaciar el carrito.

El objetivo es simular una tienda online con panel de administración y funcionalidad de compra. Se trabajará con módulos JavaScript, clases, objetos, arrays, eventos, asincronía (`fetch` + `async/await`) y persistencia con `localStorage`.

---

## 1. ESTRUCTURA DE LA APLICACIÓN

La aplicación tendrá dos vistas principales:

- `admin.html`: Panel de administración CRUD de productos.
- `tienda.html`: Vista de tienda con productos disponibles y carrito de compra.

Cada vista tendrá su propio archivo JS principal (`admin.js`, `tienda.js`) que importará funciones desde módulos (`api.js`, `ui.js`, `carrito.js`, etc.).

---

## 2. BASE DE DATOS SIMULADA

Usaremos `json-server` con un archivo `db.json` que contenga una colección `productos`. Cada producto tendrá:

- `id`: autogenerado
- `nombre`: nombre del producto
- `precio`: número decimal
- `categoria`: texto
- `stock`: número entero
- `imagen`: URL de imagen (puede ser ficticia)

Ejemplo:
```json
{
  "productos": [
    {
      "id": 1,
      "nombre": "Auriculares Bluetooth",
      "precio": 29.99,
      "categoria": "Electrónica",
      "stock": 15,
      "imagen": "https://via.placeholder.com/150"
    }
  ]
}
```

---

## 3. FUNCIONALIDAD CRUD (admin.html)

Desde el panel de administración se podrá:

- **Listar productos**: tabla con columnas: imagen, nombre, precio, categoría, stock, acciones.
- **Añadir producto**: formulario con validación (todos los campos obligatorios, precio positivo, stock ≥ 0).
- **Editar producto**: al hacer clic en "Editar", se cargan los datos en el formulario.
- **Eliminar producto**: botón "Eliminar" con confirmación.

Las operaciones se realizarán con `fetch` y métodos `GET`, `POST`, `PUT`, `DELETE`.

---

## 4. FUNCIONALIDAD TIENDA + CARRITO (tienda.html)

Desde la vista de tienda se podrá:

- **Ver productos disponibles**: se muestran en tarjetas con imagen, nombre, precio y botón "Agregar al carrito".
- **Agregar al carrito**: si el producto ya está en el carrito, se incrementa la cantidad.
- **Mostrar carrito**: tabla con columnas: nombre, precio, cantidad, subtotal, botón eliminar.
- **Modificar cantidad**: input numérico para cambiar la cantidad (máximo el stock disponible).
- **Eliminar producto del carrito**
- **Vaciar carrito**
- **Persistencia**: el carrito se guarda en `localStorage` y se recupera al recargar la página.

---

## 5. REQUISITOS TÉCNICOS

- Uso de **clases** para representar productos y el carrito.
- Uso de **módulos** para separar lógica (`api.js`, `ui.js`, `carrito.js`, etc.).
- Validación de formularios con mensajes de error.
- Uso de `localStorage` para persistencia del carrito.
- Uso de `fetch` con `async/await` para comunicación con la API.
- Manipulación del DOM con `innerHTML`, `createElement`, `appendChild`, etc.
- Eventos: `submit`, `click`, `input`, `change`.

---

## 6. EJEMPLO DE INTERFAZ

### admin.html
```
| Imagen | Nombre | Precio | Categoría | Stock | Acciones |
|--------|--------|--------|-----------|-------|----------|
| 🖼️     | Ratón  | 19.99  | Informática | 10  | Editar / Eliminar |
```

### tienda.html
```
🖼️ Auriculares Bluetooth - 29.99€
[Agregar al carrito]

🛒 Carrito:
| Producto | Precio | Cantidad | Subtotal | Eliminar |
```

---

¿Quieres que te prepare también los archivos HTML, CSS y JSON base para este ejercicio? Puedo hacerlo ahora mismo.
