import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <header>
      <h1>Kasa</h1>
      <nav>
        <NavLink to="/home">Accueil</NavLink> |{' '}
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
};

export default index;
