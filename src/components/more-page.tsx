import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

const MorePage = ({ id }: { id: string }) => {
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
    <section id={id} style={{ height: '100vh' }}>
      <h1>How I built this site...</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </section>
  );
}

export default MorePage;
