import './Profile.css';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import { useState } from 'react';
import { useValidationForm } from '../Hooks/useValidtingForm';
import { Button } from '../Button/Button';
import { useSubmitForm } from '../Hooks/useSubmitForm';
import { updateUser, logout } from '../../utils/MainApi';
import { useNotification } from '../Hooks/useNotification';
import { EMAIL_PATTERN } from "../../utils/constants.js";

function Profile() {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const [isEditing, setIsEditing] = useState(false);
  const { isValid, set, errors, values, isChanged } = useValidationForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const isSubmitAvailable = isChanged && isValid;
  const { submit, error } = useSubmitForm(updateUser, onSuccess);
  const { notification, notify, clear } = useNotification();

  function handleEditProfile() {
    setIsEditing(true);
    clear();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      submit(values.name, values.email);
    }
  };

  function onSuccess() {
    setCurrentUser(values);
    setIsEditing(false);
    notify('Данные успешно обновлены!');
  }

  function handleLogout() {
    logout()
      .then(() => {
        setCurrentUser(null);
        localStorage.clear();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Header loggedIn={!!currentUser} color='white' />
      <main className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='profile__form-fieldset'>
            <label className='profile__label'>
              Имя
              <input
                name='name'
                value={values.name}
                onChange={set}
                className='profile__input'
                type='text'
                minLength='2'
                maxLength='40'
                disabled={!isEditing}
                required
              />
              <div className='profile__error'>{errors.name}</div>
            </label>
            <div className='profile__devider'></div>
            <label className='profile__label'>
              E-mail
              <input
                name='email'
                value={values.email}
                pattern={EMAIL_PATTERN}
                onChange={set}
                className='profile__input'
                type='email'
                minLength='2'
                maxLength='40'
                disabled={!isEditing}
                required
              />
              <div className='profile__error'>{errors.email}</div>
            </label>
          </fieldset>
          <div className='profile__container-button'>
            {notification && (
              <div className='profile__response-text profile__response-text_successful-res'>
                {notification}
              </div>
            )}
            {error && <div className='profile__response-text'>{error}</div>}
            {!isEditing && (
              <button className='profile__btn' onClick={handleEditProfile}>
                Редактировать
              </button>
            )}
            {isEditing && (
              <Button type='submit' disabled={!isSubmitAvailable}>
                Сохранить
              </Button>
            )}
          </div>
        </form>
        {!isEditing && (
          <button
            className='profile__btn profile__btn_theme_red'
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        )}
      </main>
    </>
  );
}

export default Profile;
