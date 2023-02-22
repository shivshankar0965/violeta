const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", false);
dotenv.config({ path: "config/config.env" });

const connectDatabase = () => {
  mongoose.connect(process.env.mongoURL).then((data) => {
    console.log(`mongoDB connected with server: ${data.connection.host}`);
  });
  // .catch((err) => {
  //   console.log(err);
  // });
};

module.exports = {
  connectDatabase,
};
