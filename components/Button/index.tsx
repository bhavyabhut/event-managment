import { FC } from 'react';
import Link from 'next/link';

import Props from './type';

import classes from './button.module.css';

const Button: FC<Props> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
