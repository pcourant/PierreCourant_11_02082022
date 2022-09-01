import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';
import Error from './pages/Error';
import { AccomodationsProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccomodationsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="accomodation/:accomodationId"
              element={<Accomodation />}
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </AccomodationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
