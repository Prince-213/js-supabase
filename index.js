// app.js
const express = require("express");
const path = require("path");
const app = express();

// Set the public directory for static files
app.use(express.static(path.join(__dirname, "public")));

// Set up a basic route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
