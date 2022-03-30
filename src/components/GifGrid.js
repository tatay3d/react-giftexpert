import React from 'react'
import { useFecthGifts } from '../hooks/useFecthGifs'
//import getGifts from '../helpers/getGifts';
import Gift from './Gift';

export const GifGrid = ({category}) => {
  const {data:images,loading}=useFecthGifts(category);   
  return (
    <div key={category}>
    <h3>{category}</h3>  
    {loading && <p>Loading</p>}
    <div className='card-grid  animate__animated animate__fadeInUpBig'>
         
            {images.map(images=>(              
                 <Gift 
                 key={images.id}
                   
                     {...images}
                 />
            ))}  
        
    </div>
    </div>
  )
}
