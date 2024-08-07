import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/tasksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Tasks" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
