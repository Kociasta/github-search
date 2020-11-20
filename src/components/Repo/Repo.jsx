import React, { useEffect, useState } from 'react';
import cx           from 'classnames';
import dayjs        from 'dayjs';
import { v4 as uuid } from 'uuid';
import Title        from 'theme/Title/Title';
import Table        from 'theme/Table/Table';
import { getRepo }  from './requests.js';

const commitTemplate = (message, data, classN) => <div className={classN} key={uuid()}>{data[message]}</div>;
const dateTemplate = (date, data, classN) => <div className={cx(classN, 'table__item--short')} key={uuid()}>{dayjs(data[date]).format('DD.MM.YYYY HH:mm:ss')}</div>;


const Repo = ({ match: { params } }) => {
  const username = params.username;
  const repo = params.repo;
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getRepo(username, repo)
      .then(
        ({ data }) => {
          setCommits(data);
        },
        (err) => {
          console.log('err :>> ', err);
        }
      );
  }, []);

  const HEADERS = [
    {
      title: 'Commit',
      template: (data, classN) => commitTemplate('message', data, classN)
    },
    {
      title: 'Date',
      template: (data, classN) => dateTemplate('date', data, classN)
    }
  ];


  return (
    <div>
      <Title title={`Repo: ${repo}`} back />
      <div className="container">
        <Table
          title={`A list of ${repo} commits:`}
          headers={HEADERS}
          data={commits.map(commit => ({message: commit.commit.message, date: commit.commit.committer.date}))}
        />
      </div>
    </div>
  );
};

export default Repo;
