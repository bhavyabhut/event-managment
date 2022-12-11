import { FC } from 'react';
import Image from 'next/image';

import AddressIcon from '../../../icons/Address';
import DateIcon from '../../../icons/Date';
import LogisticsItem from './Item';
import Props from './type';

import classes from './event-logistics.module.css';

const EventLogistics: FC<Props> = ({ event }) => {
  const { date, location, image } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = location.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={image} height={400} width={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
