import './Register.css';
import { FormEntrance } from '../FormEntrance/FormEntrance';
import { FormField } from '../FormField/FormField';
import { useValidationForm } from '../Hooks/useValidtingForm';
import { useSubmitForm } from '../Hooks/useSubmitForm';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/MainApi';
import { useCurrentUser } from '../Hooks/useCurrentUser';

function Register() {
  const { values, errors, isValid, set } = useValidationForm();
  const { submit, error } = useSubmitForm(register, onSuccess);
  const navigate = useNavigate();
  const { reloadUser } = useCurrentUser();

  function handleSubmit() {
    submit(values.name, values.email, values.password);
  }
  function onSuccess() {
    reloadUser();
    navigate('/movies', { replace: true });
  }

  return (
    <main className='register'>
      <FormEntrance
        title='Добро пожаловать!'
        submitText='Зарегистрироваться'
        footerText='Уже зарегистрированы?'
        footerLinkUrl='/signin'
        footerLinkText='Войти'
        isValid={isValid}
        onSubmit={handleSubmit}
        errorMessage={error}
      >
        <FormField
          name='name'
          type='text'
          minLength={2}
          maxLength={30}
          required
          label='Имя'
          value={values.name}
          errorMessage={errors.name}
          onChange={set}
        />
        <FormField
          name='email'
          type='email'
          minLength={2}
          maxLength={30}
          required
          label='E-mail'
          value={values.email}
          errorMessage={errors.email}
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

export default Register;
