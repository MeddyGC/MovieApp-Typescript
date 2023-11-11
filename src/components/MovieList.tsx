import React from 'react';

interface MovieListProps {
  movies: Movies[];
  handleFavoritesClick: (movie: Movies) => void; 
  favoriteComponent: React.FC;
}

interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, handleFavoritesClick, favoriteComponent: FavoriteComponent }) => {
  return (
    <div className='container fluid App'>
      {movies.map((items) => (
        <div className='movieContainer' key={items.id}>
          {items.poster_path && (
            <div className='overlay-container'>
              <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={`${items.title} Poster`} />
              <div 
                onClick={() => handleFavoritesClick(items)} // Pass the individual movie
                className='overlay'>
                <FavoriteComponent />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
