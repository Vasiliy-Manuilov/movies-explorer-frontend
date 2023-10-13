import { Link } from 'react-router-dom';
import { LogoLink } from '../LogoLink/LogoLink';
import './FormEntrance.css';
import { Button } from '../Button/Button';

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
        <div className='form-entrance__container-button'>
          {errorMessage && (
            <div className='form-entrance__response-text'>{errorMessage}</div>
          )}
          <Button type='submit' disabled={!isValid}>
            {submitText}
          </Button>
        </div>
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
