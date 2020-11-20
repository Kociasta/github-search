import React        from 'react';


const AboutApp = () => {
  return (
    <ul className="list">
      <li className="list__elem">
        This app is using <a href="https://developer.github.com/v3/" target="_blank" className="link">GitHub REST API v3.</a>
      </li>
      <li className="list__elem">
        You can search for users typing a username.
      </li>
      <li className="list__elem">
        If you enter the wrong username - I'll tell you.
      </li>
      <li className="list__elem">
        When you find the user - you'll see more details and the last 5 changed repositories of him/her.
      </li>
      <li className="list__elem">
        You'll also have a chance to display a list of commits from a specific repo.
      </li>
      <li className="list__elem">
        No worries - I'll highlight every second record for better legibility.
      </li>
      <li className="list__elem">
        This app was written in <a href="https://pl.reactjs.org/" target="_blank" className="link">React.js (and uses some Hooks)</a>.&nbsp;
        <a href="http://lesscss.org/" target="_blank" className="link">LESS</a> and <a href="https://en.bem.info/methodology/" target="_blank" className="link">BEM</a>&nbsp;
        methodology was used for styling.
      </li>
      <li className="list__elem">
        You can check it on my <a href="https://github.com/Kociasta" target="_blank" className="link">github account</a>.
      </li>
    </ul>
  );
};

export default AboutApp;
