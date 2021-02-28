import React from 'react';
import './Bonus.scss';
import bonusMock from '../../services/json/bonus.json';
import UserContext from '../../context/UseContext';

import srcBanner from '../../assets/img/bannerFull1.jpg';
import Banner from '../../components/Banner/Banner';
import Logo from '../../components/Logo/Logo';

const Bonus = () => {
  const context = React.useContext(UserContext);

  return (
    <main className="container-full Bonus">
      <section>
        <Banner srcBanner={srcBanner} customBanner={true} />
        <div className="container">
          <div className="container-bonus">
            <div className="bonusBox">
              <div className="titleBox">
                <Logo noColor={true} namaClass="icon_logo_footer" />
                <h1 className="titleCuston">Bonus</h1>
              </div>
              <div>
                <div className="boxBonus">
                  <div className="points">
                    <strong>Seus Pontos</strong>
                    <span>{context.pontos}</span>
                  </div>
                  <div className="infoBonus">
                    <ul>
                      {bonusMock.bonus.map(({ points, premio }) => {
                        return (
                          <li key={points}>
                            <strong>pontos necessários: {points}</strong>
                            <span>Bonus: {premio}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bonus;
