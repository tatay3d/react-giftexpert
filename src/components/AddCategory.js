import React,{useState} from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
 
  const[inputValue,setInputValue]=useState('');
  const handleInput=(e)=>{
      setInputValue(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputValue.trim().length==0)   {
        return;
    }
    setCategories(inputValue);
    setInputValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            placeholder="Escribe una categoría"
            onChange={handleInput}
            
        />
    </form>
  )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired,
}