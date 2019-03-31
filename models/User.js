var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: { 
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
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