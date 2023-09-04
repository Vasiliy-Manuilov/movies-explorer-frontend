import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import Footer from '../Footer/Footer';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={(
        <>
          <Header />
          <Main />
        </>  
        )} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
