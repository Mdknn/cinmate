import React from 'react'
import useFetch from '../hooks/useFetch';
import { Card } from '../components/Card';
import { useSearchParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchparam]= useSearchParams();
  const queryTerm = searchparam.get("q")
  const {data: movie} = useFetch(apiPath,queryTerm);
  useTitle(`Search for result ${queryTerm}`);
  return (

    <main>
    <section>
      <p className='text-black dark:text-white'>{movie.length === 0 ? `Not found '${queryTerm}'` : `Found Result '${queryTerm}'`}</p>
    </section>
     <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap'>
        {movie.map((movie)=>(
          <Card key={movie.id} movie= {movie}/>
        ))}
        
      </div>



     </section>
    </main>
  )
}
