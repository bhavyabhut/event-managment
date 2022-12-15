import {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'next';

import ErrorAlert from '../../components/Alerts/Error';
import Button from '../../components/Button';
import { getFilteredEvents } from '../../utils';
import ResultsTitle from '../../components/ResultTitle';
import EventList from '../../components/Event/List';
import HeadTag from '../../components/common/Head';
import { Events } from '../../types';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

type ServerSideProps = GetServerSideProps<{
  filteredEvents: Events | [];
  hasError?: boolean;
  numMonth?: number;
  numYear?: number;
}>;

function FilteredEventsPage({
  hasError,
  filteredEvents,
  numMonth,
  numYear,
}: Props) {
  if (hasError)
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );

  let date = new Date();
  if (numMonth && numYear) date = new Date(numYear, numMonth - 1);

  return (
    <>
      <HeadTag title='Next events | Filtered Events' description='List of all filtered events...' />
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

type Params<Type> = Type extends boolean
  ? { params: Array<string> }
  : { params?: Array<string> };

export const getServerSideProps: ServerSideProps = async (
  context: GetServerSidePropsContext<Params<null>>
) => {
  const { params } = context;

  if (params && params.params && params.params.length === 2) {
    const { params: filterData } = params;
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth < 1 ||
      numMonth > 12
    ) {
      return { props: { hasError: true, filteredEvents: [] } };
    }

    const filteredEvents = await getFilteredEvents({
      year: numYear,
      month: numMonth,
    });
    return {
      props: { filteredEvents, numMonth, numYear },
    };
  }
  return { notFound: true };
};

export default FilteredEventsPage;
