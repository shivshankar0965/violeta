const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const { connectDatabase } = require("./config/database");
// Handeling Uncaught exeception;

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to uncaught exception`);
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const server = app.listen(process.env.PORT, () => {
  console.log(
    `server is started working on http://localhost:${process.env.PORT}`
  );
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
