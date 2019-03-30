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


// db.User.create(
//   {name: "Susan Blomer", password:"susan"})
//   .then(function(dbUser){
//   console.log("user create" + dbUser)
// })
// .catch(function(err){
//   console.log(err.message);
// });

// db.Project.create({
// title: "project from hell",
// body: "rawr!!!!   arg!!!!!!!!! lakdja; enasldknfal;kjeal;kjeflnfal;kn" 
// }).then(function(dbProject){

//   return db.User.findOneAndUpdate({_id: "5c9e8941dfd8c4944c5cf037"}, { $push: { projects: dbProject._id } }, { new: true })
// }).then(function(dbUser){
//   console.log("user here" + dbUser)
  
// })
// .catch(function(err){
//   console.log(err);
// });


app.get("/pages", function(req, res){
  
  db.Project.find({
    
  })
  .then(function(theProj){
    console.log("dash id " + theProj)
    res.json(theProj)
  }).catch(function(err){
    res.json(err.message);
  })
});



app.get("/pages/:id", function(req,res){
  console.log(req.params.id);
  res.send("Hello");
});

app.get("/dashboard/:id", function(req, res){
  console.log("here dashboard id");
  var par = req.params.id;
  console.log(par);

  db.Project.findById(
    req.params.id, function(err, theUser){
      console.log(theUser);
      res.json(theUser);
    }
  );
});

app.get("/login", function(req, res){
  console.log("here login");
  var par = req.params.id;
  

  db.User.find({
    
  }).populate("projects")
  .then(function(theUser){
   
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
