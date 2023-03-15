// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	// Create db connection
	const { db } = require('../routes');

	const { text } = req.body;
	if (!text) {
		res.status(400).json({
			message: "Fields cannot be empty",
		});
		return;
	}

	// Inserting tasks in ‘todos’ table

	try {
		// Perform the query
		const todo = await db.execute(
			"INSERT INTO todos (text) VALUES (?)",
			[text]
		);
		// Handle valid query result
		res.status(201).send('todo created successfully');

	  } catch (err) {

		// Handle query error
		console.error(err);
		res.status(500).send('Internal Server Error');
	  };
	}




