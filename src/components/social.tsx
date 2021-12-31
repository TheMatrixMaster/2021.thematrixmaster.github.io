import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const SocialLinks = () => {
  const { allSocialJson } = useStaticQuery(graphql`
    {
      allSocialJson {
        edges {
          node {
            id
            name
            url
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);

  return (
    <div className={'link-container'}>
      {allSocialJson.edges.map(e => {
        const { name, icon, url, id } = e.node;
        return (
          <a key={id} href={url} target={'_blank'}>
            <img src={icon.publicURL} alt={name} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
