import  { useEffect, useState } from 'react'

const useFetch = (apiPath,queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    useEffect(()=>{
        async function fetchMovie (){
          const response = await fetch(url)
          const data = await response.json();
          setData(data.results)
        }
        fetchMovie();
      },[url])
  return {data}  
     
}

export default useFetch