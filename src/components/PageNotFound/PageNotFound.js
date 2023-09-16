import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link to='/' className='not-found__link'>
        Назад
      </Link>
    </main>
  );
}

export default PageNotFound;
