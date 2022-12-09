import Button from '../components/Button';
import List from '../components/Event/List';
import Header from '../components/Header';
import Search from '../components/Search/Search';

export default function AllEvents() {
  return (
    <>
      <h1>All Events</h1>
      <Header />
      <Search />
      <Button />
      <List />
    </>
  );
}
