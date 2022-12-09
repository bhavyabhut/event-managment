import { FC } from 'react';

import Props from './type';

import classes from './content.module.css';

const EventContent: FC<Props> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
