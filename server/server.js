import express from "express";
import path from "path";

const app = express();

// path = /login
// handle login logic
app.get("/api/login", (req, res, next) => {
  res.json({ username: "Noen Andre Persson" });
});

app.post("/api/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on http://localhost:${server.address().port}`);
});
