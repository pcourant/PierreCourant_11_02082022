/* eslint-disable comma-dangle */
import React from 'react';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import styles from './Accomodation.module.css';
// import Collapse from '../../components/Collapse';

const Accomodation = () => {
  return (
    <main className={styles.mainContainer}>
      <Carousel
        pictures={[
          'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg',
        ]}
        alts={['accommodation-1-3']}
      />
      <header className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Paris center, on the romantic Canal Saint-Martin
          </h1>
          <p className={styles.location}>Paris, Île-de-France</p>
          <div className={styles.tagContainer}>
            <Tag name="Cozy" />
            <Tag name="Canal" />
            <Tag name="Paris 10" />
          </div>
        </div>
        <div className={styles.ownerRatingContainer}>
          <div className={styles.ownerContainer}>
            <div className={styles.ownerNameContainer}>
              <p className={styles.ownerName}>Alexandre</p>
              <p className={styles.ownerName}>Dumas</p>
            </div>
            <img
              className={styles.ownerPicture}
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg"
              alt=""
            />
            {/* <div className={styles.ownerNoPicture} /> */}
          </div>
          <Rating />
        </div>
      </header>
      <section className={styles.sectionContainer}>
        {/* Collapse = ({(size, title, paragraphs, isDropped)}) */}
        <Collapse
          size={50}
          title="Description"
          paragraphs={[
            "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).",
          ]}
          isDropped={true}
        />
        <Collapse
          size={50}
          title="Équipements"
          paragraphs={[
            'Wi-fi',
            'Sèche Cheveux',
            'Machine à laver',
            'Parking',
            'Lit King Size',
            'Ascenseur',
          ]}
          isDropped={true}
        />
      </section>
    </main>
  );
};

export default Accomodation;
