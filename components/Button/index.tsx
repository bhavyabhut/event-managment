import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Props from './type';

import styles from './button.module.css';

const Button: FC<Props> = ({ children, link, onClick, className }) => {
  if (link) {
    return (
      <Link href={link} className={classNames(className, styles.btn)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
