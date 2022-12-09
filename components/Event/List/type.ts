import { PropsWithChildren } from 'react';
import { Events } from '../../../types';

export default interface Props extends PropsWithChildren {
  events: Events;
}
