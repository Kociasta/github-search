import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getRepo } from './requests.js';

import Title from 'theme/title/Title';

const Repo = ({match: {params}}) => {
  const username = params.username;
  const repo = params.repo;
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getRepo(username, repo).then(
      ({data}) => {
        setCommits(data);
      },
      (err) => {
        console.log('err :>> ', err);
      }
    );
  }, []);


  return (
    <div>
      <Title title={`Repo: ${repo}`} />
      <div>
        <div>A list of {repo} commits:</div>
        {
          commits?.map((commit, i) => {
            return (
              <div key={`commit-${i}`}>
                <span>
                  {commit.commit.message}
                </span>
                <span>
                  {dayjs(commit.commit.committer.date).format('DD.MM.YYYY HH:mm:ss')}
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Repo;