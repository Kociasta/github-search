import React, { useState } from 'react';
import { getUser } from './requests.js';

const SearchForm = () => {
  const [username, setUsername] = useState('');

  const onType = (value) => setUsername(value);

  const checkUser = () => {
    getUser(username)
  }

  return (
    <div>
      <h1>SEARCH Page</h1>
      <label>Username</label>
      <input
        className="textField"
        type="text"
        name="username"
        placeholder="type username..."
        value={username}
        onChange={ (e) => onType(e.target.value) }
        disabled={false}
      />
      <button onClick={() => checkUser()}>Go</button>
    </div>
  );
};

export default SearchForm;