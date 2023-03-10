// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connect } from "@libsql/client";

export default async function handler(req, res) {
	// Create db connection
	const config = {
		url: process.env.NEXT_PUBLIC_DB_URL,
	};
	const db = connect(config);

	const { text } = req.body;

	if (!text) {
		res.status(400).json({
			message: "Fields cannot be empty",
		});
		return;
	}

	const todo = await db.execute(
		"INSERT INTO todos (text) VALUES (?)",
		[text]
	);

	if (todo.error) {
		res.status(500).json({
			message: todo.error,
		});
		return;
	}

	res.status(201).json({
		data: "Todo added",
	});

	return;
}
