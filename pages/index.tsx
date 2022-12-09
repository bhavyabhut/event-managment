import HeadTag from '../components/common/Head';
import EventList from '../components/Event/List';
import { getFeaturedEvents } from '../utils';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <HeadTag title='Featured Events' />
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
