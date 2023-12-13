const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Successfully connect to the database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo connection error ${error}`);
  }
};

module.exports = connectDB;
