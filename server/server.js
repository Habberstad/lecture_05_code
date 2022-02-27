import express from "express";

const app = express();

// path = /login
// handle login logic
app.get("/login", (req, res, next) => {
  res.json({ username: "Noen Andre Persson" });
});

app.post("/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("public"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on http://localhost:${server.address().port}`);
});
