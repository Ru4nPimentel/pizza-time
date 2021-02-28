import React from 'react';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import SizeForm from './FormFields/SizeForm/SizeForm';
import FlavorForm from './FormFields/FlavorForm/FlavorForm';
import ComplementsForm from './FormFields/ComplementsForm/ComplementsForm';
import './FormPedido.scss';

import dadosPizzaMock from '../../services/json/dadosPizza.json';
import recomendacaoMock from '../../services/json/recomendacaoPizza.json';

const FormPedido = ({ history }) => {
  const formPreco = {
    tamanho: 0,
    massa: 0,
    sabor: 0,
    item: 0,
  };

  const [tamanho, setTamanho] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [sabor, setSabor] = React.useState('');
  const [item, setItem] = React.useState('');
  const [preco, setPreco] = React.useState(formPreco);
  const [promocao, setPromocao] = React.useState(false);
  const [tabForm, setTabForm] = React.useState(1);

  function clickNext(event) {
    event.preventDefault();
    if (tabForm === 1) {
      if (tamanho !== '' && massa !== '') {
        setTabForm(tabForm + 1);
      } else {
        alert('preencha os campos');
      }
    } else if (tabForm === 2) {
      if (sabor !== '') {
        setTabForm(tabForm + 1);
      } else {
        alert('preencha os campos');
      }
    } else if (tabForm === 3) {
      const valorTotal = preco.item + preco.massa + preco.sabor + preco.tamanho;

      window.localStorage.setItem('tamanho', tamanho);
      window.localStorage.setItem('massa', massa);
      window.localStorage.setItem('sabor', sabor);
      window.localStorage.setItem('preco', valorTotal);
      window.localStorage.setItem('item', item);
      window.localStorage.setItem('promocao', promocao);
      history.push('/pagamento');
    }
  }

  function clickBack(event) {
    event.preventDefault();
    if (tabForm > 1) {
      setTabForm(tabForm - 1);
    }
  }

  return (
    <React.Fragment>
      <form className="FormPedido">
        <div className="scrollBox">
          <div className={tabForm === 1 ? 'info1 showForm' : 'info1 closeBox'}>
            <SizeForm
              pizzaSize={dadosPizzaMock.tamanhoPizza}
              typePasta={dadosPizzaMock.tipoMassas}
              tamanho={tamanho}
              massa={massa}
              setTamanho={setTamanho}
              setMassa={setMassa}
              preco={preco}
              setPreco={setPreco}
            />
          </div>
          <div className={tabForm === 2 ? 'info2 showForm' : 'info2 closeBox'}>
            <FlavorForm
              pizzaFlavor={dadosPizzaMock.sabores}
              sabor={sabor}
              setSabor={setSabor}
              preco={preco}
              setPreco={setPreco}
              recomendacao={recomendacaoMock}
              setPromocao={setPromocao}
            />
          </div>
          <div className={tabForm === 3 ? 'info3 showForm' : 'info3 closeBox'}>
            <ComplementsForm
              pizzaComplements={dadosPizzaMock.adicionais}
              item={item}
              setItem={setItem}
              preco={preco}
              setPreco={setPreco}
            />
          </div>
        </div>
        <div className="btn">
          <div className="btnForm">
            <ButtonCustom onClick={clickBack}>Voltar</ButtonCustom>
            <ButtonCustom onClick={clickNext}>Avançar</ButtonCustom>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormPedido;
