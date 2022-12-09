import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventsSearch from '../../components/Search';
import EventList from '../../components/Event/List';
import { getAllEvents } from '../../utils';
import HeadTag from '../../components/common/Head';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <HeadTag title='All Events' />
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;
