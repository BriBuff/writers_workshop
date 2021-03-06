var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: {
        type:String
        
    },
    body: {
        type:String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    plan: {
        type: String
    }
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;