import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
