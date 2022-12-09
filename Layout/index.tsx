import { FC, Fragment } from 'react';

import MainHeader from '../components/Header';

import Props from './type';

const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
