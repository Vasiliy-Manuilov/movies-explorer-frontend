import { GlobalStorageContext } from '../../contexts/GlobalStorageContext';
import { useContext } from 'react';

export const useCurrentUser = () => {
  const context = useContext(GlobalStorageContext);

  if (!context) {
    throw new Error('Контекст глобального хранилища не определен');
  }

  const request = context.currentUserRequest;

  return {
    currentUser: request.data,
    setCurrentUser: request.setData,
    isLoggedIn: !!request.data,
    reloadUser: request.reload,
    isLoading: request.isLoading,
  };
};
