const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    name: String,
 	number: String,
    team: {type: Schema.Types.ObjectId, ref: "Coach"},
    image: String,
    email: String,   
})


const Player = mongoose.model('Player', playerSchema);
module.exports = Player;