// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { db } = require("../turso");

export default async function handler(req, res) {
  
  if (req.method !== "POST") {
    res.status(403).json({
      message: "Only supports POST method!",
    });
  }

  const { text } = req.body;

  if (!text) {
    res.status(400).json({
      message: "Fields cannot be empty",
    });
    return;
  }

  // Inserting tasks into ‘todos’ table
  try {
    // Perform the query
    await db.execute("INSERT INTO todos (text) VALUES (?)", [text]);

    // Handle valid query result
    res.status(201).send("todo created successfully");
  } catch (err) {
    // Handle query error
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}