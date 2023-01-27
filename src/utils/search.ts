export const searchTermMatch = (item: any, searchTerm: string) => {
	return (
		item.rocket.rocket_name.toLowerCase().includes(searchTerm) ||
		item.mission_name.toLowerCase().includes(searchTerm)
	);
};
