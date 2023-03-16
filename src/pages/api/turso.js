import { createClient } from "@libsql/client";

const config = {
  url: process.env.NEXT_PUBLIC_DB_URL,
};

const db = createClient(config);

module.exports = {
  config,
  db
};