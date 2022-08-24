import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo className={styles.logo} title="logo" />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
