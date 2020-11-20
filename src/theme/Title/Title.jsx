import React          from 'react';
import { useHistory } from 'react-router-dom';


const Title = ({ title, back = false }) => {
  const history = useHistory();

  return (
    <h1 className="title">
      {back && (
        <span className="title__back" onClick={() => history.goBack()}>
          <i className="fas fa-chevron-left title__back--rotary" />
        </span>
      )}
      {title}
    </h1>
  );
};

export default Title;
