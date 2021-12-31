import * as React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header className={'header-bar'}>
    <div>
      <StaticImage
        alt={'logo'}
        aspectRatio={1}
        className={'logo'}
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
