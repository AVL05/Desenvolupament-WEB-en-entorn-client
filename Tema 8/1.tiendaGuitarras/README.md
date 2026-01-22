# GuitarLA - Tienda de Guitarras con Vue.js

Este proyecto es una aplicación de tienda de guitarras construida con **Vue.js 3** y la **Composition API**. Demuestra conceptos centrales del desarrollo moderno con Vue, incluyendo la componentización, gestión del estado usando `ref` y `reactive`, props, eventos personalizados (`emit`), propiedades computadas, watchers y hooks del ciclo de vida.

## Estructura del Proyecto

- **src/App.vue**: El componente principal de la aplicación que gestiona el estado global (carrito, colección de guitarras).
- **src/components/Header.vue**: Muestra el encabezado, la navegación y el widget del carrito de compras. Maneja las interacciones del carrito (eliminar, incrementar, decrementar).
- **src/components/Guitarra.vue**: Un componente reutilizable que representa la tarjeta de producto de una sola guitarra.
- **src/components/Footer.vue**: Un componente de pie de página simple.
- **src/data/guitarras.js**: La fuente de datos para la colección de guitarras.

## Características Clave

1.  **Arquitectura de Componentes**: La aplicación se divide en componentes reutilizables (`Guitarra`, `Header`, `Footer`) para promover la organización y mantenibilidad del código.
2.  **Estado Reactivo**: Utiliza `ref` para gestionar el estado de la colección de guitarras (`guitarras`), el carrito de compras (`carrito`) y la guitarra promocional (`guitarra`).
3.  **Lógica del Carrito de Compras**:
    - Agregar artículos al carrito.
    - Prevenir duplicados (incrementa la cantidad en su lugar).
    - Aumentar/Disminuir la cantidad de artículos usando **Eventos Personalizados**.
    - Eliminar artículos o vaciar el carrito.
    - **Propiedad Computada** (`totalPagar`) para calcular dinámicamente el total del carrito.
4.  **Persistencia de Datos**: Utiliza `watch` y `localStorage` para persistir la sesión del carrito de compras, asegurando que los datos no se pierdan al recargar la página.
5.  **Renderizado Dinámico**: Utiliza `v-for` para renderizar listas de productos y Renderizado Condicional (`v-if`, `v-else`) para gestionar la visualización del carrito (por ejemplo, mostrando "El carrito está vacío").

## Configuración

1.  Clona el repositorio.
2.  Ejecuta `npm install` para instalar las dependencias.
3.  Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
