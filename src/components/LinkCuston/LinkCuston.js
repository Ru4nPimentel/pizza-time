import React from 'react';
import { Link } from 'react-router-dom';

import './LinkCuston.scss';

const LinkCuston = ({ children, toScr = '/' }) => {
  return (
    <Link to={toScr} className="buttonCuston">
      {children}
    </Link>
  );
};

export default LinkCuston;
