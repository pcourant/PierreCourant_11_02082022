/* eslint-disable comma-dangle */
import React, { useEffect, useContext } from 'react';
import { AccomodationsContext } from '../../utils/context';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import styles from './Accomodation.module.css';

const Accomodation = () => {
  const { accomodationId } = useParams();
  const { accomodations, setAccomodations } = useContext(AccomodationsContext);
  // const [isDataLoading, setDataLoading] = useState(false);
  let accomodationIndex = -1;
  let accomodation = {
    id: '',
    title: '',
    cover: '',
    pictures: [],
    description: '',
    host: {
      name: '',
      picture: '',
    },
    rating: '',
    location: '',
    equipments: [],
    tags: [],
  };

  if (accomodations) {
    accomodationIndex = accomodations.findIndex(
      (accomodation) => accomodation.id === accomodationId
    );
    if (accomodationIndex !== -1) {
      accomodation = accomodations[accomodationIndex];
    }
  }

  console.log(accomodationId);
  console.log(accomodation);

  useEffect(() => {
    async function fetchAccomodations() {
      // setDataLoading(true);
      try {
        const response = await fetch('../data/logements.json');
        const data = await response.json();
        setAccomodations(data);
      } catch (err) {
        console.log(err);
        // setError(true);
      } finally {
        // setDataLoading(false);
        accomodation = accomodations.find(
          (accomodation) => accomodation.id === accomodationId
        );
        console.log(accomodations);
      }
    }

    if (accomodationIndex === -1) fetchAccomodations();
  }, []);

  const [ownerFirstName, ownerLastName] = accomodation.host.name.split(' ');

  return (
    <main className={styles.mainContainer}>
      <Carousel pictures={accomodation.pictures} alts={accomodation.pictures} />
      <header className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{accomodation.title}</h1>
          <p className={styles.location}>{accomodation.location}</p>
          <div className={styles.tagContainer}>
            {accomodation.tags.map((tag, index) => (
              <Tag key={`${tag}_${index}`} name={tag} />
            ))}
          </div>
        </div>
        <div className={styles.ownerRatingContainer}>
          <div className={styles.ownerContainer}>
            <div className={styles.ownerNameContainer}>
              <p className={styles.ownerName}>{ownerFirstName}</p>
              <p className={styles.ownerName}>{ownerLastName}</p>
            </div>
            <img
              className={styles.ownerPicture}
              src={accomodation.host.picture}
              alt={`picture of ${accomodation.host.name}`}
            />
          </div>
          <Rating />
        </div>
      </header>
      <section className={styles.sectionContainer}>
        <Collapse
          size={50}
          title="Description"
          paragraphs={[`${accomodation.description}`]}
          isDropped={false}
        />
        <Collapse
          size={50}
          title="Équipements"
          paragraphs={accomodation.equipments}
          isDropped={false}
        />
      </section>
    </main>
  );
};

export default Accomodation;
