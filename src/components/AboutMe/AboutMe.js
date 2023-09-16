import './AboutMe.css';
import avatar from '../../images/avatar.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__header'>Студент</h2>

      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Василий</h3>
          <p className='about-me__job'>Веб-разработчик, 39 лет</p>
          <p className='about-me__description'>
            Я&nbsp;родился и&nbsp;живу в&nbsp;Воскресенске, Московская область.
            У&nbsp;меня есть жена и&nbsp;две лапочки дочки. Мечтаю построить
            небольшую парусную яхту и&nbsp;пройтись по&nbsp;Волге и&nbsp;Дону.
            Недавно начал кодить. После того, как пройду курс
            по&nbsp;веб-разработке, начну заниматься фриланс-заказами.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/Vasiliy-Manuilov'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img src={avatar} alt='погрудный портрет автора' className='about-me__avatar' />
      </div>
    </section>
  );
}

export default AboutMe;
