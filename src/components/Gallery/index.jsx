import React from 'react';
import Thumb from './Thumb';
import styles from './Gallery.module.css';

const index = () => {
  return (
    <main className={styles.container}>
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
    </main>
  );
};

export default index;
