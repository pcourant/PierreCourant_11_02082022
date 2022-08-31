import React from 'react';
import PropTypes from 'prop-types';
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

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      cover: PropTypes.string,
    })
  ),
  type: PropTypes.string,
};

Gallery.defaultProps = {
  items: [{ id: 'defaultID', title: 'default title', cover: '' }],
  type: 'default type',
};

export default Gallery;
