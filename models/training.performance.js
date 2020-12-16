const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingPerformanceSchema = new Schema ({
    date: String,
    player: {type: mongoose.Schema.ObjectId, ref: "Player"},
    attendance: {type: Boolean},
    coachComments: {type: String},                                 
    ftAttempted: {type: Number},
    ftConverted: {type: Number},
    twoPAttempted: {type: Number},
    twoPConverted: {type: Number},
    threePAttempted: {type: Number},
    threePConverted: {type: Number},
    coach: {type: Schema.Types.ObjectId, ref: "Coach"}
    
})     


const TrainingPerformance = mongoose.model('TrainingPerformance', trainingPerformanceSchema);

module.exports = TrainingPerformance;