import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import PropTypes from 'prop-types'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  // const categories = ['One punch', 'samurai X', 'Dragon ball', 'One piece'];
  const [categories, setCategories] = useState(['One piece']);

  // const handleAddCategory = () => {
  //   const newCategories = [...categories, 'HunterxHunter'];
  //   setCategories(newCategories);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleAddCategory} >Agregar</button> */}
      <hr />
      <ol>
        {categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        ))}
      </ol>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default GifExpertApp;