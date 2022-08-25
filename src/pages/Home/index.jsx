import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import bannerHome from '../../assets/banner_home.png';

const Home = () => {
  const [accomodations, setAccomodations] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchAccomodations() {
      setDataLoading(true);
      try {
        const response = await fetch('data/logements.json');
        const data = await response.json();
        setAccomodations(data);
      } catch (err) {
        console.log(err);
        // setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchAccomodations();
  }, []);

  console.log(isDataLoading);

  return (
    <main className={styles.container}>
      <Banner image={bannerHome} slogan="Chez vous, partout et ailleurs" />
      <Gallery accomodations={accomodations} />
    </main>
  );
};

export default Home;
