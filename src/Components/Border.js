import React from 'react';

const Border = ({ children, borderColor, borderWidth, borderStyle }) => {
  const borderStyleObject = {
    border: `${borderWidth || 1}px ${borderStyle || 'solid'} ${borderColor || 'black'}`,
    padding: '10px', 
    marginBottom: '10px', 
  };

  return (
    <div style={borderStyleObject}>
      {children}
    </div>
  );
};

export const Component = () => {
  return (
    <p>This is a component inside the Border.</p>
  );
};

export default Border;
