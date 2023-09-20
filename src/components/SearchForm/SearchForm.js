import './SearchForm.css';
import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchClick, inputErrorText, cancelingErrorText }) {
  const [inputSearch, setInputSearch] = useState(''); 
  const [inputLine, setInputLine] = useState('white');  

function activeCursor() {
  setInputLine('blue');
  if (inputErrorText) {
    cancelingErrorText(false);
  }
}

function notActiveCursor() {
  setInputLine('white');
}

useEffect(() => {
  if(inputErrorText) {
    setInputLine('red');
  }
},[inputErrorText])

  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(inputSearch);
  }



  return (
    <section className='search-film'>
      <form className={`search search_type_${inputLine}`} onSubmit={handleSubmit} noValidate>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          value={inputSearch}
          onChange={handleInputChange}
          onFocus={activeCursor}
          onBlur={notActiveCursor}
          required
        />
        <span className='search__error'>{inputErrorText && 'Нужно ввести ключевое слово'}</span>
        <button type='submit' className='search__button'>
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
