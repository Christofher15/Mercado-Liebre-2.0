const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.use(express.static("public"));
