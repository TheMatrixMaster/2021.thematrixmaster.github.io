import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ResearchEntry from './research-entry';

const ResearchPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { slug: { regex: "/^(mdx/research)/" } }) {
        edges {
          node {
            body
            frontmatter {
              title
              location
              start_date
              end_date
              lab_url
            }
            id
          }
        }
      }
    }
  `);

  return (
    <section {...props}>
      <h1>Research</h1>
      {data.allMdx.edges.map(edge => {
        const { id, body, frontmatter } = edge.node;
        return (
          <ResearchEntry
            key={id}
            id={id}
            frontmatter={frontmatter}
            body={body}
          />
        );
      })}
    </section>
  );
};

export default ResearchPage;
