import './Header.css';
import { Link } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header({ loggedIn, color }) {
  const colorMenu = color;
  return (
    <header className={`header header_theme_${color}`}>
      <Link to='/' className='header__link'>
        <img
          alt='Логотип Movies Explorer'
          className='header__logo'
          src={logo}
        />
      </Link>
      {loggedIn ? <Navigation color={colorMenu} /> : <NavAuth />}
    </header>
  );
}

export default Header;
