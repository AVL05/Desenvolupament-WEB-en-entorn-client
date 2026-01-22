# 📘 **APUNTES: FUNDAMENTOS DE VUE.JS (Vue 3 + Vite)**

---

# 1. 🟢 **Introducción a Vue.js**

- Framework progresivo de JavaScript (2014, Evan You).
- Ideal para proyectos pequeños y grandes.
- Basado en **componentes**.
- Programado en **TypeScript y JavaScript**.
- Última versión estable mencionada: **3.4.5**.
- Muy versátil, accesible y fácil de integrar.

---

# 2. 🛠️ **Tecnologías necesarias**

- **Vite** → herramienta de desarrollo rápida (sustituto moderno de Webpack).
- **create-vue** → asistente para crear proyectos Vue.
- **Node.js ≥ 14.18**.
- **Vue DevTools** (Chrome/Firefox).
- Extensiones de Vue para VS Code.

---

# 3. 🚀 **Primeros pasos con Vite**

### Crear proyecto:

```bash
npm create vite@latest
```

Pasos:

1. Elegir nombre del proyecto.
2. Seleccionar framework → **Vue**.
3. Seleccionar variante → **JavaScript**.
4. Instalar dependencias.
5. Ejecutar servidor:

```bash
npm run dev
```

### Estructura del proyecto:

```
.vscode/
node_modules/
public/
src/
  assets/
  components/
  App.vue
  main.js
index.html
package.json
vite.config.js
```

### main.js

```js
createApp(App).mount("#app");
```

---

# 4. 🧩 **Elementos básicos de Vue**

- Todo se basa en **componentes**.
- Un componente puede recibir **props** y emitir **eventos**.
- Reactividad mediante **ref()** y **reactive()**.

---

# 5. 📄 **Single File Components (SFC)**

Un componente `.vue` tiene 3 secciones:

```vue
<script setup></script>

<template></template>

<style scoped></style>
```

- `<script setup>` → Composition API simplificada.
- `<template>` → HTML reactivo.
- `<style scoped>` → estilos solo para este componente.

---

# 6. 🧱 **Preparación del proyecto**

- Imágenes deben ir en `/public`.
- Vue accede a `/public` directamente → NO usar `./public/...`.
- Copiar HTML base al `<template>` de `App.vue`.
- Estilos globales en `style.css`.

---

# 7. 🧠 **API Styles: Options API vs Composition API**

## Options API

Estructura basada en objetos:

```js
export default {
  data() {
    return { productos: [] };
  },
  methods: { agregar() {} },
  mounted() {},
};
```

## Composition API (recomendada)

```js
import { ref } from "vue";

const productos = ref([]);
const agregar = () => {};
```

Ventajas:

- Código más reutilizable.
- Mejor organización en proyectos grandes.

---

# 8. 🧱 **Creación de componentes**

Ejemplo: `Header.vue`

- Se crea en `/components`.
- Se importa en `App.vue`:

```js
import Header from "./components/Header.vue";
```

- Se usa en `<template>`:

```html
<header />
```

---

# 9. 🔄 **State en Vue (Reactividad)**

## 9.1. `reactive()`

- Para **objetos**.

```js
const libro = reactive({
  nombre: "Algoritmos",
  precio: 30,
});
```

## 9.2. `ref()`

- Para **strings, números, booleanos, arrays u objetos**.

```js
const clientes = ref([]);
clientes.value.push("Juan");
```

### Diferencias clave:

| ref()                               | reactive()           |
| ----------------------------------- | -------------------- |
| Necesita `.value`                   | No necesita `.value` |
| Ideal para arrays y valores simples | Ideal para objetos   |
| Devuelve un wrapper                 | Devuelve un proxy    |

---

# 10. ⏳ **Métodos de ciclo de vida**

Importar:

```js
import { onMounted } from "vue";
```

### `onMounted()`

Se ejecuta cuando el componente ya está en el DOM.

Ejemplo:

```js
onMounted(() => {
  guitarras.value = db;
});
```

---

# 11. 🏷️ **Directivas de Vue**

Directivas más importantes:

| Directiva                     | Uso                  |
| ----------------------------- | -------------------- |
| `v-for`                       | Iteraciones          |
| `v-if`, `v-else`, `v-else-if` | Condicionales        |
| `v-bind` o `:`                | Enlazar atributos    |
| `v-on` o `@`                  | Eventos              |
| `v-model`                     | Enlace bidireccional |
| `v-show`                      | Mostrar/ocultar      |

Ejemplo `v-for`:

```html
<div v-for="guitarra in guitarras"></div>
```

---

# 12. 🔗 **Componentes y Props**

Pasar datos del padre al hijo:

```html
<Guitarra :guitarra="guitarra" />
```

En el hijo:

```js
const props = defineProps({
  guitarra: { type: Object, required: true },
});
```

---

# 13. 🎯 **Eventos**

## Tipos:

- **Inline handlers** → lógica simple.
- **Method handlers** → lógica compleja.

## Custom Events (hijo → padre)

En hijo:

```html
<button @click="$emit('agregar-carrito', guitarra)"></button>
```

Declarar evento:

```js
defineEmits(["agregar-carrito"]);
```

En padre:

```html
<Guitarra @agregar-carrito="agregarCarrito" />
```

---

# 14. 🧮 **Computed Properties**

Variables derivadas que se recalculan automáticamente.

```js
const totalPagar = computed(() =>
  props.carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0),
);
```

---

# 15. 👀 **Watch**

Observa cambios en un state.

```js
watch(
  carrito,
  () => {
    guardarLocalstorage();
  },
  { deep: true },
);
```

---

# 16. 🌐 **Despliegue con Netlify**

1. Ejecutar build:

```bash
npm run build
```

2. Subir carpeta `dist/` a Netlify.
3. Personalizar URL si se desea.

---

# 17. 🎨 **Styles**

## Scoped

```html
<style scoped>
```

Evita que los estilos afecten a otros componentes.

## Sass

```html
<style lang="scss">
```

Requiere instalar:

```bash
npm install -D sass
```

---

# 18. 📝 **Formularios**

## v-on:input

```html
<input @input="e => presupuesto = e.target.value" />
```

## v-model (recomendado)

```html
<input v-model="presupuesto" />
```

Para objetos:

```html
<input v-model="pelicula.titulo" />
```

---

# 19. 📦 **Slots**

Permiten inyectar contenido dentro de un componente.

```html
<Alerta>
  <h2>Error</h2>
</Alerta>
```

En el componente:

```html
<slot></slot>
```

## Slots nombrados

```html
<slot name="alertaError"></slot>
```

---

# 20. 🧩 **Objetos reactivos dentro de arrays**

Problema: `reactive()` pierde reactividad dentro de arrays.

Solución → usar spread:

```js
gastos.value.push({ ...gasto });
```

---
