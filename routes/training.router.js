const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance')
const Player = require('../models/player.model');


// POST '/api/training' // when first creating training it's not updating stats array + when creating again it's pushing perfId multiple times
// when pushing trainingPerformance it's pushing to first training that matches date. //gives 400

//PUT how to update training + trainingPerformance? 

router.post('/training', async (req, res, next) => {
  const { _id } = req.session.currentUser;
  var dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  
  const dateDay = year + "/" + month + "/" + day;

try{
 
  let coachFind = await Coach.findById(_id);
  let trainingMapCreate = coachFind.players.map(playersId => {
   TrainingPerformance.create({
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
Training.create({
  coach: _id,
  date: dateDay,
  exercises: "",
  notes: "",
  stats:[]
})
  
let performances = await TrainingPerformance.find({"date" : { $in : [dateDay]}})

let updateTraining = performances.map(singlePerf => {
  Training.findOneAndUpdate({"date" : { $in : [dateDay]}}, 
  {$push: {stats: singlePerf._id}}, {new:true})
   .then(response => console.log('response', response))

})

  res.status(200).json(response);
  } catch(err){
    res.status(400).send(err)
  }
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

router.put('/training/:id', async (req, res, next ) => {  
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