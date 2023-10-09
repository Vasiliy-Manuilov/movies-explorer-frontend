import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import { getUser } from '../../utils/MainApi';

export const CurrentUserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [savedMoviesArray, setSavedMoviesArray] = useState([]);

  useEffect(() => {
    reloadUser();
    // eslint-disable-next-line
  }, []);

  const reloadUser = () => {
    setIsLoading(true);
    return getUser()
      .then((user) => setCurrentUser(user))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const currentUserContextValue = {
    currentUser,
    isLoading,
    setCurrentUser,
    isLoggedIn: Boolean(currentUser),
    reloadUser,
    savedMoviesArray,
    setSavedMoviesArray,
  };

  return (
    <CurrentUserContext.Provider value={currentUserContextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error('Контекст текущего пользлвателя не определен');
  }

  return context;
};
