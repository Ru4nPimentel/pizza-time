import React from 'react';
import './RadioCustom.scss';

const RadioCustom = ({
  options,
  nomeCamp,
  value,
  setValue,
  preco,
  setPreco,
}) => {
  return (
    <div className="RadioCustom">
      {options.map((option) => {
        return (
          <div key={option.id} className="itemRadio">
            <input
              id={`${nomeCamp}${option.id}`}
              type="radio"
              value={option[nomeCamp]}
              checked={value === option[nomeCamp]}
              onChange={({ target }) => {
                setValue(target.value);
                setPreco({ ...preco, [nomeCamp]: option.preco });
              }}
            />
            <label htmlFor={`${nomeCamp}${option.id}`}>
              <span>{option[nomeCamp]}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioCustom;
