import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import EventsSearch from '../../components/Search';
import EventList from '../../components/Event/List';
import { getAllEvents } from '../../utils';
import HeadTag from '../../components/common/Head';
import { Events } from '../../types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type StaticProps = GetStaticProps<{
  events: Events;
}>;

function AllEventsPage({ events }: Props) {
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <HeadTag title='Next events | All Events' description='All events where you can find the best events for you...' />
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}
export const getStaticProps: StaticProps = async () => ({
  props: {
    events: await getAllEvents(),
  },
});

export default AllEventsPage;
