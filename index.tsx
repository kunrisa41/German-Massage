import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const startApp = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Mounting Error:", error);
    container.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <p>Bitte laden Sie die Seite neu.</p>
    </div>`;
  }
};

// เริ่มการทำงาน
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}