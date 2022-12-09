import { PropsWithChildren } from 'react';

export default interface Props extends PropsWithChildren {
  onSearch: (year: string, month: string) => void;
}
