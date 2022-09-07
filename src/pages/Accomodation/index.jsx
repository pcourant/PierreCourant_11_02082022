import React, { useContext } from 'react';
import { AccomodationsContext } from '../../utils/context';
// import { useParams, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import styles from './Accomodation.module.css';
import Error from '../Error';

const Accomodation = () => {
  // const navigate = useNavigate();
  const { accomodationId } = useParams();
  const { accomodations } = useContext(AccomodationsContext);

  if (!accomodations) {
    // navigate('/PierreCourant_11_02082022/404');
    return <Error />;
  }

  const accomodation = accomodations.find(
    (accomodation) => accomodation.id === accomodationId
  );

  if (!accomodation) {
    // navigate('/PierreCourant_11_02082022/404');
    return <Error />;
  }

  // useEffect();

  const [ownerFirstName, ownerLastName] = accomodation.host.name.split(' ');
  const picturesAlts = accomodation.pictures.map((accomodation) =>
    accomodation.substring(accomodation.lastIndexOf('/') + 1)
  );

  return (
    <main className={styles.mainContainer}>
      <Carousel pictures={accomodation.pictures} alts={picturesAlts} />
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
          isByDefaultDropped={false}
        />
        <Collapse
          size={50}
          title="Équipements"
          paragraphs={accomodation.equipments}
          isByDefaultDropped={false}
        />
      </section>
    </main>
  );
};

export default Accomodation;
