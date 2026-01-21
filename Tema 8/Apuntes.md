# 📘 **APUNTES: Cómo se enseña a trabajar con Vue.js en el PDF**

## 🎯 **Enfoque general del PDF**

El documento enseña Vue.js **paso a paso**, con un estilo muy práctico:

- Primero te muestra **qué herramienta usar** (Vite, create-vue, DevTools).
- Luego te enseña **cómo crear un proyecto desde cero**.
- Después te guía por **la estructura del proyecto**.
- Más tarde introduce **los conceptos fundamentales** (SFC, State, Props, Eventos…).
- Y finalmente te hace construir una **aplicación completa** (Tienda de guitarras).

La metodología es siempre la misma:

> **1. Explicación → 2. Ejemplo → 3. Práctica guiada → 4. Aplicación real**

---

# 🧱 **1. Crear un proyecto con Vite**

El PDF enseña a crear un proyecto así:

1. Abrir terminal en la carpeta deseada.
2. Ejecutar:

```
npm create vite@latest
```

3. Elegir:
   - Nombre del proyecto
   - Framework: **Vue**
   - Variante: **JavaScript**
4. Instalar dependencias y arrancar:

```
npm install
npm run dev
```

👉 El PDF recalca que Vite permite **HMR** (Hot Module Reload), así que los cambios se ven al instante.

---

# 🗂️ **2. Entender la estructura del proyecto**

El PDF explica carpeta por carpeta:

| Carpeta / Archivo | Para qué sirve                   |
| ----------------- | -------------------------------- |
| `src/`            | Código principal                 |
| `components/`     | Componentes Vue                  |
| `assets/`         | Imágenes y recursos              |
| `App.vue`         | Componente raíz                  |
| `main.js`         | Monta la app                     |
| `public/`         | Archivos accesibles directamente |

👉 Importante: **Vue accede a `public/` sin poner `/public` en la ruta**.

---

# 🧩 **3. Single File Components (SFC)**

El PDF enseña que un componente Vue tiene 3 partes:

```
<script setup>
</script>

<template>
</template>

<style>
</style>
```

Cada parte tiene su función:

- **script** → lógica, imports, states, funciones
- **template** → HTML dinámico
- **style** → estilos del componente

---

# 🔄 **4. State: ref() y reactive()**

El PDF enseña a usar ambos, comparándolos:

### ✔️ `reactive()`

- Para **objetos**.
- Se accede como objeto normal.
- Vue usa **Proxy** para detectar cambios.

### ✔️ `ref()`

- Para **strings, números, arrays, booleans**.
- Se accede con `.value` en `<script>`.
- En `<template>` NO se usa `.value`.

👉 El PDF insiste en que **para arrays es mejor ref()**.

---

# 🧬 **5. Ciclo de vida: onMounted()**

El PDF enseña:

- Se importa de Vue.
- Se ejecuta cuando el componente ya está en pantalla.
- Se usa para cargar datos, inicializar states, leer localStorage…

Ejemplo típico del PDF:

```js
onMounted(() => {
  guitarras.value = db;
});
```

---

# 🔁 **6. Directivas**

El PDF explica las más importantes:

- `v-for` → bucles
- `v-bind` o `:` → enlazar atributos
- `v-on` o `@` → eventos
- `v-if / v-else / v-else-if` → condicionales
- `v-model` → formularios

Siempre con ejemplos prácticos.

---

# 🧱 **7. Componentes y Props**

El PDF enseña:

1. Crear un componente nuevo.
2. Pasarle datos desde el padre con:

```
<Guitarra :guitarra="guitarra" />
```

3. Recogerlos en el hijo con:

```js
const props = defineProps({
  guitarra: Object,
});
```

👉 El PDF insiste en que **si no defines el Prop, Vue da error**.

---

# 📤 **8. Eventos: hijo → padre**

El PDF enseña a usar:

- `defineEmits()` en el hijo
- `$emit('evento')` para enviar datos
- `@evento="funcion"` en el padre

Ejemplo:

```html
<button @click="$emit('agregar-carrito', guitarra)"></button>
```

En el padre:

```html
<Guitarra @agregar-carrito="agregarCarrito" />
```

---

# 🧮 **9. Computed Properties**

El PDF enseña que sirven para:

- Cálculos derivados del State
- Optimizar rendimiento
- Evitar repetir lógica

Ejemplo típico:

```js
const totalPagar = computed(() =>
  props.carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0),
);
```

---

# 👁️ **10. Watch**

El PDF lo usa para:

- Guardar el carrito en localStorage
- Detectar cambios profundos (`deep: true`)

Ejemplo:

```js
watch(carrito, guardarLocalstorage, { deep: true });
```

---

# 🎨 **11. Styles**

El PDF enseña:

- `scoped` → estilos solo para ese componente
- `lang="scss"` → usar Sass (requiere instalar `sass`)

---

# 📝 **12. Formularios**

El PDF enseña dos formas:

### 1) `@input="función"`

### 2) `v-model="state"`

Y explica cómo funciona la **bidireccionalidad**.

---

# 🧩 **13. Slots**

El PDF enseña:

- `<slot>` para contenido dinámico
- Slots nombrados con `v-slot:nombre`
