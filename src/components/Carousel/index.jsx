/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ pictures, alts }) => {
  const totalPictures = pictures.length;

  return (
    <section className={styles.container}>
      <img className={styles.picture} src={pictures[0]} alt={alts[0]} />
      <FontAwesomeIcon
        className={`${styles.chevron} ${styles.chevronLeft}`}
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        className={`${styles.chevron} ${styles.chevronRight}`}
        icon={faChevronRight}
      />
      <p className={styles.counter}>1/{pictures.length}</p>
    </section>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  alts: PropTypes.arrayOf(PropTypes.string),
};

Carousel.defaultProps = {
  pictures: [],
  alts: [],
};

export default Carousel;
