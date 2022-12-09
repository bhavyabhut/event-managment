import { FC } from 'react';
import classes from './error.module.css';
import Props from './type';

const ErrorAlert: FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
