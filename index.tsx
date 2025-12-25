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
    console.error("React Render Error:", error);
    container.innerHTML = `<div style="padding:40px; font-family:sans-serif; text-align:center;">
      <h2>Anwendungsfehler</h2>
      <p>${error instanceof Error ? error.message : 'Unbekannter Fehler'}</p>
    </div>`;
  }
};

// ตรวจสอบความพร้อมของ DOM ก่อนเริ่ม
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}