import React from 'react';

// import './layout.less';

const Table = ({ title, headers, data, max }) => {
  console.log('data :>> ', data);
  console.log('headers :>> ', headers);
  return (
    <div className="table">
      <div className="text--h2">{title}</div>
      {headers &&
        <div className="table__row table__row--underline">
          {
            headers?.map((header, i) => <div key={`h-${i}`}>{header.title}</div>)
          }
        </div>
      }
      {data && headers &&
        data?.map((row, i) => {
          if(i < max)
            return (
              <div key={`row-${i}`} className="table__row table__row--color">
                {
                  headers.map((item) => item.template(row))
                }
              </div>
            )
        })
      }
    </div>
  );
};

export default Table;
