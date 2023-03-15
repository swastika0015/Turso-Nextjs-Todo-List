// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "@libsql/client";

export default async function handler(req, res) {
	const { config, db } = require('./routes');


	if (db) {
		res.status(200).json({
			status: "DB Connected",
		});
		return
	}

	res.status(500).json({
		status: "DB Not Connected",
	});
	return 
}