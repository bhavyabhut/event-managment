// https://next-events-388a0-default-rtdb.asia-southeast1.firebasedatabase.app/

const fetchEvents = async () => {
  const response = await fetch(
    'https://next-events-388a0-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export default fetchEvents;
