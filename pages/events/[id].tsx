import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '../../components/Event/Summary';
import EventLogistics from '../../components/Event/Logistic';
import EventContent from '../../components/Event/Content';
import ErrorAlert from '../../components/Alerts/Error';
import { getEventById } from '../../utils';
import HeadTag from '../../components/common/Head';

function EventDetailPage() {
  const router = useRouter();

  const { id } = router.query;
  const event = getEventById(id as string);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <HeadTag title={event.title} />

      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
