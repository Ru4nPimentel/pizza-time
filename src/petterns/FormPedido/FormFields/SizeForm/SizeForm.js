import React from 'react';
import RadioCustom from '../../../../components/RadioCustom/RadioCustom';
import './SizeForm.scss';

const SizeForm = ({
  pizzaSize,
  typePasta,
  tamanho,
  massa,
  setTamanho,
  setMassa,
  preco,
  setPreco,
}) => {
  return (
    <div className="SizeForm">
      <h2>Tamanho da pizza</h2>
      <RadioCustom
        options={pizzaSize}
        value={tamanho}
        nomeCamp="tamanho"
        setValue={setTamanho}
        setPreco={setPreco}
        preco={preco}
      />
      <h2>Massa da Pizza</h2>
      <RadioCustom
        options={typePasta}
        value={massa}
        nomeCamp="massa"
        setValue={setMassa}
        setPreco={setPreco}
        preco={preco}
      />
    </div>
  );
};

export default SizeForm;
