const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const db =  "mongodb://localhost:27017/notetaker";

const notesRouter = require('./routes/note-route');
app.use('/notes',notesRouter);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
