/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ image, slogan }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.background}></div>
      <div className={styles.sloganContainer}>
        {slogan && <p className={styles.sloganText}>{slogan}</p>}
      </div>
    </div>
  );
};

export default Banner;
