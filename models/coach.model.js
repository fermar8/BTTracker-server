const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Player = require('./../models/player.model');
//const Training = require('./../models/training.model');

const coachSchema = new Schema ({
  username: {type: String, unique: true},
  team: {type: String, unique: true},
  teamImage: String,
  coachImage: String,
  email: String,
  password: String,
  players: [{type: Schema.Types.ObjectId, ref: "Player"}],
  trainings: [{type: Schema.Types.ObjectId, ref: "Training"}],
})


const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;