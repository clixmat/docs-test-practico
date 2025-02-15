# Closures y Memory Leaks en JavaScript

## ¿Qué son los closures en JavaScript?

Un **closure** es una función que "recuerda" el ámbito en el que fue creada, incluso después de que ese ámbito haya finalizado su ejecución. Esto significa que una función interna puede acceder a las variables de su función externa, incluso después de que la función externa haya terminado.

### Ejemplo de Closure:

```js
function contador() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const incrementar = contador();
incrementar(); // 1
incrementar(); // 2
```

En este ejemplo, la función anónima retornada sigue teniendo acceso a la variable count, a pesar de que la función contador() ya haya terminado de ejecutarse.

## ¿Cómo pueden los closures causar un memory leak?

Los closures pueden causar memory leaks si mantienen referencias innecesarias a objetos en memoria, evitando que el recolector de basura los elimine. Esto sucede cuando una función interna sigue referenciando variables de la función externa que ya no se usan, pero no pueden ser liberadas.

### Ejemplo de un Memory Leak con Closures:

```js
function crearLeak() {
  let datosPesados = new Array(1000000).fill("🔴"); // Array grande en memoria

  return function () {
    console.log(datosPesados.length); // La referencia sigue viva
  };
}

const leak = crearLeak();
// Aunque `crearLeak()` terminó, `datosPesados` sigue en memoria
```
En este caso, datosPesados sigue en memoria porque la función retornada sigue teniendo acceso a ella.

## ¿Cómo solucionar este problema?

Para evitar el memory leak, podemos:

- Eliminar referencias innecesarias: Si ya no necesitamos datosPesados, podemos eliminar su referencia.
- Devolver solo los datos necesarios: En lugar de mantener referencias a grandes estructuras, podemos devolver solo lo necesario.

### Solucion:

```js
function crearSeguro() {
  let datosPesados = new Array(1000000).fill("🔴");

  return function () {
    console.log(datosPesados.length);
    datosPesados = null; // Liberar la referencia
  };
}

const seguro = crearSeguro();
seguro(); // 1000000, pero ahora `datosPesados` se libera
```
## Conclusion

Los closures son utiles, pero pueden causar problemas de memoria si mantienen referencias innecesarias a objetos grandes. Siempre es buena práctica limpiar referencias cuando ya no sean necesarias para evitar memory leaks y mejorar el rendimiento de la aplicación.