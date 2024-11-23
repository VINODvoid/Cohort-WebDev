const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}course-app`,
    );
    console.log("\n MongoDB is connected");
  } catch (error) {
    console.log("MongoDB CONNECTION ERROR", error);
    process.exit(1);
  }
};

module.exports = connectDB;
