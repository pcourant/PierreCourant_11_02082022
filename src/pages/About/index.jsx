import React from 'react';
import styles from './About.module.css';
import Banner from '../../components/Banner';
import bannerAbout from '../../assets/mountains.png';
import Collapse from '../../components/Collapse';

const About = () => {
  return (
    <main className={styles.container}>
      <Banner image={bannerAbout} large={true} />
      <Collapse
        size={75}
        title="Fiabilité"
        paragraphs={[
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        ]}
        isDropped={true}
      />
      <Collapse
        size={75}
        title="Respect"
        paragraphs={[
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        ]}
        isDropped={true}
      />
      <Collapse
        size={75}
        title="Service"
        paragraphs={[
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        ]}
        isDropped={true}
      />
      <Collapse
        size={75}
        title="Sécurité"
        paragraphs={[
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        ]}
        isDropped={true}
      />
    </main>
  );
};

export default About;
