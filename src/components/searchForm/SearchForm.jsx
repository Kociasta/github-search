import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getUser} from './requests.js';

// import {Layout} from './Layout.js';

const SearchForm = () => {

  console.log('test', getUser);
  useEffect(() => {
    getUser('Kociasta')
  },[])

  return (
    <div>
      <h1>SEARCH Page</h1>
      <Link to="/user">Go to USER</Link>
    </div>
  );
};

export default SearchForm;