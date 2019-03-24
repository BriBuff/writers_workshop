const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");

var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/writersworkshopdb", { useNewUrlParser: true });


db.User.create(
  {name: "bri", password:"katekate"})
  .then(function(dbUser){
  console.log("user create" + dbUser)
})
.catch(function(err){
  console.log(err.message);
});

db.Project.create({
title: "bri project",
body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even" 
}).then(function(dbProject){

  return db.User.update({}, { $push: { projects: dbProject._id } }, { new: true })
}).then(function(dbUser){
  console.log("user here" + dbUser)
  
})
.catch(function(err){
  console.log(err);
});



app.get("/dashboard/:name", function(req, res){
  
  db.User.find({

  }).populate("projects")
  .then(function(theUser){
    console.log(theUser)
    res.json(theUser)
  }).catch(function(err){
    res.json(err.message);
  })
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
