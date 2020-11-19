import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pathName } from 'api/api';
import { getUser, getRepos } from './requests.js';
import Title from 'theme/title/Title';

// import {Layout} from './Layout.js';

const MAX = 5;

const Repos = ({match: {params}}) => {
  const username = params.username;
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(username).then(
      ({data}) => {
        setUser(data);

        getRepos(username).then(
          ({data}) => {
            setRepos(data);
          },
          (err) => {
            console.log('err :>> ', err);
          }
        );
      },
      (err) => {
        console.log('err :>> ', err);
      }
    );
  }, []);


  return (
    <div>
      <Title title={`User: ${username}`} />
      <img src={user?.avatar_url} alt="avatar" width="100" />
      <div>{user?.name}</div>
      <div>{user?.bio}</div>
      <br />
      <div>
        <div>Last 5 recent repos:</div>
        {
          repos.map((repo, i) => {
            if(i < MAX)
            return (
              <div key={`repo-${i}`}>
                <span>{repo.name}</span>
                <Link to={`${pathName}/${username}/repos/${repo.name}`}>Go to repo</Link>
              </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default Repos;