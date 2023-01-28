import Launch from '../features/api/types';

const searchTermMatch = (item: Launch, searchTerm: string) => (
  item.rocket.rocket_name.toLowerCase().includes(searchTerm)
  || item.mission_name.toLowerCase().includes(searchTerm)
);

export default searchTermMatch;
