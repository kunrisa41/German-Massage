import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical Failure during React mount:", error);
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: sans-serif;">
        <p>Ein technischer Fehler ist aufgetreten. Bitte laden Sie die Seite neu.</p>
      </div>
    `;
  }
} else {
  console.error("Element #root not found in HTML");
}