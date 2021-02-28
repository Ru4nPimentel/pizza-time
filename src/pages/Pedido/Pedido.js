import React from 'react';
import Banner from '../../components/Banner/Banner';

import srcBanner from '../../assets/img/bannerFull2.jpg';
import './Pedido.scss';
import Logo from '../../components/Logo/Logo';
import FormPedido from '../../petterns/FormPedido/FormPedido';

const Pedido = ({ history }) => {
  return (
    <main className="container-full Pedido">
      <section>
        <Banner srcBanner={srcBanner} customBanner={true} />
        <div className="container">
          <div className="container-pedido">
            <div className="pedidoBox">
              <div className="titleBox">
                <Logo noColor={true} namaClass="icon_logo_footer" />
                <h1 className="titleCuston">Pedido</h1>
              </div>
              <FormPedido history={history} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pedido;
