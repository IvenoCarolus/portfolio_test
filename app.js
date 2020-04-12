const express = require("express");
const app = express();

app.use(express.static("client"));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App started at port:", PORT);
});