// AppContext.js
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children, value }) => (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
);
