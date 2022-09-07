import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thumb.module.css';

const Thumb = ({ id, title, cover, type }) => {
  return (
    <Link
      className={styles.link}
      to={`/PierreCourant_11_02082022/${type}/${id}`}
    >
      <article className={styles.container}>
        <div className={styles.gradient}>
          {cover && <img className={styles.cover} src={cover} alt={title} />}
          <h2 className={styles.locationName}>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default Thumb;
