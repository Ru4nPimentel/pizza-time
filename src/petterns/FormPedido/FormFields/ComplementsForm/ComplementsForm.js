import React from 'react';
import './ComplementsForm.scss';
import RadioCustom from '../../../../components/RadioCustom/RadioCustom';

const ComplementsForm = ({
  pizzaComplements,
  item,
  setItem,
  preco,
  setPreco,
}) => {
  return (
    <div className="SizeForm">
      <h2>Acompanhamento</h2>
      <RadioCustom
        options={pizzaComplements}
        value={item}
        nomeCamp="item"
        setValue={setItem}
        setPreco={setPreco}
        preco={preco}
      />
    </div>
  );
};

export default ComplementsForm;
