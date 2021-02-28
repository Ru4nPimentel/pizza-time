import React from 'react';
import './InputCustom.scss';

const InputCustom = ({ id, label, type, value, onChange }) => {
  return (
    <div className="InputText">
      <input type={type} name={id} id={id} value={value} onChange={onChange} />
      <label htmlFor={id} className={value ? 'onValue' : ''}>
        {label}
      </label>
    </div>
  );
};

export default InputCustom;
