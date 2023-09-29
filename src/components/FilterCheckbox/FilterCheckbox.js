import { useEffect } from 'react';
import './FilterCheckbox.css';

const getStorageTumbler = (nameStorageKey) => JSON.parse(localStorage.getItem(nameStorageKey));
const setStorageTumbler = ( nameStorageKey, tumbler) => localStorage.setItem(nameStorageKey, tumbler);

function FilterCheckbox({ tumbler, setTumbler, nameStorageKey }) {

  const switchTumbler = () => {
    setTumbler(!tumbler);
    setStorageTumbler( nameStorageKey, !tumbler)
  };

  useEffect(() => {
    const storageTumbler = getStorageTumbler(nameStorageKey);

    if (storageTumbler === true) {
      setTumbler(storageTumbler);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='filterCheckbox'>
      <label className='filterCheckbox__tumbler' htmlFor='checkbox'>
        <input
          className='filterCheckbox__checkbox'
          type='checkbox'
          id='checkbox'
          checked={tumbler}
          onChange={switchTumbler}
        />
        <span className='filterCheckbox__inner' />
      </label>
      <p className='filterCheckbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
