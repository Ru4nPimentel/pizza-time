import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import UserContext from '../../context/UseContext';

import { FiLogOut } from 'react-icons/fi';

import './Header.scss';

const Header = () => {
  const context = React.useContext(UserContext);

  function logOut() {
    context.setLogin('');
  }

  return (
    <header>
      <nav className="header_nav container">
        <Link className="link_logo" to="/" aria-label="Home">
          <Logo namaClass="icon_logo" />
          <span>Pizza Time</span>
        </Link>

        {context.login ? (
          <div>
            <Link className="header_login" to="/">
              {context.login}
            </Link>
            <Link className="bonus_harder" to="/bonus">
              <span>{context.pontos}</span> Pontos
            </Link>
            <span onClick={logOut} className="sair_login">
              <FiLogOut /> Sair
            </span>
          </div>
        ) : (
          <Link
            className="header_login"
            to="/login"
            aria-label="Login ou Criar"
          >
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
