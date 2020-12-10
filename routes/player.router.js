const express = require('express');
const mongoose = require('mongoose');
const Player = require('../models/player.model');
const router  = express.Router();
const {isLoggedIn} = require("../helpers/middlewares");
const Coach = require('../models/coach.model');
const Training = require('../models/training.model');
const TrainingPerformance = require('../models/training.performance');


//POST - Can't set team to coachId and push coachId to players array (managed but deleted)
//DELETE - When I managed to delete it only deleted player but not objectId from coach players array

// POST '/api/players' 
router.post('/players', (req, res, next) => {
  const { name, number, image, email, team} = req.body;

  Player.create({
    name: name,
    number: number,  
    image: image,
    email: email,
    team: team
})
  .then((newPlayer) => {

    Coach.findByIdAndUpdate( 
      team, 
      { $push: { players: newPlayer._id } }
    )
      .then((updatedCoach) => {
        res.status(201).json(updatedCoach);
      })
      .catch(err => {
        res.status(500).json(err);
    })
})
.catch(err => {
  res.status(500).json(err);
})
})
    


// GET '/api/players/:id'

router.get('/players/:id', (req, res, next) =>  {
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

router.delete('/players/:id', isLoggedIn, (req, res, next) => {
  const playerId  = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(playerId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

 Player.findByIdAndRemove(playerId)
    .then(() => {
  const { _id } = req.session.currentUser
  Coach.findByIdAndUpdate(_id, {$pull: {players: playerId}})
    .then(() => {
    res
    .status(202)  //  Accepted
    .send(`Document ${playerId} was removed successfully.`);
  })
  .catch( err => {
    res.status(500).json(err);
  })
})
  .catch( err => {
    res.status(500).json(err);
  })
});

module.exports = router;