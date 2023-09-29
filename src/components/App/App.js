import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import * as MainApi from '../../utils/MainApi';

function App() {
// const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(true);
// const [currentUser, setCurrentUser] = useState({});

// useEffect(() => {
//   tokenCheck();
//   // eslint-disable-next-line
// }, []);

// const tokenCheck = () => {
//   MainApi.getUser()
//     .then((user) => {
//       setIsLoggedIn(true);
//       setCurrentUser(user);        
//       navigate('/movies', { replace: true });
//     })
//     .catch((err) => {
//       setIsLoggedIn(true);
//       console.error(err);
//     });
// };

  return (
    // <CurrentUserContext.Provider value={currentUser}>
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
            <>
              <Header loggedIn={isLoggedIn} color='white' />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header loggedIn={isLoggedIn} color='white' />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header loggedIn={true} color='white' />
              <Profile />
            </>
          }
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
