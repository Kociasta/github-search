import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { pathName } from 'api/api';
import { getUser, getRepos } from './requests.js';
import Title from 'theme/title/Title';
import Table from 'theme/table/Table';


const MAX = 5;
const nameTemplate = (name, data) => <div key={uuid()}>{data[name]}</div>;
const actionTemplate = (name, username, pathName, data) => <Link to={`${pathName}/${username}/repos/${data[name]}`} className="button--light" key={uuid()}>Go to repo</Link>;


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

  const HEADERS = [
    {
      title: 'Name',
      template: (data) => nameTemplate('name', data)
    },
    {
      title: 'Action',
      template: (data) => actionTemplate('name', username, pathName, data)
    }
  ];


  return (
    <div>
      <Title title={`User: ${username}`} />
      <div className="container">
        <div className="container__aside">
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