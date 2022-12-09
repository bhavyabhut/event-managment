import Link from 'next/link';
import { FC } from 'react';

import Props from './type';

import classes from './header.module.css';

const MainHeader: FC<Props> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
