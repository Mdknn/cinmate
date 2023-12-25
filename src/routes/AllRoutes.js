import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {MovieList,MovieDetails,Search,PageNotfound} from '../pages'


export const AllRoutes=() =>{
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
        <Route path='/' element={<MovieList apiPath="movie/now_playing" title ="Home"/>} />
        <Route path='movie/:id' element={<MovieDetails/>} />
        <Route path='movies/popular' element={<MovieList apiPath="movie/popular" title ="popular"/>} />
        <Route path='movies/top' element={<MovieList apiPath="movie/top_rated" title ="top_rated"/>} />
        <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming" title ="upcoming"/>} />
        <Route path='search' element={<Search apiPath="search/movie" />} />
        <Route path='*' element={<PageNotfound title ="PageNotfound" />} />
        {/* <Route path='' element={<MovieList/>} /> */}
      </Routes>
    </div>
  )
}
