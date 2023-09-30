import './FormEntrance.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function FormEntrance(props) {
  const { title, submit, question, link, path } = props;
  const {pathname}  = useLocation();

  return (
    <section className='form-entrance'>
      <Link to='/'>
        <img
          alt='Логотип Movies Explorer'
          className='form-entrance__logo'
          src={logo}
        />
      </Link>
      <h2 className='form-entrance__title'>{title}</h2>
      <form noValidate>
        {pathname === '/signup'  && (<label className='form-entrance__label'>
          Имя
          <input
            type='text'
            className='form-entrance__input'
            minLength='2'
            maxLength='30'
            required
          />
          <span className='form-entrance__error'></span>
        </label>)}
        <label className='form-entrance__label'>
          E-mail
          <input
            type='email'
            className='form-entrance__input'
            minLength='2'
            maxLength='30'
            required
          />
          <span className='form-entrance__error'></span>
        </label>
        <label className='form-entrance__label'>
          Пароль
          <input
            type='password'
            className='form-entrance__input'
            minLength='4'
            maxLength='20'
            required
          />
          <span className='form-entrance__error'></span>
        </label>
        <button type='submit' className='form-entrance__btn-submit'>
          {submit}
        </button>
      </form>
      <p className='form-entrance__text-under-btn'>
        {question}
        <Link to={path} className='form-entrance__link'>
          {link}
        </Link>
      </p>
    </section>
  );
}

export default FormEntrance;
