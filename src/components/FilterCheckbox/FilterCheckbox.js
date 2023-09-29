import { useEffect } from 'react';
import './FilterCheckbox.css';

const STORAGE_TUMBLER_KEY = 'shortFilmsTumbler'
const getStorageTumbler = () => JSON.parse(localStorage.getItem(STORAGE_TUMBLER_KEY));
const setStorageTumbler = (tumbler) => localStorage.setItem(STORAGE_TUMBLER_KEY, tumbler);

function FilterCheckbox({ tumbler, setTumbler }) {
  const switchTumbler = () => {
    setTumbler(!tumbler);
    setStorageTumbler(!tumbler)
  };

  useEffect(() => {
    const storageTumbler = getStorageTumbler()

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
