import './Header.css';
import { Link } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header({loggedIn}) {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <img
          alt='Логотип Movies Explorer'
          className='header__logo'
          src={logo}
        />
      </Link>
      {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
}

export default Header;
