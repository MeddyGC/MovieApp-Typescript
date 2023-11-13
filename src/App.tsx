import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import SearchHeader from './components/SearchHeader';
import MovieList from './components/MovieList';
import AddFavorite from './components/AddFavorite';
import FavoritesPage from './components/FavoritesPage';
import { BrowserRouter } from 'react-router-dom';

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
  const [favorites, setFavorites] = useState<Movies[]>([]);

  // Memoize the fetchMovies function using useCallback
  const fetchMovies = useCallback(async () => {
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
  }, [searchText]);

  // Trigger the fetchMovies function whenever searchText changes
  useEffect(() => {
    // Avoid making the API call if searchText is empty
    if (searchText.trim() !== '') {
      fetchMovies();
    } else {
      // If searchText is empty, fetch popular movies
      fetchPopularMovies();
    }
  }, [searchText, fetchMovies]);

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

  const addToFavorites = (movie: Movies) =>  {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
  
    console.log('Is favorite before:', isFavorite);
  
    if (!isFavorite) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      localStorage.setItem('favorites', JSON.stringify(newFavoriteList));
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  
    console.log('Favorites after:', favorites);
  };
  
return (
    <>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <SearchHeader onSearch={handleSearch} />
      </div>
      <div className='row'>
        <MovieList movies={movies} handleFavoritesClick={addToFavorites} favoriteComponent={AddFavorite} />
      </div>
      <div className='row'>
      <header/>
      <FavoritesPage
          favorites={favorites}
          handleFavoritesClick={addToFavorites}
          favoriteComponent={AddFavorite}
        />
      </div>
    </>
  );
 
  

  
}

export default App;
