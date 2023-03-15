// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connect } from "@libsql/client";

export default async function handler(req, res) {
	const { config, db } = require('../routes');

	const { id } = req.query;

	if (req.method === "POST") {
		const todo = await db.execute(`SELECT * FROM todos WHERE id=?`, [
			id,
		]);

		if (todo.rows?.length === 0) {
			res.status(400).json({ message: "Unable to find todo" });
			return;
		}
	}

	try {
		// Perform the query
		const result = await db.execute(
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
