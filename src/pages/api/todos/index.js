// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connect } from "@libsql/client";
import { serializeData } from "../../../utils";


export default async function handler(req, res) {
	const config = {
		url: process.env.NEXT_PUBLIC_DB_URL,
	};

	const db = connect(config);

	if (req.method === "GET") {
		const todos = await db.execute(
			`select * from todos`
		);

		const result = serializeData(todos);



		res.status(200).json({
			data: result ? result : [],
		});

		return;
	}

	res.status(500).json({
		message: "Only supports GET method",
	});

	return;
}
