let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    userData: Object, 
});


let actorDataSkelton = mongoose.model("actorDataSkelton", userSchema);
module.exports = actorDataSkelton;
