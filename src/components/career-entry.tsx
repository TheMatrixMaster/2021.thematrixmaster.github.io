import * as React from 'react';

type CareerEntryProps = {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
};

const CareerEntry = ({
  title,
  description,
  start_time,
  end_time,
}: CareerEntryProps) => (
  <div className={'career-entry'}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p className={'date'}>
      {start_time} - {end_time}
    </p>
  </div>
);

export default CareerEntry;
