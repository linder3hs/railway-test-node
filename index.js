import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.json({
    message: "Hola mundo",
  });
});

app.listen(9000, () => console.log(`http://localhost:9000`));
