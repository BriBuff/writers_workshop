var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChapterSchema = new Schema({

});

var Chapter = mongoose.model("Chapter", UserSchema);

module.exports = Chapter;