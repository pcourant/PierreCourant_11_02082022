/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Thumb from './Thumb';
import styles from './Gallery.module.css';

const Gallery = ({ accomodations }) => {
  return (
    <section className={styles.container}>
      {accomodations.map(({ id, title, cover }) => (
        <Thumb key={id} title={title} cover={cover} />
      ))}
    </section>
  );
};

export default Gallery;
