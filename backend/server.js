const app = require("./app");
const dotenv = require("dotenv");

const { connectDatabase } = require("./configs/database");
// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server is started working on http://localhost:${process.env.PORT}`
  );
});
