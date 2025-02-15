# Gestión de Estado Global en React con Context API y useReducer

El patrón de diseño de **Estado Global** mediante **Context API** y **useReducer** para gestionar el estado compartido entre múltiples componentes en una aplicación React.

## Descripción

En una aplicación React, gestionar el estado global sin pasar `props` manualmente puede resultar en un código complicado de mantener. Se propone el uso de **Context API** para compartir el estado de forma eficiente entre componentes, y **useReducer** para manejar estados más complejos con lógica de transición.

## Crear el Contexto y Reducer

```js
import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial
const initialState = {
  count: 0
};

// Reducer que maneja las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Crear el Contexto
const StateContext = createContext();

// Proveedor que envuelve la aplicación
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Hook para acceder al contexto
export const useStateContext = () => useContext(StateContext);

```

## Envolver la Aplicación con el Proveedor

Envolver la aplicación con el StateProvider en el archivo principal para que el estado esté disponible en todos los componentes.

```js
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/StateContext';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

```

## Usar el Estado en Componentes

Podemos acceder al estado y usar dispatch para las acciones usando el hook useStateContext en cualquier componente.

```js
// src/components/Counter.js

import React from 'react';
import { useStateContext } from '../context/StateContext';

const Counter = () => {
  const { state, dispatch } = useStateContext();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;

```

## Usar el Componente

Ahora, podemos usar el componente Counter en cualquier parte de la aplicación.

```js
// src/App.js

import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h1>Gestión de Estado Global con Context API y useReducer</h1>
      <Counter />
    </div>
  );
};

export default App;

```

## Resumen

- StateProvider: Componente que envuelve la aplicación y gestiona el estado global utilizando useReducer para manejar las actualizaciones de estado.
- useStateContext: Hook personalizado para acceder al estado global y a la función dispatch desde cualquier componente.
- Reducer: Función que gestiona las acciones que modifican el estado, proporcionando una manera clara y predecible de manejar los cambios de estado.