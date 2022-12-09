import { FC } from 'react';

import EventItem from '../Item';
import Props from './type';

import classes from './list.module.css';

const EventList: FC<Props> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
