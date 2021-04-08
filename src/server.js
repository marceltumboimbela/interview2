const express = require("express");
const cors = require("cors");
const response = require("./response.json");
const app = express();
const port = 3001;

app.use(cors());

app.get("/section", (req, res) => {
  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
