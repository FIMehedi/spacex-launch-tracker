import daysCalculatorFromToday from './daysCalculatorFromToday';

export const filterByDays = (launchDate: string, filterDay: string) => {
	if (filterDay === 'all') return true;
	if (filterDay === 'last-week')
		return daysCalculatorFromToday(launchDate) <= 7;
	if (filterDay === 'last-month')
		return daysCalculatorFromToday(launchDate) <= 30;
	if (filterDay === 'last-year')
		return daysCalculatorFromToday(launchDate) <= 365;
	if (filterDay === 'last-5-year')
		return daysCalculatorFromToday(launchDate) <= 365 * 5;
};

export const filterByStatus = (status: boolean, filterStatus: string) => {
	if (filterStatus === 'all') return true;
	if (filterStatus === 'success' && status) return true;
	if (filterStatus === 'failure' && !status) return true;
};
