import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '../../components/Event/Summary';
import EventLogistics from '../../components/Event/Logistic';
import EventContent from '../../components/Event/Content';
import ErrorAlert from '../../components/Alerts/Error';
import { getAllEvents, getEventById } from '../../utils';
import HeadTag from '../../components/common/Head';
import { Event } from '../../types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type StaticProps = GetStaticProps<{
  event: Event | null;
}>;

function EventDetailPage({ event }: Props) {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <HeadTag title={event.title} description={event.description} />
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
type Params<Type> = Type extends boolean ? { id: string } : { id?: string };

export const getStaticProps: StaticProps = async (
  context: GetStaticPropsContext<Params<null>>
) => {
  const { params } = context;

  return {
    props: {
      event: (params && params.id && (await getEventById(params.id))) || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params<true>> = async () => {
  const events = await getAllEvents();
  const paths = events
    .map((event) => event.id)
    .map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

export default EventDetailPage;
