import React from 'react';
import Thumb from './Thumb';
import styles from './Gallery.module.css';

const Gallery = ({ items, type }) => {
  return (
    <section className={styles.container}>
      {items.map(({ id, title, cover }) => (
        <Thumb key={id} id={id} title={title} cover={cover} type={type} />
      ))}
    </section>
  );
};

export default Gallery;
