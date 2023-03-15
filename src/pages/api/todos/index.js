// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { serializeData } from "../../../utils";
const { db } = require('../turso');

export default async function handler(req, res) {

	if (req.method !== "GET") {
		res.status(403).json({
			message: "Only supports GET method!"
		})
	}

  // Fetching tasks from ‘todos’ table
	try {
    const todos = await db.execute(
      `select * from todos`
    );
  
    const result = serializeData(todos);
  
    res.status(200).json({
      data: result ? result : [],
    });

  } catch (err) {

		// Handle query error
		console.error(err);
		res.status(500).send('Internal Server Error');
  };
}