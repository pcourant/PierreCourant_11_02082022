import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Thumb.module.css';

const Thumb = ({ id, title, cover, type }) => {
  return (
    <Link className={styles.link} to={`/${type}/${id}`}>
      <article className={styles.container}>
        <div className={styles.gradient}>
          {cover && <img className={styles.cover} src={cover} alt={title} />}
          <h2 className={styles.locationName}>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  cover: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Thumb.defaultProps = {
  id: 'defaultID',
  title: 'Item title',
  cover: '',
  type: 'defaultType',
};

export default Thumb;
