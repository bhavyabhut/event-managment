import fetchEvents from '../apis';
import { Events, Params } from '../types';

export async function getFeaturedEvents() {
  const events = await getAllEvents();

  return events.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  return (await fetchEvents()) as Events;
}

export async function getFilteredEvents(params: Params) {
  const { year, month } = params;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id: string) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}
