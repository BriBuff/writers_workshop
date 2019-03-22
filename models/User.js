var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String
    },
    projects :[
        {
            type: Schema.Types.ObjectId,
            ref: "Projects"
        }
       
    ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;