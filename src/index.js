import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App';

import DifferentComponentsAtTheSamePositionResetState from './examples/different-components-at-the-same-position-reset-state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/different-components-at-the-same-position-reset-state"
          element={<DifferentComponentsAtTheSamePositionResetState />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
