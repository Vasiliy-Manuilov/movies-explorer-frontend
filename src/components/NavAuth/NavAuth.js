import './NavAuth.css';
import { Link } from 'react-router-dom';

function NavAuth() {
  return (
    <nav className="nav-auth">
      <ul className="nav-auth__links">
        <li>
          <Link to="/signup" className="nav-auth__link">Регистрация</Link>
        </li>
        <li>
          <Link to="/signin" className="nav-auth__link nav-auth__link_type_green">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavAuth;