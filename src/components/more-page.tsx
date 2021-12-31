import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

const MorePage = props => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(slug: { eq: "mdx/aboutthissite" }) {
        id
        body
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
        }
      }
    }
  `);
  return (
    <section {...props}>
      <h1>How I built this site...</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </section>
  );
};

export default MorePage;
