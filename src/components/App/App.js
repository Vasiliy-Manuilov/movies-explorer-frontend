import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={isLoggedIn} color='blue' />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <ProtectedRoute>
              <>
                <Header loggedIn={isLoggedIn} color='white' />
                <Movies />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute>
              <>
                <Header loggedIn={isLoggedIn} color='white' />
                <SavedMovies />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <>
                <Header loggedIn={isLoggedIn} color='white' />
                <Profile />
              </>
            </ProtectedRoute>
          }
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
