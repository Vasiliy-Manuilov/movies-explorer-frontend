import './Profile.css';

function Profile() {
  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <fieldset className='profile__form-fieldset'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              minLength='2'
              maxLength='40'
              required
              defaultValue='Виталий'
            />
          </label>
          <div className='profile__form-line'></div>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='text'
              minLength='2'
              maxLength='40'
              required
              defaultValue='pochta@yandex.ru'
            />
          </label>
        </fieldset>
        <button className='profile__btn'>Редактировать</button>
      </form>
      <button className='profile__btn profile__btn_theme_red'>Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
