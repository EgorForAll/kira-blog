import * as React from 'react';
import Avatar from '../../svg/avatar/avatar';

const Profile: React.FC = () => {
  return (
    <div className="header__profile">
      <span className="email">eia.web.ss@gmail.com</span>
      <Avatar />
    </div>
  );
};

export default Profile;
