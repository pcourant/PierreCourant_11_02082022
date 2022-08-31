import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.css';

const Tag = ({ name }) => {
  return <p className={styles.container}>{name}</p>;
};

Tag.propTypes = {
  name: PropTypes.string,
};

Tag.defaultProps = {
  name: '',
};

export default Tag;
