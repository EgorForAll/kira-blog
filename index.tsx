import { createRoot } from 'react-dom/client';
import './src/scss/main.scss';
import App from './src/components/app/app';
import * as React from 'react';

const domNode = document.querySelector('#root');
const root = createRoot(domNode);

root.render(<App />);
