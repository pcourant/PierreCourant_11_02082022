import React, { useEffect, useContext } from 'react';
import { AccomodationsContext } from '../../utils/context';
import styles from './Home.module.css';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import bannerHome from '../../assets/banner_home.png';

const Home = () => {
  const { accomodations, setAccomodations } = useContext(AccomodationsContext);
  // const [accomodations, setAccomodations] = useState([]);
  // const [isDataLoading, setDataLoading] = useState(false);

  if (accomodations.length === 0) {
    useEffect(() => {
      async function fetchAccomodations() {
        // setDataLoading(true);
        try {
          const response = await fetch('data/logements.json');
          const data = await response.json();
          setAccomodations(data);
        } catch (err) {
          console.log(err);
          // setError(true);
        } finally {
          // setDataLoading(false);
        }
      }

      fetchAccomodations();
    }, []);
  }

  return (
    <main className={styles.container}>
      <Banner image={bannerHome} slogan="Chez vous, partout et ailleurs" />
      <Gallery items={accomodations} type="accomodation" />
    </main>
  );
};

export default Home;
