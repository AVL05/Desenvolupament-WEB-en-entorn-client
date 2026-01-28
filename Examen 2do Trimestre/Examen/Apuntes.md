# 📘 **APUNTES RESUMIDOS – VUE.JS FUNDAMENTOS**

---

# 🎯 **1. ¿Qué es Vue.js?**
- Framework progresivo de JavaScript (2014, Evan You).  
- Ideal para interfaces dinámicas y aplicaciones SPA.  
- Basado en **componentes**.  
- Programado en **TypeScript y JavaScript**.  
- Versión usada en el PDF: **Vue 3.4.5**.

---

# ⚡ **2. Herramientas necesarias**
- **Vite** → herramienta de desarrollo rápida para crear proyectos Vue.  
- **create-vue** → asistente para generar proyectos.  
- **Node.js** (mínimo 14.18).  
- **Vue DevTools** → extensión para depurar.  
- Extensiones de Vue para VS Code.

---

# 🚀 **3. Crear un proyecto con Vite**
Comando:

```
npm create vite@latest
```

Pasos:
1. Nombre del proyecto.  
2. Seleccionar framework → Vue.  
3. Seleccionar variante → JavaScript.  
4. Instalar dependencias.  
5. Ejecutar servidor:

```
npm run dev
```

---

# 🗂️ **4. Estructura del proyecto**
```
/public
/src
  /assets
  /components
  App.vue
  main.js
index.html
package.json
vite.config.js
```

### Archivos clave:
- **main.js** → crea la app y monta `App.vue`.  
- **App.vue** → componente raíz.  
- **index.html** → contiene `<div id="app">`.  
- **components/** → componentes reutilizables.  
- **public/** → imágenes accesibles directamente.

---

# 🧩 **5. Single File Component (SFC)**
Un componente Vue tiene 3 partes:

```vue
<script setup> </script>
<template> </template>
<style> </style>
```

- **script** → lógica, imports, state, funciones.  
- **template** → HTML reactivo.  
- **style** → CSS o SCSS (puede ser scoped).

---

# 🧠 **6. State en Vue: ref() y reactive()**

## **ref()**
- Para valores primitivos: string, number, boolean, arrays, objetos.  
- Se accede con `.value` en el script.  
- En el template NO se usa `.value`.

Ejemplo:

```js
const contador = ref(0)
contador.value++
```

---

## **reactive()**
- Para **objetos complejos**.  
- No usa `.value`.  
- Vue crea un **Proxy** para detectar cambios.

Ejemplo:

```js
const libro = reactive({
  nombre: "Vue 3",
  precio: 30
})
```

---

# 🔄 **7. Ciclo de vida: onMounted()**
Se ejecuta cuando el componente ya está en el DOM.

```js
onMounted(() => {
  productos.value = db
})
```

Usos típicos:
- Cargar datos.  
- Leer LocalStorage.  
- Llamadas a APIs.

---

# 🧱 **8. Directivas básicas**
- `v-if` / `v-else` → condicionales.  
- `v-for` → bucles.  
- `v-model` → doble enlace en formularios.  
- `v-on` o `@` → eventos.  
- `:prop` → binding dinámico.

Ejemplo:

```vue
<li v-for="item in lista">{{ item }}</li>
```

---

# 🧩 **9. Componentes y Props**
Los componentes reciben datos del padre mediante **props**.

```vue
<script setup>
defineProps(["titulo", "precio"])
</script>
```

Uso:

```vue
<Producto titulo="Guitarra" precio="399" />
```

---

# 🔔 **10. Eventos (emit)**
Para enviar datos del hijo al padre:

```js
const emit = defineEmits(["agregar"])
emit("agregar", producto)
```

Padre:

```vue
<Producto @agregar="añadirAlCarrito" />
```

---

# 🧮 **11. Computed Properties**
Propiedades calculadas automáticamente.

```js
const total = computed(() =>
  carrito.value.reduce((acc, item) => acc + item.precio, 0)
)
```

---

# 👀 **12. Watch**
Observa cambios en variables reactivas.

```js
watch(carrito, () => {
  guardarLocal()
}, { deep: true })
```

Usos:
- Guardar en LocalStorage.  
- Ejecutar acciones cuando cambia un valor.

---

# 📝 **13. Formularios**
### v-model
Enlaza input ↔ variable.

```vue
<input v-model="nombre" />
```

### Modificadores:
- `.trim`
- `.number`
- `.lazy`

---

# 🧱 **14. Slots**
Permiten insertar contenido dentro de un componente.

### Slot por defecto:

```vue
<slot></slot>
```

### Slot nombrado:

```vue
<slot name="header"></slot>
```

Uso:

```vue
<Card>
  <template #header> Título </template>
  Contenido del card
</Card>
```

---
