import { GetStaticProps, InferGetStaticPropsType } from 'next';

import HeadTag from '../components/common/Head';
import EventList from '../components/Event/List';
import EventSummary from '../components/Event/Summary';
import { Events } from '../types';
import { getFeaturedEvents } from '../utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type StaticProps = GetStaticProps<{
  featuredEvents: Events;
}>;

function HomePage({ featuredEvents }: Props) {
  return (
    <div>
      <HeadTag title='Featured Events' />
      <EventSummary small title='Featured Events' />
      <EventList events={featuredEvents} />
    </div>
  );
}
export const getStaticProps: StaticProps = async () => ({
  props: {
    featuredEvents: await getFeaturedEvents(),
  },
});

export default HomePage;
