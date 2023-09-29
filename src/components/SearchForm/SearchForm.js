import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, tumbler, setTumbler, getDefaultSearchText, nameStorageKey }) {
  const [inputSearch, setInputSearch] = useState(getDefaultSearchText);
  const [isEmptyQueryError, setIsEmptyQueryError] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const activateInput = () => {
    setIsInputFocused(true)
    setIsEmptyQueryError(false)
  }

  function handleInputChange(evt) {
    setIsEmptyQueryError(false)
    setInputSearch(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputSearch) {
      setIsEmptyQueryError(true);
      return;
    }
    onSearch(inputSearch);
  }

  let searchTypeClass = ""
  if (isEmptyQueryError) searchTypeClass = "search_type_invalid"
  else if (isInputFocused) searchTypeClass = "search_type_focus"

  return (
    <section className='search-film'>
      <form
        className={`search ${searchTypeClass}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search__input"
          placeholder='Фильм'
          type='text'
          value={inputSearch || ""}
          onChange={handleInputChange}
          onFocus={activateInput}
          onBlur={() => setIsInputFocused(false)}
          required
        />
        <span className='search__error'>
          {isEmptyQueryError && 'Нужно ввести ключевое слово'}
        </span>
        <button type='submit' className='search__button'>
          Найти
        </button>
      </form>
      <FilterCheckbox tumbler={tumbler} setTumbler={setTumbler} nameStorageKey={nameStorageKey} />
    </section>
  );
}

export default SearchForm;
