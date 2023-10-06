import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUser } from '../../utils/MainApi';

export const CurrentUserProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    reloadUser()
      .then(() => {
      setIsLoggedIn(true)
      navigate(location.pathname, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line
  }, []);

  const reloadUser = () => {
    return getUser().then((user) => {
      setCurrentUser(user);
    });
  };

  const currentUserContextValue = {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    reloadUser,
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
