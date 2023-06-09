const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
