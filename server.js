const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");

require("dotenv").config();

var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/writersworkshopdb", { useNewUrlParser: true });



app.get("/login/:id", function(req, res){
  
  db.User.find({_id:req.params.id}).populate("projects")
  .then(function(theUser){  
    res.json(theUser)
  }).catch(function(err){
    res.json(err.message);
  })
});

app.get("/user/:id", function(req, res){
  
  db.User.find({_id:req.params.id}).populate("projects")
  .then(function(theUser){
    console.log("theUser" + theUser)
    res.json(theUser)
  }).catch(function(err){
    res.json(err.message);
  })
});





app.post("/register", function(req, res) {
  
  db.User.create(req.body)
    
    .then(function(theUser) {
      
      res.json(theUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});



app.post("/create/:id", function(req, res) {
  
  const id = req.params.id;
  
  db.Project.create(req.body)

  .then(function(dbProj){
    res.json(dbProj);
    return db.User.update({_id: id}, { $push: { projects: dbProj._id } }, { new: true });
    
  })
  .catch
  (err=>console.log(err))
});

app.post("/update/:id", function(req,res){
 
  db.Project.updateOne({_id: req.params.id}, {title: req.body.title, body: req.body.body})
  .then(function(proj){
    
    res.json(proj);
  }).catch(err=>console.log(err))
});

app.delete("/delete/:id", function(req,res){
  const id = req.params.id;
  
  db.Project.deleteOne({_id: id})
  .then(function(proj){

    
    res.json(proj);
  })
  .catch(err=>console.log(err))
});


app.get("/login", function(req, res){
  
  db.User.find({}).populate("projects")
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
