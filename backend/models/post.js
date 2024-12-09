const mongoose = require("mongoose");
const {Schema} = mongoose;

const post = mongoose.model("posts", {
  titre: {
    type: String, 
  },
  contenu:{
    type: String,
  }
 
  
});
module.exports = post;
