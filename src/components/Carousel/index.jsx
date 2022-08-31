import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ pictures, alts }) => {
  const totalPictures = pictures.length;
  const [pictureIndex, setPictureIndex] = useState(0);

  function handleClickChevronLeft() {
    setPictureIndex((pictureIndex) => {
      if (pictureIndex === 0) {
        return totalPictures - 1;
      } else {
        return pictureIndex - 1;
      }
    });
  }
  function handleClickChevronRight() {
    setPictureIndex((pictureIndex) => {
      if (pictureIndex === totalPictures - 1) {
        return 0;
      } else {
        return pictureIndex + 1;
      }
    });
  }

  return (
    <section className={styles.container}>
      <img
        className={styles.picture}
        src={pictures[pictureIndex]}
        alt={alts[pictureIndex]}
      />
      <FontAwesomeIcon
        className={`${styles.chevron} ${styles.chevronLeft}`}
        icon={faChevronLeft}
        onClick={handleClickChevronLeft}
      />
      <FontAwesomeIcon
        className={`${styles.chevron} ${styles.chevronRight}`}
        icon={faChevronRight}
        onClick={handleClickChevronRight}
      />
      <p className={styles.counter}>
        {pictureIndex + 1}/{totalPictures}
      </p>
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
