import * as React from 'react';
import Logo from '../../svg/logo/logo';
import Profile from '../../blocks/profile/profile';

const Header = () => {
  return (
    <header>
      <div className="container d-flex">
        <Logo />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
