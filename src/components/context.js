import React, { useState, useContext } from "react";
import useFetch from './useFetch'

export const API_ENDPOINT = ` http://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("pirates of the Caribbean");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
