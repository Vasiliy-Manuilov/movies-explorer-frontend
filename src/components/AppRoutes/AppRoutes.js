import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Loader from '../Loader/Loader';

export const AppRoutes = () => {
  const { isLoggedIn, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route
        path='/movies'
        element={<ProtectedRoute isAllowed={isLoggedIn} component={Movies} />}
      />
      <Route
        path='/saved-movies'
        element={
          <ProtectedRoute isAllowed={isLoggedIn} component={SavedMovies} />
        }
      />
      <Route
        path='/profile'
        element={<ProtectedRoute isAllowed={isLoggedIn} component={Profile} />}
      />
      <Route
        path='/signup'
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} component={Register} />
        }
      />
      <Route
        path='/signin'
        element={<ProtectedRoute isAllowed={!isLoggedIn} component={Login} />}
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
