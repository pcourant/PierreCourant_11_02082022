import React from 'react';
import styles from './App.module.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className={styles.mainWrapper}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
