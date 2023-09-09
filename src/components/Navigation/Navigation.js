import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ color }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav
        className={`navigation ${
          showMenu ? 'navigation_opened' : ''
        }`}
      >
        <ul className='navigation__links'>
          <li className='navigation__links-item navigation__links-item_type_main'>
            <NavLink to='/' className='navigation__link'>
              Главная
            </NavLink>
          </li>
          <li className='navigation__links-item'>
            <NavLink to='/movies' className='navigation__link'>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__links-item'>
            <NavLink to='/saved-movies' className='navigation__link'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to='/profile'
          className={`navigation__link navigation__link_profile navigation__link_profile_${color}`}
        >
          Аккаунт
        </Link>
      </nav>
      <button
        className={
          showMenu
            ? 'navigation__btn-menu-close'
            : `navigation__btn-menu navigation__btn-menu_theme_${color}`
        }
        type='button'
        onClick={handleToggleMenu}
      ></button>
    </>
  );
}

export default Navigation;
