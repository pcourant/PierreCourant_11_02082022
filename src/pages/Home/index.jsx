import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import styles from './Home.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Gallery />
    </div>
  );
};

export default index;
