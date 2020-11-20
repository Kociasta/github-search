import React from 'react';
import { useHistory } from 'react-router-dom';

// import './layout.less';

const Title = ({ title, back = false }) => {
  const history = useHistory();

  return (
    <h1 className="title">
      {back &&
        <i className="fas fa-chevron-left title__back" onClick={() => history.goBack()} />
      }
      {title}
    </h1>
  );
};

export default Title;
