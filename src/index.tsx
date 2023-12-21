import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import * as serviceWorker from './serviceWorker';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from './components/redux/index.tsx';
import "regenerator-runtime/runtime.js";

const store = configureStore({ reducer: rootReducer });
const element: any = document.getElementById("root");
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    align?: string;
    onSubmit?: Function;
    onClick?: Function;
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
