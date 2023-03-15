
import { connect } from "@libsql/client";

const config = {
    url: process.env.NEXT_PUBLIC_DB_URL,
};

const db = connect(config);

module.exports = {
    config,
    db
};