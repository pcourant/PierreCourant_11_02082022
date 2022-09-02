import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo className={styles.logo} title="logo" />
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          to="/PierreCourant_11_02082022/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          to="/PierreCourant_11_02082022/about"
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
