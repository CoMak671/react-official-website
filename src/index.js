import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { RoutingTable } from './router';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {RoutingTable.map((route, index) => (
          <Route
            key={index}
            path={'/' + route.title}
            element={route.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
