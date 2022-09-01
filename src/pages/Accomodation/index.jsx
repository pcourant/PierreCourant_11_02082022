import React, { useContext } from 'react';
import { AccomodationsContext } from '../../utils/context';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import styles from './Accomodation.module.css';

const Accomodation = () => {
  const { accomodationId } = useParams();
  const { accomodations } = useContext(AccomodationsContext);

  const accomodation = accomodations.find(
    (accomodation) => accomodation.id === accomodationId
  );

  if (!accomodation) {
    return (
      <main className={styles.mainContainer}>
        <h1 className={styles.error}>
          {"Oups il y a eu un problème. Retournez sur la page d'accueil."}
        </h1>
      </main>
    );
  }

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
          isByDefaultDropped={true}
        />
        <Collapse
          size={50}
          title="Équipements"
          paragraphs={accomodation.equipments}
          isByDefaultDropped={true}
        />
      </section>
    </main>
  );
};

export default Accomodation;
