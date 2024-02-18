import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../images/simply-logo.png'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Simply Logo" className='logo'></img>
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;