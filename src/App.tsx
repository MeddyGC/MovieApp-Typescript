import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import SearchHeader from './components/SearchHeader';

interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string;
  // Add other properties of your movie object here
}

function App() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const API_KEY = 'ee54a6521282dcae48b2a1ecf714fcbd';
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const SEARCH_API = MOVIE_API + "search/movie";
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`${SEARCH_API}`, {
          params: {
            api_key: API_KEY,
            query: searchText
          }
        });

        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    // Trigger the API call whenever searchText changes
    if (searchText.trim() !== '') {
      fetchMovies();
    } else {
      // If searchText is empty, fetch popular movies
      fetchPopularMovies();
    }
  }, [searchText]);

  const fetchPopularMovies = async () => {
    try {
      const { data } = await axios.get(`${DISCOVER_API}`, {
        params: {
          api_key: API_KEY
        }
      });

      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <>
      <div className='App'>
        <SearchHeader onSearch={handleSearch} />
      </div>
      <div className='container fluid App'>
        {movies.map((items) => (
          <div className='movieContainer' key={items.id}>
            {items.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={`${items.title} Poster`} />
            )}
            <p>{items.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
