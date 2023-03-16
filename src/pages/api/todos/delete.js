// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { db } = require('../turso');

export default async function handler(req, res) {

	const { id } = req.body;

	if (req.method !== "POST") {
		res.status(403).json({
			message: "Only supports POST method!",
		});
	}
	const todo = await db.execute(`SELECT * FROM todos WHERE id=?`, [
		id,
	]);

	if (todo.rows?.length === 0) {
		res.status(400).json({ message: "Unable to find todo" });
		return;
	}

	try {
		// Perform the query
		await db.execute(
			`
			DELETE FROM todos WHERE id=?
			`,
			[id]
		);
		// Handle valid query result
		res.status(201).send('todo deleted successfully');
	} catch (err) {
		// Handle query error
		console.error(err);
		res.status(500).send("Internal server error");
	};
}
