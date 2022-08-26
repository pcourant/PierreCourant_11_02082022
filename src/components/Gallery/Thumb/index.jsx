/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumb.module.css';

const Thumb = ({ title, cover }) => {
  return (
    <article className={styles.container}>
      <div className={styles.gradient}>
        {cover && <img className={styles.cover} src={cover} alt={title} />}
        <h2 className={styles.locationName}>{title}</h2>
      </div>
    </article>
  );
};

Thumb.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

Thumb.defaultProps = {
  title: '',
  cover: '',
};

export default Thumb;
