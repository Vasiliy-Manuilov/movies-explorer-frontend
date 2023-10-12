import { getSavedMovies, getUser } from '../../utils/MainApi';
import { GlobalStorageContext } from '../../contexts/GlobalStorageContext';
import { useGetRequest } from '../Hooks/useGetRequest';
import { useEffect } from 'react';

export const GlobalStorageProvider = ({ children }) => {
  const currentUserRequest = useGetRequest(getUser);
  const savedMoviesRequest = useGetRequest(getSavedMovies, [], false);

  useEffect(() => {
    if (currentUserRequest.data) {
      savedMoviesRequest.reload();
    }
    // eslint-disable-next-line
  }, [currentUserRequest.data]);

  const currentUserContextValue = {
    currentUserRequest,
    savedMoviesRequest,
  };

  return (
    <GlobalStorageContext.Provider value={currentUserContextValue}>
      {children}
    </GlobalStorageContext.Provider>
  );
};
