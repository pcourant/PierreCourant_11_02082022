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
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          to="/about"
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
