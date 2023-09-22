import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {
  const [tumbler, setTumbler] = useState(false);
  const switchTumbler = () => {
    setTumbler(!tumbler);
  }
  console.log(tumbler);
  return (
    <div className='filterCheckbox'>
      <label className='filterCheckbox__tumbler' htmlFor='checkbox'>
        <input className='filterCheckbox__checkbox' type='checkbox' id='checkbox' checked={tumbler} onChange={switchTumbler} />
        <span className='filterCheckbox__inner' />
      </label>
      <p className='filterCheckbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
