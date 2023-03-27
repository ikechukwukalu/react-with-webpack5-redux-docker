import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './components/redux'

import App from './App';

import "regenerator-runtime/runtime.js";


const store = configureStore({ reducer: rootReducer });

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
        <App />
    </Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
