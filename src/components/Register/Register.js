import './Register.css';
import FormEntrance from '../FormEntrance/FormEntrance';

function Register() {
  return (
    <main className='register'>
      <FormEntrance
        title='Добро пожаловать!'
        submit='Зарегистрироваться'
        error='Что-то пошло не так...'
        question='Уже зарегистрированы?'
        path='/signin'
        link='Войти'
      >
        <label className='form-entrance__label'>
          Имя
          <input
            type='text'
            className='form-entrance__input'
            minLength='2'
            maxLength='30'
            required
            defaultValue='Виталий'
          />
          <span className='form-entrance__error'></span>
        </label>
      </FormEntrance>
    </main>
  );
}

export default Register;
