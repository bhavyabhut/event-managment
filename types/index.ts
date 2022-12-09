export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export type Events = Array<Event>;

export type Params = {
  month: number;
  year: number;
};
