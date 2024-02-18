import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../features/searchSlice';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearch(term));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search For Anything..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;