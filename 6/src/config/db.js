const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("connect TO DB");
  } catch (error) {
    console.log("error while connecting to DB", error.message);
  }
}


module.exports = connectToDB