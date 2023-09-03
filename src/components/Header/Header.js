import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <img
          alt='Логотип Movies Explorer'
          className='header__logo'
          src={logo}
        />
      </Link>
    </header>
  );
}

export default Header;
