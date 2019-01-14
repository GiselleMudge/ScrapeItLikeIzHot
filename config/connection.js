//Require mongoose
const mongoose = require('mongoose');

//Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//local database connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() 
{
  console.log("Mongoose we have lift off!");
});

//Export the database
module.exports = db;