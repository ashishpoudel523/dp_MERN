const mongoose = require("mongoose");

//Tip: code where there is database connection, network/api request, always use async/await
async function connectToDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB database connected successfully.`);
}

module.exports = connectToDatabase;

//.env file = Environment variables in Node are used to store sensitive data such as passwords, API credentials, and other information that should not be written directly in code so that they are not uploaded to GitHub
