// FavoritesPage.tsx
import React from 'react';

interface FavoritesPageProps {
  favorites: Movies[];
}

interface Movies {
  title: string;
  poster_path: string;
  id: number;
  release_date: string;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites }) => {
  return (
    <div className='container fluid App'>
      <h2>Your Favorite Movies</h2>
      {favorites.map((item) => (
        <div className='favoriteContainer' key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.title} Poster`} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
