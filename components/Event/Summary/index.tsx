import { FC } from 'react';

import Props from './type';

import classes from './summary.module.css';

const EventSummary: FC<Props> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
