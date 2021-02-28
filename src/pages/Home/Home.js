import React from 'react';
import Banner from '../../components/Banner/Banner';
import { GiFruitBowl, GiFullPizza, GiChefToque } from 'react-icons/gi';
import { BiTimer } from 'react-icons/bi';

import srcBanner1 from '../../assets/img/banner.jpg';
import srcBanner2 from '../../assets/img/banner2.jpg';
import './Home.scss';
import LinkCuston from '../../components/LinkCuston/LinkCuston';
import UserContext from '../../context/UseContext';

const Home = () => {
  const context = React.useContext(UserContext);

  return (
    <>
      <main className="container-full home">
        <Banner srcBanner={srcBanner1}>
          <h1>
            <span> A melhor pizza da região </span>
            <q> sabor inconfundível </q>
            {context.login ? (
              <LinkCuston toScr="/pedido">peça agora</LinkCuston>
            ) : (
              <LinkCuston toScr="/login">peça agora</LinkCuston>
            )}
          </h1>
        </Banner>
        <section className="bg_info">
          <div className="container boxHome">
            <div className="cardInfo">
              <div className="blockInfo bi1">
                <GiFruitBowl />
                <span>Ingredientes de primeira</span>
              </div>
              <div className="blockInfo bi2">
                <GiFullPizza />
                <span>Sabor Inconfundível</span>
              </div>
              <div className="blockInfo bi3">
                <GiChefToque />
                <span>Chefs especialistas</span>
              </div>
              <div className="blockInfo bi4">
                <BiTimer />
                <span>Entregue na hora</span>
              </div>
            </div>
            <div className="customerCall">
              {context.login ? (
                <LinkCuston toScr="/pedido">peça agora</LinkCuston>
              ) : (
                <LinkCuston toScr="/login">peça agora</LinkCuston>
              )}
            </div>
          </div>
        </section>
        <Banner srcBanner={srcBanner2}>
          <div className="homeDeliveryBox">
            <h2>
              <span> Frete gratis </span>
              <q> Na compra de 2 pizzas </q>
              {context.login ? (
                <LinkCuston toScr="/pedido">peça agora</LinkCuston>
              ) : (
                <LinkCuston toScr="/login">peça agora</LinkCuston>
              )}
            </h2>
          </div>
        </Banner>
      </main>
    </>
  );
};

export default Home;
