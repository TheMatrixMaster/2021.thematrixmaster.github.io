import { graphql, useStaticQuery } from "gatsby";
import CareerEntry from "./career-entry";
import * as React from "react";

const CareerPage = (props) => {
  const { allAwardsJson, allCareerJson, allEduJson } = useStaticQuery(graphql`
    {
      allAwardsJson {
        edges {
          node {
            id
            title
            year(formatString: "YY")
          }
        }
      }
      allCareerJson {
        edges {
          node {
            id
            start_time
            title
            end_time
            description
          }
        }
      }
      allEduJson {
        edges {
          node {
            id
            end_time
            description
            start_time
            title
          }
        }
      }
    }
  `);

  return (
    <section {...props}>
      <section style={{ gridColumn: '1/4' }}>
        <h1>Career</h1>
        {allCareerJson.edges.map(edge => {
          const { id, title, description, start_time, end_time } = edge.node;
          return (
            <CareerEntry
              key={id}
              title={title}
              description={description}
              start_time={start_time}
              end_time={end_time}
            />
          );
        })}
      </section>
      <section className={'career-col'} style={{ gridColumn: '4/9' }}>
        <h1>Education</h1>
        {allEduJson.edges.map(edge => {
          const { id, title, description, start_time, end_time } = edge.node;
          return (
            <CareerEntry
              key={id}
              title={title}
              description={description}
              start_time={start_time}
              end_time={end_time}
            />
          );
        })}
      </section>
      <section className={'awards-col'} style={{ gridColumn: '10/13' }}>
        <h1>Awards</h1>
        {allAwardsJson.edges.map(edge => {
          const { id, title, year } = edge.node;
          return (
            <div key={id}>
              <p>{title} '{year}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default CareerPage;
