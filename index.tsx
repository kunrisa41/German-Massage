import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("App starting...");

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App rendered.");
} else {
  console.error("Root element not found");
}