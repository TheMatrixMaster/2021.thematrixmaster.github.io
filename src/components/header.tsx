import * as React from 'react';
import './header.css';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header className={'header-bar'}>
    <div>
      <StaticImage
        alt={'logo'}
        height={55}
        aspectRatio={1}
        src={'../static/images/sl-icon.png'}
      />
      <Link to="/#software">Software</Link>
      <Link to="/#research">Research</Link>
      <Link to="/#career">Career</Link>
      <Link to="/#more">More</Link>
    </div>
  </header>
);

export default Header;
