/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Tag.module.css';

const Tag = ({ name }) => {
  return <p className={styles.container}>{name}</p>;
};

export default Tag;
