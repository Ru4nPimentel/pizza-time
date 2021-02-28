import React from 'react';
import './Pagamento.scss';
import srcBanner from '../../assets/img/bannerFull1.jpg';
import Banner from '../../components/Banner/Banner';
import Logo from '../../components/Logo/Logo';
import UserContext from '../../context/UseContext';
import LinkCuston from '../../components/LinkCuston/LinkCuston';

const Pagamento = () => {
  const tamanho = window.localStorage.getItem('tamanho');
  const massa = window.localStorage.getItem('massa');
  const sabor = window.localStorage.getItem('sabor');
  const preco = window.localStorage.getItem('preco');
  const item = window.localStorage.getItem('item');
  const promocao = window.localStorage.getItem('promocao');
  const context = React.useContext(UserContext);

  if (promocao !== 'false') {
    alert('Você ganhou pontos especiais');
    context.setPonto(parseInt(context.pontos) + 30);
    window.localStorage.setItem('promocao', false);
  }

  return (
    <main className="container-full Pagamento">
      <section>
        <Banner srcBanner={srcBanner} customBanner={true} />
        <div className="container">
          <div className="container-pagamento">
            <div className="pagamentoBox">
              <div className="titleBox">
                <Logo noColor={true} namaClass="icon_logo_footer" />
                <h1 className="titleCuston">Pagamento</h1>
              </div>
              <div>
                <h3>
                  Tamanha: <span>{tamanho}</span>
                </h3>
                <h3>
                  Massa: <span>{massa}</span>
                </h3>
                <h3>
                  Sabor: <span>{sabor}</span>
                </h3>
                <h3>
                  Acompanhamento: <span>{item ? item : 'nenhum'}</span>
                </h3>
                <div className="valorTotal">
                  <h3>Preço: R$ {preco},00</h3>
                </div>
                <div>
                  <LinkCuston>Pagar</LinkCuston>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pagamento;
