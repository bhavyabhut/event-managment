import { FC } from 'react';

import Button from '../Button';
import Props from './type';

import classes from './results-title.module.css';

const ResultsTitle: FC<Props> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
