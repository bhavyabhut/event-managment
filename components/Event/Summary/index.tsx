import { FC } from 'react';

import Props from './type';

import classes from './summary.module.css';

const EventSummary: FC<Props> = ({ title, small }) => {
  return (
    <section className={small ? classes['summary-small'] : classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
