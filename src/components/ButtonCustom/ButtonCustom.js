import React from 'react';
import './ButtonCustom.scss';

const ButtonCustom = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className="ButtonCustom">
      {children}
    </button>
  );
};

export default ButtonCustom;
