import React, { useState, createContext } from 'react';

export const AccomodationsContext = createContext();

export const AccomodationsProvider = ({ children }) => {
  const [accomodations, setAccomodations] = useState([]);

  return (
    <AccomodationsContext.Provider value={{ accomodations, setAccomodations }}>
      {children}
    </AccomodationsContext.Provider>
  );
};
