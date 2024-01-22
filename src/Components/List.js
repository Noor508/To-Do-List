import React from 'react';

function List ({ layout, items }){
  const renderList = () => {
    switch (layout) {
      case 'numbered':
        return (
          <ol>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        );
      case 'alpha':
        return (
          <ol type="a">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        );
      case 'bullet':
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return <div>{renderList()}</div>;
};

export default List;
