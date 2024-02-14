const { Client } = require("pg");

const config = {
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "nodejs",
};
const createClinet = () => new Client(config);

module.exports = createClinet;
