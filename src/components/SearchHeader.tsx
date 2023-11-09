import React, { useState } from 'react';

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
    onSearch(searchText); // Call the onSearch prop with searchText as an argument
  };

  return (
    <header className='col'>
      <h1>Movie App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchHeader;
