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
      <nav className={`navigation ${showMenu ? 'navigation_opened' : ''}`}>
        <div className='navigation__container'>
          <ul className='navigation__links'>
            <li className='navigation__links-item navigation__links-item_type_main'>
              <NavLink to='/' className='navigation__link'>
                Главная
              </NavLink>
            </li>
            <li className='navigation__links-item'>
              <NavLink to='/movies' className={`navigation__link navigation__link_theme_${color}`}>
                Фильмы
              </NavLink>
            </li>
            <li className='navigation__links-item'>
              <NavLink to='/saved-movies' className={`navigation__link navigation__link_theme_${color}`}>
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
        </div>
      </nav>
      <button
        className={
          showMenu
            ? 'btn-close-sidebar'
            : `btn-burger btn-burger_theme_${color}`
        }
        type='button'
        onClick={handleToggleMenu}
      ></button>
    </>
  );
}

export default Navigation;
