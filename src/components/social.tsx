import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "icons/social" } }) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allFile.edges.map(e => {
        const { name, publicURL, id } = e.node;
        return <img key={id} src={publicURL} alt={name} />;
      })}
    </div>
  );
};

export default SocialLinks;
