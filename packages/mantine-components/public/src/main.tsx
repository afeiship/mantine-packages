import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import '@mantine/core/styles.css';
import '@/components/style.scss';
import App from './app';
import { createTheme, MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={createTheme({})}>
    <App />
  </MantineProvider>
);
