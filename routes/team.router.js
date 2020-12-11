const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance')
const Player = require('../models/player.model');




//GET /api/team/

router.get('/', (req, res, next) => {
  const  {_id}  = req.session.currentUser;
    Coach.findById(_id)
         .populate('players')
         .then( (foundTeam) => {
            res.status(200).json(foundTeam);  // OK
        })
        .catch((err) => {
          res.status(500).json(err);
         }) 
});


//GET /api/team/stats

router.get('/stats', (req, res, next) => {
    const { _id } = req.session.currentUser;

    if ( !mongoose.Types.ObjectId.isValid(_id)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Specified id is not valid'})
        return;
      }

    Training.find()
         .populate('stats')
         .populate({ path: 'stats', populate: 'player'})
         .then( (teamStats) => {
            res.status(200).json(teamStats);  // OK
          })
          .catch((err) => {
            res.status(500).json(err);		// Internal Server Error
          })
        });


module.exports = router;