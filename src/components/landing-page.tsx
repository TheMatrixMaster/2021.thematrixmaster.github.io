import { graphql, useStaticQuery } from 'gatsby';
import Header from './header';
import Social from './social';
import { StaticImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

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
    <section
      id={id}
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      }}
    >
      <section
        style={{
          color: '#fff',
          gridColumn: '1/8',
          backgroundColor: 'var(--color-soft-black)',
        }}
      >
        <Header />
        <h3>Hey there!</h3>
        <h1>How's it going?</h1>
        <h3>I'm Stephen.</h3>

        <h5>Software developer</h5>
        <h5>Neuroscience research trainee</h5>
        <h5>Entrepreneur</h5>

        <Social />
      </section>
      <section style={{ gridColumn: '8/12' }}>
        <StaticImage
          alt={'avatar'}
          src={'../static/images/avatar.png'}
          width={70}
          quality={100}
          aspectRatio={1}
          imgStyle={{
            borderWidth: 2,
            borderRadius: '50%',
            borderStyle: 'solid',
            verticalAlign: 'middle',
          }}
        />
        <h2>{frontmatter.title}</h2>
        <p>Last updated {frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </section>
  );
};

export default LandingPage;
