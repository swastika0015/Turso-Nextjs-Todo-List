// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connect } from "@libsql/client";

export default async function handler(req, res) {
	const config = {
		url: process.env.NEXT_PUBLIC_DB_URL,
	};

	const db = connect(config);

	const { id } = req.query;

	if (!id) {
		res.status(400).json({
			message: "No id provided",
		});
		return;
	}

	if (req.method === "POST") {
		const todo = await db.execute(`SELECT * FROM todos WHERE id=?`, [
			id,
		]);

		if (todo.rows?.length === 0) {
			res.status(500).json({ message: "Unable to find todo" });
			return;
		}

		const result = await db.execute(
			`
		    DELETE FROM todos WHERE id=?
		    `,
			[id]
		);

		res.status(200).json({
			data: "Todo deleted successfully",
		});
		return;
	}

	res.status(500).json({
		message: "Only supports POST method",
	});
	return;
}
