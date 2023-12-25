import  { useEffect } from 'react'

const useTitle = (title) => {
   
     
      useEffect(()=>{
        document.title = `${title}/cinmate`;
      })
     
  
  return null;
}
    
export default useTitle
