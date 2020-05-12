const express = require("express");

const app = express();
const server = app.listen(8160, function () {
  console.log("listening to PORT:" + server.address().port);
});

app.post("/post_electron", async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
});
