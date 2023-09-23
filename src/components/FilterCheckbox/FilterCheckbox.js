import './FilterCheckbox.css';

function FilterCheckbox({tumbler, setTumbler}) {    
  const switchTumbler = () => {
    setTumbler(!tumbler);        
  }  

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
