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


db.User.create({
  name: "Jessica Blomer"},{password:"kate"})
  .then(function(dbUser){
  console.log(dbUser)
})
.catch(function(err){
  console.log(err.message);
});

db.Project.create({
title: "my first project",
body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
last_updated: Date
}).then(function(dbProject){
  console.log(dbProject)
}).catch(function(err){
  console.log(err.message)
});

// Define API routes here
// app.get("/dashboard", function(req, res){
//   const name = req.params.name;
//   db.User.find({
    
//   }).then(function(theUser){
//     res.json(theUser)
//   }).catch(function(err){
//     console.log(err.message);
//   })
// });

app.get("/dashboard/:name", function(req, res){
  const name = req.params.name;
  db.User.find({
    name: name
  }).populate("Project")
  .then(function(theUser){
    res.json(theUser)
  }).catch(function(err){
    console.log(err.message);
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
