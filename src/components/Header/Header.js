import './Header.css';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import { LogoLink } from '../LogoLink/LogoLink';

function Header({ loggedIn, color }) {
  return (
    <header className={`header header_theme_${color}`}>
      <LogoLink />
      {loggedIn ? <Navigation color={color} /> : <NavAuth />}
    </header>
  );
}

export default Header;
