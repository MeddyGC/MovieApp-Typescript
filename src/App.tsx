import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { response } from 'express';
import SearchHeader from './components/SearchHeader';











interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string
  // Add other properties of your movie object here
}

function App()  {
	const MOVIE_API = "https://api.themoviedb.org/3/";
  
  const api_key= 'ee54a6521282dcae48b2a1ecf714fcbd'
  
  const [movies, setMovies] = useState<Movies[]>([]);
  //const [searchText, setSearchValue] = useState<string>('');
  

  const popular = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    fetchMovies();
  },[]);

  const fetchMovies = () => {
   
    axios.get(`${popular}?api_key=${api_key}`).then((response) => {
      const result = response.data.results;
      console.log(result)
      setMovies(result)
    })
  }

	return (
    <><div className='App'>
      <SearchHeader onSearch={fetchMovies}/>
    </div><div className='container fluid App'>

        {movies.map((items) => (
          <div className='movieContainer' key={items.id}>

            {items.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={`${items.title} Poster`} />
            )}

            <p>{items.title}</p>
          </div>
        ))}
      </div></>
	);
  }
export default App; 
