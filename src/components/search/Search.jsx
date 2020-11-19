import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { pathName } from 'api/api';
import { getUser } from './requests.js';
import Title from 'theme/title/Title';

const NOT_FOUND = "I think that there is no user with such name. Please check it again or go to GitHub"

const Search = () => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setValidation] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();


  const onType = (value) => {
    if (error)
      setError(null)
    setUsername(value);

    if (value) {
      setValidation(true);
      // TODO
      // /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    }
  }

  const checkUserAndGo = () => {
    if (error)
      setError(null)

    getUser(username).then(
      ({ data }) => {
        console.log('success :>> ', data)
        history.push(`${pathName}/${data.login}/repos`);
      },
      (error) => {
        console.log('error :>> ', error.message);
        setError(error.message);
      }
    )
  }


  return (
    <div>
      <Title title="Search" />
      <div className="form">
        <div className="form__field" onKeyDown={({key}) => key === 'Enter' && checkUserAndGo() }>
          <input
            className="form__textfield"
            type="text"
            name="username"
            placeholder="type username..."
            value={username}
            onChange={ (e) => onType(e.target.value) }
          />
          <button
            className="button--main"
            onClick={ () => checkUserAndGo() }
            disabled={!isUsernameValid}
          >
            Search
          </button>
        </div>
        { error &&
          <div className="form__message--error">{NOT_FOUND}</div>
        }
      </div>
    </div>
  );
};

export default Search;