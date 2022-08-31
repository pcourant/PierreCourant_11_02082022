import React, { useContext } from 'react';
import { AccomodationsContext } from '../../utils/context';
import { useFetchAccomodations } from '../../utils/hooks';
import styles from './Home.module.css';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import bannerHome from '../../assets/banner_home.png';

const Home = () => {
  const { accomodations, setAccomodations } = useContext(AccomodationsContext);

  const { isLoading, error } = useFetchAccomodations('data/logements.json', [
    accomodations,
    setAccomodations,
  ]);

  if (error) {
    return (
      <main className={styles.container}>
        <h1 className={styles.error}>
          Oups il y a eu un problème. Rafraichissez la page plus tard.
        </h1>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Banner image={bannerHome} slogan="Chez vous, partout et ailleurs" />
      {isLoading ? (
        <Loader />
      ) : (
        <Gallery items={accomodations} type="accomodation" />
      )}
    </main>
  );
};

export default Home;
