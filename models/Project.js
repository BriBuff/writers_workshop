var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: {
        type:String,
        unique: true
       
    },
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;