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
  
  const API_KEY= 'ee54a6521282dcae48b2a1ecf714fcbd'
  const DISCOVER_API = MOVIE_API + "discover/movie"
  const SEARCH_API = MOVIE_API + "search/movie"
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [movie, setMovie] = useState({title: "Loading Movies"})

  const popular = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    fetchMovies();
  },[]);

  const fetchMovies = async () => {
   
   

  const {data} = await axios.get(`${searchText ? SEARCH_API : DISCOVER_API}`, {
      params: {
          api_key: API_KEY,
          query: searchText
      }
  })

  console.log(data.results[0])
  setMovies(data.results)
  setMovie(data.results[0])

  
}


const handleSearch = (searchText: string) => {
  setSearchText(searchText);
  fetchMovies(); // Call fetchMovies within handleSearch to access searchText
};
    
  

  

	return (
    <><div className='App'>
      <SearchHeader onSearch={handleSearch}/>
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
