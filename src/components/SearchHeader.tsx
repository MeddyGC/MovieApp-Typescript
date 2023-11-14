// SearchHeader.tsx
import React, { useState } from 'react';
import { StyledLinkButton, StyledPrimaryButton } from './styles';

interface SearchHeaderProps {
  onSearch: (searchText: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchText);
    setSearchText('');
  };

  return (
    <header className='col'>
      <h1>Movie App</h1>
      <form className='searchbox' onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
        />
        <StyledPrimaryButton type="submit">Search</StyledPrimaryButton>
        <StyledLinkButton to="/" className='btn btn-primary linkButton' style={{ marginLeft: '70px' }}>Home</StyledLinkButton>
        <StyledLinkButton to="/login" className='btn btn-primary linkButton' style={{ marginLeft: '10px' }}>View Favorites</StyledLinkButton>
      </form>
    </header>
  );
};

export default SearchHeader;
