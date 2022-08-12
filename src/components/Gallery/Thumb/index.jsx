import React from 'react';
import styles from './Thumb.module.css';

const index = () => {
  return (
    <article className={styles.container}>
      <div className={styles.gradient}>
        <h2 className={styles.locationName}>{'Titre de la location'}</h2>
      </div>
    </article>
  );
};

export default index;
