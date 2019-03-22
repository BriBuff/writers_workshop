var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: {
        type:String,
        unique: true
    },
    body: String
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;