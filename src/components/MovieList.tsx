import React from 'react';

interface MovieListProps {
  movies: Movies[];
  handleFavoritesClick: (movie: Movies) => void; 
  favoriteComponent: React.FC<AddFavoriteProps>; // Correct the type here
}

interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string;
}

interface AddFavoriteProps {
  onClick: () => void;
  isFavorite: boolean;
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
                onClick={() => handleFavoritesClick(items)} 
                className='overlay'>
                <FavoriteComponent onClick={() => {}} isFavorite={true} /> {/* Example props */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
