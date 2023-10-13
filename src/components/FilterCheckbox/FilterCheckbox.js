import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange, label }) {

  const switchTumbler = () => onChange(!checked);

  return (
    <div className='filterCheckbox'>
      <label className='filterCheckbox__tumbler' htmlFor='checkbox'>
        <input
          className='filterCheckbox__checkbox'
          type='checkbox'
          id='checkbox'
          checked={checked}
          onChange={switchTumbler}
        />
        <span className='filterCheckbox__inner' />
      </label>
      <p className='filterCheckbox__text'>{ label }</p>
    </div>
  );
}

export default FilterCheckbox;
