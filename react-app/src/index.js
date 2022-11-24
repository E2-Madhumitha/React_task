import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentsv5/App';
import { BrowserRouter } from 'react-router-dom';
import "./componentsv5/index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


