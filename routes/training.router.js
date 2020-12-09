const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Coach = require('./../models/coach.model');
const Training = require('./../models/training.model');
const TrainingPerformance = require('./../models/training.performance.model')
const Player = require('../models/player.model');


// POST '/api/training'
router.post('/training', (req, res, next) => {
  const { date, exercises, notes} = req.body;

  Player.create({ name, number, image, email })
    .then((createdProject)=> {
      res
        .status(201)
        .json(createdProject);
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)
    })
})

// GET '/api/players/:id'

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

//PUT /api/players/:id

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


//DELETE api/players/:id

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