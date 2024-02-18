import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import logo from '../images/simply-logo.jpeg'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Simply Logo"></img>
      </Link>
      <SearchBar />
      <CategoryFilter />
    </header>
  );
};

export default Header;