import React from 'react'
import PropTypes from 'prop-types'

const Gift = ({id,title,url}) => {
   
 
 return (
     <div className='card animate__animated animate__fadeIn ' >
      <img src={url} alt={title}></img>
      <p>{id}</p>
     </div>
 )
  
}

Gift.propTypes={
    props: PropTypes.array
}

export default Gift