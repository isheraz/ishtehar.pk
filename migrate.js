const { homedir } = require("os");
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "ishtehar",
});

client.connect();
