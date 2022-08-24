import React from 'react';
// import PropTypes from 'prop-types';
import Thumb from './Thumb';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <main className={styles.container}>
      <Thumb title="Titre de la location" />
      <Thumb title="Titre de la location" />
      <Thumb title="Titre de la location" />
      <Thumb title="Titre de la location" />
      <Thumb title="Titre de la location" />
      <Thumb title="Titre de la location" />
    </main>
  );
};

export default Gallery;
