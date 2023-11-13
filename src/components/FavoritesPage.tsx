// FavoritesPage.tsx
import React from 'react';
import AddFavoriteProps from './AddFavoriteProps';

interface FavoritesPageProps {
  favorites: Movies[];
  handleFavoritesClick: (movie: Movies) => void; 
  favoriteComponent: React.FC<AddFavoriteProps>; // Correct the type here
}

interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, handleFavoritesClick, favoriteComponent: FavoriteComponent }) => {
  return (
    <>
      <header></header>
      <>
        <h2>Your Favorite Movies</h2>
        <div className='container fluid App'>
          {favorites.map((item) => (
            <div className='favoriteContainer' key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.title} Poster`} />
              <div onClick={() => handleFavoritesClick(item)} className='overlay'>
                <FavoriteComponent onClick={() => {}} isFavorite={true} /> {/* Example props */}
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default FavoritesPage;
