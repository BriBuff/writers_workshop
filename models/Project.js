var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: String,
    body: String,
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;