import './Navigation.css';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  // const [showMenu, setShowMenu] = useState(false);

  // function handleToggleMenu() {
  //   setShowMenu(true);
  // };

  return (
    <nav className="navigation">
     <NavLink to="/profile" className="navigation__link navigation__link_type_green">Аккаунт</NavLink>
    </nav>
  )
}

export default Navigation;