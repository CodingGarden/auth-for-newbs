const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const db = require('../db/connection');
const users = db.get('users');
users.createIndex('username', { unique: true });

const router = express.Router();

const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
  password: Joi.string().min(10).required()
});

// any route in here is pre-pended with /auth
router.get('/', (req, res) => {
  res.json({
    message:  '🔐'
  });
});

router.post('/signup', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    users.findOne({
      username: req.body.username
    }).then(user => {
      // if user is undefined, username is not in the db, otherwise, duplicate user detected
      if (user) {
        // there is already a user in the db with this username...
        // respond with an error!
        const error = new Error('That username is not OG. Please choose another one.');
        next(error);
      } else {
        // hash the password
        bcrypt.hash(req.body.password, 12).then(hashedPassword => {
          // insert the user with the hashed password
          const newUser = {
            username: req.body.username,
            password: hashedPassword
          };

          users.insert(newUser).then(insertedUser =>{
            res.json(insertedUser);
          });
        });
      }
    });
  } else {
    next(result.error);
  }
});

module.exports = router;
