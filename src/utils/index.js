export const serializeData = (data) => {
	const { columns, rows } = data;

	if (!rows || !columns) return null;

	let result = [];

	for (let i = 0; i < rows.length; i++) {
		const object = {};
		for (let j = 0; j < columns.length; j++) {
			object[columns[j]] = rows[i][j];
		}
		result.push(object);
	}

	if (result.length === 0) {
		return null;
	}

	return result;
};