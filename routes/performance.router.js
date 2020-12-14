const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance')
const Player = require('../models/player.model');

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");


//PUT api/performance/:id

router.put('/:id', isLoggedIn, (req, res, next ) => {  
    const { id } = req.params;
    const {
      attendance,
      coachComments,                               
      ftAttempted,
      ftConverted,
      twoPAttempted,
      twoPConverted,
      threePAttempted,
      threePConverted} = req.body
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    TrainingPerformance.findByIdAndUpdate(id,
      {attendance, coachComments, ftAttempted, ftConverted, twoPAttempted, twoPConverted, threePAttempted, threePConverted})
      .then(() => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).json(err);
      })
  });


  module.exports = router;