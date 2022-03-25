import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { getData, addData } from '../utils/firebase';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [mode, setMode] = useState('dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [queryParams, setQueryParams] = useState('chicken');
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchDataDB() {
      const d = await getData();
      setFavourites(d);
    }
    fetchDataDB();
  }, []);

  function toggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  const appState = {
    toggleTheme,
    mode,
    searchTerm,
    setSearchTerm,
    favourites,
    setFavourites,
    queryParams,
    setQueryParams,
  };
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
