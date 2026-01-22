# Gestor de Tareas (Vue 3 + Vite)

Este proyecto es una aplicación web de gestión de tareas "To-Do List" desarrollada como parte del módulo de Desarrollo Web en Entorno Cliente.

## Descripción

La aplicación permite al usuario gestionar su lista de tareas diarias de manera sencilla e intuitiva. Las funcionalidades principales incluyen:

- **Añadir Tareas**: Permite ingresar nuevas tareas a través de un formulario.
- **Listar Tareas**: Muestra visualmente todas las tareas añadidas.
- **Marcar como Completada/Pendiente**: Permite alternar el estado de cada tarea. Las tareas completadas se muestran tachadas.
- **Eliminar Tareas**: Permite borrar tareas individualmente de la lista.
- **Contadores Dinámicos**: Muestra en tiempo real el número de tareas pendientes y completadas.
- **Persistencia de Datos**: Utiliza `LocalStorage` para guardar las tareas, de modo que la información no se pierda al recargar la página.

## Tecnologías Utilizadas

- **Vue 3 (Composition API)**: Framework de JavaScript progresivo.
  - `reactive` y `ref` para el estado.
  - `computed` para contadores optimizados.
  - `watch` para la persistencia de datos.
  - `onMounted` para cargar datos iniciales.
- **Vite**: Entorno de desarrollo rápido.
- **CSS**: Estilos personalizados (sin frameworks CSS externos) para una apariencia limpia y temática (fondo de pizarra).

## Estructura del Proyecto

- `src/App.vue`: Componente principal que maneja el estado global, la lógica de persistencia y renderiza la estructura base.
- `src/components/Tarea.vue`: Componente reutilizable que representa cada ítem de la lista de tareas, recibiendo datos via `props` y comunicando acciones via `emits`.

## Instalación y Ejecución

1.  Clonar el repositorio o descargar la carpeta.
2.  Abrir una terminal en la carpeta del proyecto.
3.  Instalar dependencias:
    ```bash
    npm install
    ```
4.  Ejecutar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
