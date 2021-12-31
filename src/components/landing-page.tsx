import * as React from 'react';

import Header from './header';
import SocialLinks from './social';

import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const LandingPage = ({ id }: { id: string }) => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(slug: { eq: "mdx/aboutme" }) {
        id
        body
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
        }
      }
    }
  `);

  const { body, frontmatter } = mdx;

  return (
    <section id={id} className={'main-container'}>
      <section className={'left-panel'}>
        <Header />
        <div className={'text-container'}>
          <h3>Hey there!</h3>
          <h1>
            How's it <br /> going?
          </h1>
          <h3>I'm Stephen.</h3>

          <div className={'roles'}>
            <h5>Software developer</h5>
            <h5>Neuroscience research trainee</h5>
            <h5>Entrepreneur</h5>
          </div>

          <SocialLinks />
        </div>
      </section>
      <section className={'right-panel'}>
        <div className={'text-container'}>
          <StaticImage
            quality={100}
            alt={'avatar'}
            className={'avatar'}
            src={'../static/images/avatar.png'}
          />
          <h2>{frontmatter.title}</h2>
          <p className={'subtitle'}>Last updated {frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
