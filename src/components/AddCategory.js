import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    console.log('->handleSubmit', inputValue, '<--')
    e.preventDefault()
    console.log(inputValue)
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }

  }
  return (
    <>
      <h2>Add Category</h2>
      <p>{inputValue}</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Category Name'
        />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;