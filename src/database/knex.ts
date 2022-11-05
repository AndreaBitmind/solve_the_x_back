const knex = require("knex");

const connectedKnex = knex({
  client: "sqilte3",
  connection: {
    filename: "stx.sqlite3",
  },
});

export default connectedKnex;
