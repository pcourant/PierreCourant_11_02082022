/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Rating.module.css';
import { ReactComponent as Logo } from '../../assets/starSharp.svg';

const Rating = ({ name }) => {
  return (
    <div className={styles.container}>
      <Logo className={`${styles.star} ${styles.plain}`} title="rating" />
      <Logo className={`${styles.star} ${styles.plain}`} title="rating" />
      <Logo className={`${styles.star} ${styles.plain}`} title="rating" />
      <Logo className={`${styles.star} ${styles.empty}`} title="rating" />
      <Logo className={`${styles.star} ${styles.empty}`} title="rating" />
    </div>
  );
};

export default Rating;
