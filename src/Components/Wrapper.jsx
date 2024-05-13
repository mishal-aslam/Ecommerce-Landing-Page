import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="md:px-20 px-7" >
      {children}
    </div>
  );
};

export default Wrapper;