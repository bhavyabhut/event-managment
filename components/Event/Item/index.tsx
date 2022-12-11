import { FC } from 'react';
import Image from 'next/image';

import Button from '../../Button';
import DateIcon from '../../../icons/Date';
import AddressIcon from '../../../icons/Address';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ItemProps from './type';

import classes from './item.module.css';

const EventItem: FC<ItemProps> = ({ event }) => {
  const { title, image, date, location, id } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={340} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
