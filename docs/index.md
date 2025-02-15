# Documentacion test practico Land Gorilla

### Desarrollo de código

## VUE3
Crea un componente en Vue 3 utilizando el API de Composición que haga lo siguiente:
1. Consuma una API externa para mostrar una lista de elementos.
2. Incluye un campo de búsqueda para filtrar la lista en tiempo real.
3. Implementa un sistema de paginación en la lista de resultados.

Solucion: 
- Url: https://clixmat.github.io/vue-land-gorilla/
- Código fuente y README: https://github.com/clixmat/vue-land-gorilla

## NODE JS
Implementa una API REST en Node.js con Express que realice operaciones CRUD sobre
un recurso (por ejemplo,"usuarios"). Asegúrate de incluir:
1. Middleware para manejar autenticación con JWT .
2. Validación de los datos de entrada con una librería como Joi o express-validator.
3. Control de errores y respuestas adecuadas en caso de fallos.

Solucion: 
- Código fuente y README: https://github.com/clixmat/node-js-land-gorilla

## REACT
Crea un formulario en React con TypeScript que permita a los usuarios agregar dinámicamente campos (inputs) al formulario. Los datos deben ser validados utilizando un esquema definido con TypeScript y, al enviar el formulario, deben ser enviados a una
API simulada.

Solucion:
- Url: https://clixmat.github.io/react-land-gorilla/
- Código fuente y README: https://github.com/clixmat/react-land-gorilla

## Angular
Implementa lazy loading en una aplicación Angular dividiendo la aplicación en varios módulos. Usa Angular Router para definir rutas y carga los módulos solo cuando el usuario los necesita.

Solucion:
- Url: https://clixmat.github.io/angular-land-gorilla/home
- Código fuente y README: https://github.com/clixmat/angular-land-gorilla

## Despliegue - Automatización de CI/CD 
Describe y documenta un pipeline de CI/CD completo que incluya:

- Integración de tests unitarios y de integración antes de cada despliegue.
- Automatización de despliegue en un entorno de producción (por ejemplo, en Vercel,
Netlify o AWS).
- Estrategia de rollback automatizada en caso de fallos.
### Solucion: [CI/CD con Jenkins para AWS](./automatization.md)

## Closures y Memory Leaks en JavaScript
Explica qué son los closures en JavaScript y cómo funcionan. ¿En qué casos un closure puede provocar un memory leak? Proporciona un ejemplo de código en el que el uso incorrecto de un closure cause un problema de rendimiento o memoria, y describe cómo lo resolverías.

### Solucion: [Closures y Memory Leaks](./closures-memory-leaks.md)

## Optimización de Performance en JavaScript
Imagina que tienes un bucle que se ejecuta sobre un array de gran tamaño. Compara el rendimiento de los siguientes métodos: forEach, map, reduce y un bucle for
tradicional. ¿Cuál es más eficiente en términos de tiempo de ejecución y por qué? Proporciona un ejemplo y justifica tu respuesta.

### Solucion: [Performance en JavaScript](./performance.md)

## Prototype Chain y Herencia en JavaScript
Explica el concepto de prototypal inheritance en JavaScript. ¿Cómo funciona la cadena de prototipos? Proporciona un ejemplo de cómo extender un objeto utilizando el prototipo
y compara este enfoque con la herencia basada en clases de ES6. ¿Cuándo sería más apropiado utilizar prototypal inheritance en lugar de clases?

### Solucion: [Prototypal inheritance en JavaScript](./prototypal-inheritance.md)

## Solución de Problemas y Patrones de Diseño

### Patrones de Diseño en Frontend
Elige un patrón de diseño adecuado para cada uno de los siguientes casos y explica por qué:

1. Necesitas gestionar el estado compartido entre múltiples componentes en una aplicación React.
2. Estás desarrollando un sistema de notificaciones en una aplicación Vue 3 que requiere que se puedan agregar o eliminar notificaciones en cualquier parte del código.
3. Quieres mejorar la reutilización de componentes en Angular, permitiendo que varios componentes compartan lógica similar.

Justifica tu elección con ejemplos y menciona cómo cada patrón ayuda a resolver el problema.

### Solucion 1: [Gestion de estado en React](./status-management.md)
### Solucion 2: [Sistema de notificaciones en Vue 3](./system-notifications.md)
### Solucion 3: [Gestion de componentes en Angular](./angular-components.md)

### Escalabilidad en Aplicaciones Frontend

Imagina que tu equipo está trabajando en una aplicación de frontend que está creciendo rápidamente y empieza a tener problemas de rendimiento y gestión del código. ¿Qué cambios harías en la arquitectura para que sea más escalable? Menciona:
1. Separación de responsabilidades (componentes, servicios, etc.).
2. Uso de herramientas para mejorar el rendimiento (tree-shaking, code-splitting).
3. Mejoras en la organización de los estilos y la UI.

### Solucion: [Escalabilidad en Aplicaciones Frontend](./scalability.md)