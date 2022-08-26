/* eslint-disable comma-dangle */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AccomodationsContext = createContext();

export const AccomodationsProvider = ({ children }) => {
  const [accomodations, setAccomodations] = useState([]);

  return (
    <AccomodationsContext.Provider value={{ accomodations, setAccomodations }}>
      {children}
    </AccomodationsContext.Provider>
  );
};

AccomodationsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
