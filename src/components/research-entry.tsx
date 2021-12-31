import * as React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

type ResearchEntryProps = {
  id: string;
  frontmatter: {
    title: string;
    location: string;
    start_date: string;
    end_date: string;
    lab_url?: string;
  };
  body: string;
};

const ResearchEntry = ({ id, frontmatter, body }: ResearchEntryProps) => (
  <div key={id} className={'research-entry'}>
    <h3>
      {frontmatter.lab_url ? (
        <a href={frontmatter.lab_url}>{frontmatter.title}</a>
      ) : (
        frontmatter.title
      )}{' '}
      @ {frontmatter.location}
    </h3>
    <h5>
      {frontmatter.start_date} - {frontmatter.end_date}
    </h5>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
);

export default ResearchEntry;
