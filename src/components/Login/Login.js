import './Login.css';
import FormEntrance from '../FormEntrance/FormEntrance';

function Login() {
  return (
    <main className='login'>
      <FormEntrance
        title='Рады видеть!'        
        submit='Войти'
        question='Ещё не зарегистрированы?'
        path='/signup'
        link='Регистрация'
      />
    </main>
  );
}

export default Login;
