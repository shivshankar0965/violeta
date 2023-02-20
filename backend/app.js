const express = require("express");

const app = express();
// Route Imports
app.use(express.json());
const product = require("./routes/product.routes");

app.use("/api/v1", product);
module.exports = app;
