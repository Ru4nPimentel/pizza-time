import React from 'react';
import './RadioImg.scss';
import srcImg1 from '../../assets/pizzas/pizzaMucarela.png';
import srcImg2 from '../../assets/pizzas/pizzaFrangoCatupiry.png';
import srcImg3 from '../../assets/pizzas/pizzaPortuguesa.png';
import srcImg4 from '../../assets/pizzas/pizzaPepperoni.png';

const RadioImg = ({
  options,
  nomeCamp,
  value,
  setValue,
  preco,
  setPreco,
  recomendacao,
  setPromocao,
}) => {
  return (
    <div className="RadioImg">
      {options.map((option) => {
        let img;
        if (option.id === 1) {
          img = <img src={srcImg1} alt="ImgPizza" />;
        } else if (option.id === 2) {
          img = <img src={srcImg2} alt="ImgPizza" />;
        } else if (option.id === 3) {
          img = <img src={srcImg3} alt="ImgPizza" />;
        } else {
          img = <img src={srcImg4} alt="ImgPizza" />;
        }
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
                if (recomendacao.idPizza === option.id) {
                  setPromocao(true);
                } else {
                  setPromocao(false);
                }
              }}
            />
            <label
              htmlFor={`${nomeCamp}${option.id}`}
              className={recomendacao.idPizza === option.id ? 'especial' : ''}
            >
              <div className="boxImg">{img}</div>
              <div className="boxInfo">
                <h3>
                  {option[nomeCamp]}
                  {recomendacao.idPizza === option.id ? ' - Recomendação' : ''}
                </h3>
                <p>{option.descricao}</p>
                <span className="price">R$ {option.preco}.00</span>
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioImg;
