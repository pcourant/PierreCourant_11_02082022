import React from 'react';
import styles from './Home.module.css';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import bannerHome from '../../assets/banner_home.png';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner image={bannerHome} slogan="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
};

export default Home;
