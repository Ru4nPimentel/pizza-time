import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <nav className="footer_nav container">
        <Link className="footer_logo" to="/" aria-label="Home">
          <Logo noColor={true} namaClass="icon_logo_footer" />
          <span>Pizza Time</span>
        </Link>
        <div className="footer_address">
          <a
            href="https://www.google.com.br/maps/place/Diadema,+SP/@-23.6765072,-46.5893743,14z/data=!4m5!3m4!1s0x94ce445de3962263:0x9ca2ba904b9421db!8m2!3d-23.6816587!4d-46.6203412"
            target="_blik"
          >
            <span>
              PizzaTime restaurante | Rua ali perto, 00 - Diadema, SP |
              Telefone: (11)00000-0000
            </span>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
