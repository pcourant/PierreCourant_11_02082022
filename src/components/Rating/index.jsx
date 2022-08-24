/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rating.module.css';
import { ReactComponent as Logo } from '../../assets/starSharp.svg';

const Rating = ({ rating }) => {
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

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
