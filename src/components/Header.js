import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../images/simply-logo.png'
import { fetchRandomSubreddit } from '../features/subredditsSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFeelingLuckyClick = async () => {
    const action = await dispatch(fetchRandomSubreddit());
    if (action.type === 'subreddits/fetchRandomSubreddit/fulfilled') {
      navigate(`/${action.payload}`); // Make sure this matches your routing pattern
    }
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Simply Logo" className='logo'></img>
      </Link>
      <SearchBar />
      <button onClick={handleFeelingLuckyClick}>Feeling Lucky</button>
    </header>
  );
};

export default Header;