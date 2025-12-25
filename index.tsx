import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering error:", error);
    rootElement.innerHTML = `<div style="padding: 40px; text-align: center; color: #720e0e;">
      <h2>Startfehler</h2>
      <p>${error instanceof Error ? error.message : 'Unbekannter Fehler'}</p>
    </div>`;
  }
}