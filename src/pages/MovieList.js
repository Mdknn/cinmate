// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import useFetch from '../hooks/useFetch'
import useTitle from '../hooks/useTitle'

export const MovieList = ({apiPath,title}) => {
  useTitle(title);
  // const [movie, setMovie] = useState([])
  const {data: movie} = useFetch(apiPath);
  return (
    <main>
     <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap sm:justify-evenly'>
        {movie.map((movie)=>(
          <Card key={movie.id} movie= {movie}/>
        ))}
        
      </div>



     </section>
    </main>
  )
}
