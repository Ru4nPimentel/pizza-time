import React from 'react';
import RadioImg from '../../../../components/RadioImg/RadioImg';
import './FlavorForm.scss';

const FlavorForm = ({
  pizzaFlavor,
  sabor,
  setSabor,
  preco,
  setPreco,
  recomendacao,
  setPromocao,
}) => {
  const day = new Date();

  return (
    <div className="FlavorForm">
      <h2>Sabores</h2>
      <RadioImg
        options={pizzaFlavor}
        nomeCamp="sabor"
        value={sabor}
        setValue={setSabor}
        preco={preco}
        setPreco={setPreco}
        recomendacao={recomendacao.pizzaDia[day.getDay()]}
        setPromocao={setPromocao}
      />
    </div>
  );
};

export default FlavorForm;
