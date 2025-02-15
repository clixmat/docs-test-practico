# Sistema de Notificaciones en Vue 3

Este sistema de notificaciones permite agregar y eliminar notificaciones desde cualquier parte de la aplicación utilizando el patron de estado global de Vue 3. Las notificaciones se muestran en la parte superior derecha de la pantalla y pueden ser eliminadas por el usuario.

## 1. Store global para las notificaciones

1. Creamos un archivo llamado `notificationStore.js` en la carpeta `src/stores/`.
2. En este archivo, definimos un estado reactivo para las notificaciones y las funciones para agregar y eliminar notificaciones.

```javascript
// src/stores/notificationStore.js
import { reactive } from 'vue';

const state = reactive({
  notifications: []
});

const addNotification = (notification) => {
  state.notifications.push(notification);
};

const removeNotification = (index) => {
  state.notifications.splice(index, 1);
};

export default {
  state,
  addNotification,
  removeNotification
};
```

## 2. Componente de notificaciones
Creamos un archivo Notification.vue en la carpeta src/components/.
Este componente leerá el estado global de las notificaciones y las mostrará en la interfaz de usuario.

```javascript
<!-- src/components/Notification.vue -->
<template>
  <div v-if="notifications.length > 0" class="notification-container">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="notification"
    >
      <p>{{ notification.message }}</p>
      <button @click="remove(index)">Dismiss</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import notificationStore from '../stores/notificationStore';

export default {
  setup() {
    const notifications = computed(() => notificationStore.state.notifications);

    const remove = (index) => {
      notificationStore.removeNotification(index);
    };

    return {
      notifications,
      remove
    };
  }
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
}
.notification {
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
```

## 3. Incluimos el componente de notificaciones en la aplicación

1. Abre el archivo App.vue (o el componente raíz de tu aplicación).
2. Importa y usa el componente Notification.vue para que las notificaciones se rendericen en toda la aplicación.

```javascript
<!-- src/App.vue -->
<template>
  <div id="app">
    <Notification />
    <!-- Otros componentes -->
  </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
  components: {
    Notification
  }
};
</script>
```

## 4. Añadir una notificación desde cualquier parte del código

Desde cualquier componente o archivo de tu aplicación, podemos agregar una notificación al estado global llamando a la función addNotification.

```javascript
import notificationStore from '@/stores/notificationStore';

// Añadir una notificación
notificationStore.addNotification({ message: 'Nueva notificación' });
```

## 5. Eliminar una notificación
El componente Notification.vue tiene un botón "Dismiss" en cada notificación. Al hacer clic en el botón, se elimina la notificación correspondiente del estado global.

## 6. Personalizar las notificaciones

Podemos personalizar el estilo de las notificaciones modificando los estilos dentro de la etiqueta **style** del componente Notification.vue.
Si deseamos agregar diferentes tipos de notificaciones (con iconos, colores, etc.), puedes extender la estructura del objeto de notificación y personalizar la UI.
