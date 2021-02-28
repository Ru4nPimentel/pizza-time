import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Footer from './petterns/Footer/Footer';
import Header from './petterns/Header/Header';
import Routes from './routes';
import UserContext from './context/UseContext';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [login, setLogin] = useLocalStorage('login', '');
  const [pontos, setPonto] = useLocalStorage('pontos', 0);

  return (
    <React.Fragment>
      <UserContext.Provider
        value={{
          login: login,
          setLogin: setLogin,
          pontos: pontos,
          setPonto: setPonto,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
