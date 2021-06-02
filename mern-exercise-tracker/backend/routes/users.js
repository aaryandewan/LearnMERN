const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    //the find method will get a list of all the users from the mongoDB. its a part of mongoose
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;