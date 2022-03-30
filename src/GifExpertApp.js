import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

  
  const [categorias,setCategories]=useState(["One Punch"]);

  const handleAdd=(value)=>{
    //setCategories([...categorias,"Hunter"]);
    console.log(value);
    setCategories(cat=>[value,...cat]);
  }

  
  return (
    <>
    <h2>GisftExpertApp</h2>
    <AddCategory setCategories={handleAdd}/>
    <hr />    
   
        {
            categorias.map(category=>(
                 //<li key={category}> {category}</li>               
                 <GifGrid 
                 key={category}
                 category={category}
                 />
                ))
        }
  
    </>
  )
}


export default GifExpertApp