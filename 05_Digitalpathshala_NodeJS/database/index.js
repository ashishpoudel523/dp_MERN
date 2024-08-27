const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://ashishpoudel523:learnMern3.0@cluster0.evlj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`MongoDB database connected successfully.`);
}

module.exports = connectToDatabase;
