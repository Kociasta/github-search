import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import cx             from 'classnames';
import { pathName }   from 'api/api';
import Title          from 'theme/Title/Title';
import { getUser }    from './requests.js';

const NOT_FOUND = 'I think that there is no user with such name. Please check it again or go to GitHub.';
const TEST = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
/**
 * GitHub username validation:
 * Min: 1
 * Max: 39
 * Can contain: a-z A-Z 0-9 -
 * Other: Can not start with a dash
 */


const Search = () => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setValidation] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const onType = (value) => {
    const isValueValid = TEST.test(value);

    if (error) {
      setError(null);
    };

    setUsername(value);
    setValidation(isValueValid);
  };

  const checkUserAndGo = () => {
    if (error) {
      setError(null);
    };

    getUser(username)
      .then(
        ({ data }) => {
          history.push(`${pathName}/${data.login}/repos`);
        },
        (error) => {
          setError(error.message);
        }
      );
  };

  const onEnter = (key) => (key === 'Enter') && isUsernameValid && checkUserAndGo();


  return (
    <div>
      <div className="text--center">Just type a GitHub username. And search.</div>
      <div className="form">
        <div
          className="form__field"
          onKeyDown={({key}) => onEnter(key)}
        >
          <input
            className="form__input"
            type="text"
            name="username"
            placeholder="type username..."
            value={username}
            onChange={(e) => onType(e.target.value)}
          />
          <button
            className={cx('button button--main', {'button--disabled': !isUsernameValid})}
            disabled={!isUsernameValid}
            onClick={() => checkUserAndGo()}
          >
            Search
          </button>
        </div>
        {error && (
          <div className="form__message form__message--error">{NOT_FOUND}</div>
        )}
      </div>
    </div>
  );
};

export default Search;
