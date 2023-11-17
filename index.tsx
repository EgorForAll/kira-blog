import { createRoot } from 'react-dom/client';
import './src/scss/main.scss';
import 'animate.css';
import App from './src/components/app/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import { setUpStore } from './src/store/root-reducer';

const root = createRoot(document.getElementById('root') as Element);

const store = setUpStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
