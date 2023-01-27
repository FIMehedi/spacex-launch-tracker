const daysCalculatorFromToday = (startingDay: string) => {
	const start = new Date(startingDay);
	const end = new Date();

	const diffTime = end.getTime() - start.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

export default daysCalculatorFromToday;
