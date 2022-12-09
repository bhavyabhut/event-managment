import EventList from '../components/Event/List';
import { getFeaturedEvents } from '../utils';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
