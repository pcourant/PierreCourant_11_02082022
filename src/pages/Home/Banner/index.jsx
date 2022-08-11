import React from 'react';
import styles from './Banner.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <p className={styles.slogan}>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default index;
