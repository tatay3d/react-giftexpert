const getGifts=async(category)=>{
    const urlQuery=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=K1Vz8xHFeC5uM20qT3Wzm8sj3ChZl6OB`;
    const resp=await fetch(urlQuery);
    const {data}=await resp.json();
   
   
    const gifs=data.map(img=>{
        return {
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }})
    
  /*
    //Desestructuración anidada
 
    const gifsDessestructurado=data.map(({id:0,title:0,uri:{images:[]}})=>{
        return {
        id,
        title,
        uri,
    }})
      console.log(gifsDessestructurado);
   */
  
  
    return gifs;//setImages(gifs);
}
export default getGifts;