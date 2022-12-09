import { PropsWithChildren } from 'react';

export default interface Props extends PropsWithChildren {
  link?: string;
  onClick?: () => void;
}
