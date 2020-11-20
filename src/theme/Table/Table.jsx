import React  from 'react';


const Table = ({ title, headers, data, max }) => {
  const tableLength = max ? max : data?.length;

  return (
    <div className="table">
      <div className="text--h2">{title}</div>
      {headers && (
        <div className="table__row table__row--underline">
          {
            headers?.map((header, i) => <div className="table__item" key={`h-${i}`}>{header.title}</div>)
          }
        </div>
      )}
      {data && headers && (
        data?.map((row, i) => {
          if (i < tableLength) {
            return (
              <div key={`row-${i}`} className="table__row table__row--color">
                {headers.map((item) => item.template(row, 'table__item'))}
              </div>
            )
          }
        })
      )}
    </div>
  );
};

export default Table;
