const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.route("/").get((req, res) => {
  console.log("NEW USER");
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running at port : ", port);
});
