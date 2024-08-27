import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Components/Dashboard'; // Ensure the path is correct based on your file structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
