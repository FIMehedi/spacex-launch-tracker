const searchTermMatch = (item: any, searchTerm: string) => (
  item.rocket.rocket_name.toLowerCase().includes(searchTerm)
  || item.mission_name.toLowerCase().includes(searchTerm)
);

export default searchTermMatch;
