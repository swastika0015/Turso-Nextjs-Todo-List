// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	const { db } = require('./routes');


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