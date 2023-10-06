import './Login.css';
import { FormEntrance } from '../FormEntrance/FormEntrance';
import { FormField } from '../FormField/FormField';
import { useValidationForm } from '../Hooks/useValidtingForm';
import { login } from '../../utils/MainApi';
import { useSubmitForm } from '../Hooks/useSubmitForm';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../Hooks/useCurrentUser';

function Login() {
  const { values, errors, isValid, set } = useValidationForm();
  const { submit, error } = useSubmitForm(login, onSuccess);
  const navigate = useNavigate();
  const { reloadUser, setIsLoggedIn } = useCurrentUser();

  function handleSubmit() {
    submit(values.email, values.password);
  }
  function onSuccess() {
    setIsLoggedIn(true); 
    reloadUser();
    navigate('/movies', { replace: true });
  }

  return (
    <main className='login'>
      <FormEntrance
        title='Рады видеть!'
        submitText='Войти'
        footerText='Еще не зарегистрированы?'
        footerLinkUrl='/signup'
        footerLinkText='Зарегистрироваться'
        isValid={isValid}
        onSubmit={handleSubmit}
        errorMessage={error}
      >
        <FormField
          name='email'
          type='email'
          value={values.email}
          errorMessage={errors.email}
          minLength={2}
          maxLength={30}
          required
          label='E-mail'
          onChange={set}
        />
        <FormField
          name='password'
          type='password'
          value={values.password}
          errorMessage={errors.password}
          minLength={4}
          maxLength={20}
          required
          label='Пароль'
          onChange={set}
        />
      </FormEntrance>
    </main>
  );
}

export default Login;
