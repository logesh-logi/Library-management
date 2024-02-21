const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/queries");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/getBooks", db.getBooks);

app.listen(process.env.PORT, () => {
  console.log("server running");
});
