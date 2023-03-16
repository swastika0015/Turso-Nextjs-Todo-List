export const serializeData = (data) => {
	const {
		columns,
		rows
	} = data;

	if (!rows || !columns) return null;

	let result = [];

	for (const element of rows) {
		const object = {};
		for (let j = 0; j < columns.length; j++) {
			object[columns[j]] = element[j];
		}
		result.push(object);
	}

	if (result.length === 0) {
		return null;
	}

	return result;
};