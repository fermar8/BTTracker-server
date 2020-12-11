const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance')
const Player = require('../models/player.model');


// POST '/api/training' it's not updating stats array first time I do the request + when requesting again it's pushing performanceId multiple times
// when pushing trainingPerformance it's pushing to first training that matches date. Should be OK

//PUT how to update training + trainingPerformance? 

router.post('/training', (req, res, next) => {
  const { _id } = req.session.currentUser;
  var dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  
  const dateDay = year + "/" + month + "/" + day;

 
  // Create coach and then
  Coach.findById(_id)
    .then(coachFind => {
      // Create an array of promises `performancePrs`
      let performancePrs = coachFind.players.map(playersId => {
        return TrainingPerformance.create({
         date: dateDay,
         player: playersId,
         attendance: true,
         coachComments: "",                                 
         ftAttempted: 0,
         ftConverted: 0,
         twoPAttempted: 0,
         twoPConverted: 0,
         threePAttempted: 0,
         threePConverted: 0
       })
     })

      // wrap TrainigPerformance.create promises in one big promise and pass it to next block once done
      const bigPr = Promise.all(performancePrs);
      return bigPr;

    })
    .then((createdPerformances) => {
      // Create array containing only ids, out of `createdPerformances`
      const performanceIds = createdPerformances.map(performance => {
        return performance._id
      })

      const pr = Training.create({
        coach: _id,
        date: dateDay,
        exercises: "",
        notes: "",
        stats: [ ...performanceIds ]
      })

      return pr;

    })
    .then((createdTraining) => {
      res.status(200).json(createdTraining);
    })
    .catch((err)=>  next(err) )
  
  

})
     
// GET '/api/training/:id'

router.get('/training/:id', (req, res, next) =>  {
  const { id } = req.params;
  
  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)  //  Bad Request
      .json({ message: 'Specified id is not valid'})
    return;
  }

  Training.findById(id)
        .populate('stats')
        .populate({ path: 'stats', populate: 'player'})

        .then( (foundTraining) => {
          res.status(200).json(foundTraining); //OK
        })
        .catch((err) => {
          res.status(500).json(err);
      })

});

//PUT /api/training/:id

router.put('/training/:id', (req, res, next ) => {  
  const { id } = req.params;
  const {
    exercises, notes} = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Training.findByIdAndUpdate(id,
    {exercises, notes})
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


//DELETE api/training/:id

router.delete('/training/:id', (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Training.findByIdAndRemove(id)
  .then(() => {
    res
      .status(202)  //  Accepted
      .send(`Document ${id} was removed successfully.`);
  })
  .catch( err => {
    res.status(500).json(err);
  })
});

module.exports = router;