const { Client } = require("pg");

const getConnection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "natanael",
    password: "linkds2003",
    database: "todo-list",
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
