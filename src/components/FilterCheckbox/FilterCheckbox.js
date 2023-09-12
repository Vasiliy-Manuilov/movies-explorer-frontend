import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filterCheckbox'>
      <label className='filterCheckbox__tumbler' htmlFor='checkbox'>
        <input className='filterCheckbox__checkbox' type='checkbox' id='checkbox' />
        <span className='filterCheckbox__inner' />
      </label>
      <p className='filterCheckbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
