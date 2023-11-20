import * as React from 'react';
import Logo from '../../svg/logo/logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <div className="footer__links">
          <a href="#top" className="footer__link">
            Навверх
          </a>
          <a href="#" className="footer__link">
            Подписатья на рассылку
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
