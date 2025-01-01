import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json'; // Import translations for Polaris
import '@shopify/polaris/build/esm/styles.css'; // Import Polaris styles
import '../css/app.css';

// Ensure there's a root div in your HTML structure
const rootElement = document.getElementById('root') || document.createElement('div');
if (!document.getElementById('root')) {
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

// Wrap your App in the Polaris AppProvider
createRoot(rootElement).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
