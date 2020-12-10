const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance')
const Player = require('../models/player.model');

//get list of players -- only need id's
//map over the list of players and create new empty performance for each player 
// when mapping we need to return a promise

// const performancePromises = playersIdsArr.map(( playerId) => {
//  const pr = TrainingPerformance.create({ player: playerId ,.... })
//  return pr;
// })
// Promise.all(performancePromises)
//    .then((createdPerformances))

//add created performances to stats array
// POST '/api/training'
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
trainingMapCreate.map(singlePerf => {
  Training.findOneAndUpdate(dateDay, 
    {$push: {stats: singlePerf._id}}, {new: true})

})
  
  res.status(200).json(performanceFind);
  } catch(err){
    res.status(400).send(err)
  }
  })
      //Promise.all(performancePromises)
        /*.then((createdPerformances) => {
          const {date, exercises, notes, coach} = req.body
          const {_id} = req.session.currentUser
          Training.create({date, exercises, notes, coach: _id})
            .then((createdTraining) =>{
              const {_id } = req.session.currentUser
              Coach.findByIdAndUpdate(_id, {$push: {trainings: createdTraining._id}}, {new:true})
                .then((createdCoach))
                res
                .status(201)
                .json(createdCoach)
            })
            .catch((err)=> {
              res
                .status(500)  // Internal Server Error
                .json(err)
        })        
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)  
  })
  .catch((err)=> {
    res
      .status(500)  // Internal Server Error
      .json(err)
     })

   })*/
   /*.catch((err)=> {
    res
      .status(500)  // Internal Server Error
      .json(err)

   })
  //})*/

//get list of players -- only need id's
//map over the list of players and create new empty performance for each player 
// when mapping we need to return a promise

// const performancePromises = playersIdsArr.map(( playerId) => {
//  const pr = TrainingPerformance.create({ player: playerId ,.... })
//  return pr;
// })
// Promise.all(performancePromises)
//    .then((createdPerformances))

//add created performances to stats array
  /*Training.create({ date, exercises, notes, stats: [], coach})
    .then((createdTraining)=> {
      const { id } = req.session.currentUser;
      Coach.findOneAndUpdate(id, {$push: {trainings: createdTraining._id}}, {new:true})
      res
        .status(201)
        .json(createdTraining);
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)
    })
})
*/
// GET '/api/training/:id'

router.get('/players', (req, res, next) =>  {
  const { id } = req.params;
  
  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)  //  Bad Request
      .json({ message: 'Specified id is not valid'})
    return;
  }

  Player.findById(id)
        .then( (foundPlayer) => {
          res.status(200).json(foundPlayer); //OK
        })
        .catch((err) => {
          res.status(500).json(err);
      })

});

//PUT /api/training/:id

router.put('/players/:id', (req, res, next ) => {
  const { id } = req.params;
  const {name, number, image, email} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Player.findByIdAndUpdate(id, {name, number, image, email})
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


//DELETE api/training/:id

router.delete('/players/:id', (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Player.findByIdAndRemove(id)
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