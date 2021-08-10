import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = (img) => {
  console.log(img)
  return (
    <div className="card animate__animated animate__fadeIn" >
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  )
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
export default GifGridItem;