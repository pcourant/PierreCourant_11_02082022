/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Collapse.module.css';

const Collapse = ({ size, title, text, isDropped }) => {
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
        <p className={`${styles.body} ${styles[`body${size}`]}`}>{text}</p>
      )}
    </article>
  );
};

// Collapse.propTypes = {
//   size: PropTypes.oneOf([50, 75]),
// };

// Collapse.defaultProps = {
//   size: 75,
// };

export default Collapse;
