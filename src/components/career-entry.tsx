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
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      {start_time} - {end_time}
    </p>
  </div>
);

export default CareerEntry;
