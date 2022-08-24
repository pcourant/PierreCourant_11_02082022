/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumb.module.css';

const Thumb = (title) => {
  return (
    <article className={styles.container}>
      <div className={styles.gradient}>
        <h2 className={styles.locationName}>{title}</h2>
      </div>
    </article>
  );
};

Thumb.protoType = {
  title: PropTypes.string,
};

Thumb.defaultProps = {
  title: '',
};

export default Thumb;
