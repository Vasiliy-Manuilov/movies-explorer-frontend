import { Link } from 'react-router-dom';
import { LogoLink } from '../LogoLink/LogoLink';
import './FormEntrance.css';

export function FormEntrance({
  children,
  title,
  submitText,
  footerText,
  footerLinkUrl,
  footerLinkText,
  isValid,
  errorMessage,
  onSubmit,
}) {
  const submit = (event) => {
    event.preventDefault();
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <section className='form-entrance'>
      <LogoLink />
      <h2 className='form-entrance__title'>{title}</h2>
      <form noValidate onSubmit={submit}>
        {children}
        {errorMessage && (
          <div className='form-entrance__response-text'>{errorMessage}</div>
        )}
        <button
          disabled={!isValid}
          type='submit'
          className={`form-entrance__btn-submit ${
            !isValid && 'form-entrance__btn-submit_disabled'
          }`}
        >
          {submitText}
        </button>
      </form>
      <p className='form-entrance__text-under-btn'>
        {footerText}
        <Link to={footerLinkUrl} className='form-entrance__link'>
          {footerLinkText}
        </Link>
      </p>
    </section>
  );
}
