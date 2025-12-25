import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("React: Initialization started...");

const mountApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("React: Could not find #root element");
    return;
  }

  try {
    console.log("React: Rendering application to DOM...");
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React: Application rendered successfully.");
  } catch (err) {
    console.error("React Render Error:", err);
    container.innerHTML = `
      <div style="padding:40px; text-align:center; font-family:sans-serif;">
        <h2 style="color:#720e0e;">Render Error</h2>
        <p>${String(err)}</p>
      </div>
    `;
  }
};

// ตรวจสอบสถานะการโหลดของ DOM
if (document.readyState === 'complete') {
  mountApp();
} else {
  window.addEventListener('load', mountApp);
}