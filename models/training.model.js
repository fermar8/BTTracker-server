const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingSchema = new Schema ({
    coach: {type: Schema.Types.ObjectId, ref: "Coach"},
    date: Date,
    exercises: String,
    notes: String,
    stats: [{type: Schema.Types.ObjectId, ref: "TrainingPerformance"}]
 })      


const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;