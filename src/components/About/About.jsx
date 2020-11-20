import React, { useEffect, useState } from 'react';
import Title        from 'theme/Title/Title';
import AboutApp     from './AboutApp';
import { getUser }  from './requests';

const USERNAME = 'Kociasta';


const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(USERNAME)
      .then(
        ({ data }) => {
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
          <AboutApp />
        </div>
      </div>
    </div>
  );
};

export default About;
