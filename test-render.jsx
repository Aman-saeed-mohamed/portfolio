// test-render.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';
import './src/i18n/index.js'; // initialize i18n

try {
  const html = renderToString(React.createElement(App));
  console.log("Render successful!");
} catch (error) {
  console.error("REACT CRASH ERROR:", error);
}
