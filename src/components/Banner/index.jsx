/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ image, slogan, large }) => {
  return (
    <header className={`${styles.container} ` + (large && styles.large)}>
      <img className={styles.image} src={image} />
      <div className={styles.background}></div>
      <div className={styles.sloganContainer}>
        {slogan && <h1 className={styles.sloganText}>{slogan}</h1>}
      </div>
    </header>
  );
};

export default Banner;
