import { createRoot } from 'react-dom/client';
import './src/scss/main.scss';
import 'animate.css';
import App from './src/components/app/app';
import * as React from 'react';

const root = createRoot(document.getElementById('root') as Element);

root.render(<App />);
