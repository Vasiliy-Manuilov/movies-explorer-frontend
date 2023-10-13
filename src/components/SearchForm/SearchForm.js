import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const DEFAULT_SEARCH_PARAMS = {
  query: '',
  shortsOnly: false,
};
function SearchForm({ onSearch, defaultSearchParams, isQueryRequired }) {
  const [params, setParams] = useState(
    defaultSearchParams || DEFAULT_SEARCH_PARAMS
  );

  const [isEmptyQueryError, setIsEmptyQueryError] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const activateInput = () => {
    setIsInputFocused(true);
    setIsEmptyQueryError(false);
  };

  function handleInputChange(evt) {
    setIsEmptyQueryError(false);
    setParams({ ...params, query: evt.target.value });
  }

  function setShortsOnly(checked) {
    if (isQueryRequired && !params.query) {
      setIsEmptyQueryError(true);
      return;
    }
    const newParams = { ...params, shortsOnly: checked };
    setParams(newParams);
    onSearch(newParams);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!params.query) {
      setIsEmptyQueryError(true);
      return;
    }
    onSearch(params);
  }

  let searchTypeClass = '';
  if (isEmptyQueryError) searchTypeClass = 'search_type_invalid';
  else if (isInputFocused) searchTypeClass = 'search_type_focus';

  return (
    <section className='search-film'>
      <form
        className={`search ${searchTypeClass}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          value={params.query || ''}
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
      <FilterCheckbox
        checked={params.shortsOnly}
        onChange={setShortsOnly}
        label='Короткометражки'
      />
    </section>
  );
}

export default SearchForm;
