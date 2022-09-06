import React from 'react';
import styles from './Error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oups! La page que vous demandez n{"'"}existe pas.
      </p>
      <Link className={styles.link} to="/PierreCourant_11_02082022/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error;
