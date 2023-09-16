import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__links'>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/Vasiliy-Manuilov'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
