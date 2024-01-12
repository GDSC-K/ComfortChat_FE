import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import BottomNav from './components/BottomNav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BottomNav />
    <App />
  </React.StrictMode>,
);
