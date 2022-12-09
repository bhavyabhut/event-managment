import { PropsWithChildren } from 'react';

export default interface Props extends PropsWithChildren {
  icon: React.FunctionComponent<any>;
}
