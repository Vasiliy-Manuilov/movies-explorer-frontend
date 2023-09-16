import './App.css';
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

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={false} color='blue' />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header loggedIn={true} color='white' />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header loggedIn={true} color='white' />
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
  );
}

export default App;
