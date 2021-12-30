import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import SoftwareCard from '../components/software-card';

const SoftwarePage = ({ id }: { id: string }) => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { slug: { regex: "/^(mdx/software)/" } }) {
        edges {
          node {
            body
            frontmatter {
              year
              title
              url
              icon {
                childImageSharp {
                  gatsbyImageData(height: 40, width: 40)
                }
              }
            }
            id
          }
        }
      }
    }
  `);

  return (
    <section id={id} style={{ height: '100vh' }}>
      <h1>Software</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {allMdx.edges.map(edge => {
          const { id, frontmatter, body } = edge.node;
          return (
            <SoftwareCard
              key={id}
              id={id}
              frontmatter={frontmatter}
              body={body}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SoftwarePage;
