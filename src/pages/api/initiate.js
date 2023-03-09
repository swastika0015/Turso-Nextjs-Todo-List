// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "@libsql/client";

export default async function handler(req, res) {
	const config = {
		url: process.env.NEXT_PUBLIC_DB_URL,
	};
	const db = connect(config);

	await db.execute(`
	create if not exists table todos (
	    id integer primary key AUTOINCREMENT,
	    text varchar2 not null
	);
	`);

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