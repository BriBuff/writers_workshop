var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    projects :[
        {
            type: Schema.Types.ObjectId,
            ref: "Project"
        }
       
    ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;