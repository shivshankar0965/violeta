const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors')
app.use(cors())
// Route Imports
app.use(express.json());
app.use(cookieParser());
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
// Middleware for Errors
app.use(errorMiddleware);
module.exports = app;
