import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

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
    console.log("App mounted successfully");
  } catch (e) {
    console.error("Mount error:", e);
    container.innerHTML = `<div style="padding:50px;color:red;">Error: ${String(e)}</div>`;
  }
};

// ใช้ความชัวร์ด้วยการเช็ค DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}