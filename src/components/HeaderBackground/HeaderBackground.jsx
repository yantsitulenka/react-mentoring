import React from 'react';
import backgroundImage from '../../images/background.jpg';

import './headerBackground.scss';

const HeaderBackground = () => (
  <div className="header-background">
    <img src={backgroundImage} alt="background" />
  </div>
);

export default HeaderBackground;
