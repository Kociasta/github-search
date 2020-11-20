import React, { useEffect, useState } from 'react';
import Title from 'theme/title/Title';
import { getUser } from './requests'


const COPY = `This app is using GitHub REST API v3.
You can search for users typing username.
If you enter wrong username - I'll tell you.
When you do search some user - you'll find some details and 5 last changed repositories of him/her.
You could also display list of commits from specific repo.
No worries - I'll highlight every second record for better legibility.
This app is written in React.JS (and use some Hooks). LESS and BEM methodology was used for styling.
You could check it on my github account.
`
const USERNAME = 'Kociasta';

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(USERNAME).then(
      ({data}) => {
        setUser(data);
      },
      (err) => {
        console.log('err :>> ', err);
      }
    );
  }, []);

  return (
    <div>
      <Title title="About" />
      <div className="container">
        <div className="container__aside container__aside--left">
          <img src={user?.avatar_url} alt="avatar" width="100" height="100" className="img--rounded" />
          <div className="text--h2">{user?.name}</div>
          <div className="text--light">{user?.bio}</div>
          <div className="text">{user?.location}</div>
        </div>

        <div className="container__main">
          <ul className="list">
            <li className="list__elem">This app is using <a href="https://developer.github.com/v3/" target="_blank" className="link">GitHub REST API v3.</a></li>
            <li className="list__elem">You can search for users typing a username.</li>
            <li className="list__elem">If you enter the wrong username - I'll tell you.</li>
            <li className="list__elem">When you find the user - you'll see more details and the last 5 changed repositories of him/her.</li>
            <li className="list__elem">You'll also have a chance to display a list of commits from a specific repo.</li>
            <li className="list__elem">No worries - I'll highlight every second record for better legibility.</li>
            <li className="list__elem">This app was written in <a href="https://pl.reactjs.org/" target="_blank" className="link">React.js (and uses some Hooks)</a>. <a href="http://lesscss.org/" target="_blank" className="link">LESS</a> and <a href="https://en.bem.info/methodology/" target="_blank" className="link">BEM</a> methodology was used for styling.</li>
            <li className="list__elem">You can check it on my <a href="https://github.com/Kociasta" target="_blank" className="link">github account</a>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
