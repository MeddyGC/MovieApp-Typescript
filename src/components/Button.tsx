export{}
import React from 'react';

const Button: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Sut</button>
    </form>
  );
};

export default Button;
