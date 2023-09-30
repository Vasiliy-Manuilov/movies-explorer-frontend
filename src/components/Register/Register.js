import './Register.css';
import FormEntrance from '../FormEntrance/FormEntrance';

function Register() {
  return (
    <main className='register'>
      <FormEntrance
        title='Добро пожаловать!'
        submit='Зарегистрироваться'        
        question='Уже зарегистрированы?'
        path='/signin'
        link='Войти'
      >
      </FormEntrance>
    </main>
  );
}

export default Register;
