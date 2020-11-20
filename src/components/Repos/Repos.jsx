import React, { useEffect, useState } from 'react';
import { Link }     from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { pathName } from 'api/api';
import Title        from 'theme/Title/Title';
import Table        from 'theme/Table/Table';
import {
  getUser,
  getRepos
}                   from './requests.js';

const MAX = 5;
const nameTemplate = (name, data, classN) => <div className={classN} key={uuid()}>{data[name]}</div>;
const actionTemplate = (name, username, pathName, data, classN) => <Link to={`${pathName}/${username}/repos/${data[name]}`} className={`${classN} button--light`} key={uuid()}>Go to repo</Link>;


const Repos = ({ match: { params } }) => {
  const username = params.username;
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(username)
      .then(
        ({ data }) => {
          const userData = data;
          setUser(userData);

          getRepos(username)
            .then(
              ({ data }) => {
                const reposData = data;
                setRepos(reposData);
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

  const HEADERS = [
    {
      title: 'Name',
      template: (data, classN) => nameTemplate('name', data, classN)
    },
    {
      title: 'Action',
      template: (data, classN) => actionTemplate('name', username, pathName, data, classN)
    }
  ];


  return (
    <div>
      <Title title={`User: ${username}`} back />
      <div className="container">
        <div className="container__aside container__aside--left">
          <img src={user?.avatar_url} alt="avatar" width="100" height="100" className="img--rounded" />
          <div className="text--h2">{user?.name}</div>
          <div className="text--light">{user?.bio}</div>
        </div>

        <div className="container__main">
          <Table
            title="List of 5 last repos:"
            headers={HEADERS}
            data={repos.map(d => ({name: d.name}))}
            max={MAX}
          />
        </div>
      </div>
    </div>
  );
};

export default Repos;
