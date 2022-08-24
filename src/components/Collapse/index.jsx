/* eslint-disable comma-dangle */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Collapse.module.css';

const Collapse = ({ size, title, paragraphs, isDropped }) => {
  return (
    <article className={`${styles.container} ${styles[`container${size}`]}`}>
      <div className={`${styles.top} ${styles[`top${size}`]}`}>
        <h2 className={`${styles.title} ${styles[`title${size}`]}`}>{title}</h2>
        <FontAwesomeIcon
          className={styles[`chevron${size}`]}
          icon={isDropped ? faChevronUp : faChevronDown}
        />
      </div>
      {isDropped && (
        <div className={`${styles.body} ${styles[`body${size}`]}`}>
          {paragraphs.map((p, index) => (
            <p
              className={`${styles.paragraph} ${styles[`paragraph${size}`]}`}
              key={index}
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </article>
  );
};

Collapse.propTypes = {
  size: PropTypes.oneOf([50, 75]).isRequired,
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  isDropped: PropTypes.bool,
};

Collapse.defaultProps = {
  size: 75,
  title: '',
  paragraphs: [],
  isDropped: false,
};

export default Collapse;
