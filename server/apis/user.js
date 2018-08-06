const express = require('express');
const router = express.Router();

require('../models/user');

const User = require('mongoose').model('User');

/* GET users listing. */
router.get('/users', (req, res) => {
	User.find({}, null, function (err, response) {
    if (err) {
      res.status(422).json({
        status: 'failed',
        data: err.message || 'Users fetching failed'
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: response
      });
    }
    return null;
  });
});

/* GET single user. */
router.get('/user/:emailId', (req, res) => {
  User.findOne({'email.address': req.params.emailId}, null, function (err, response) {
    if (err) {
      res.status(422).json({
        status: 'failed',
        data: err.message || 'Users fetching failed'
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: response
      });
    }
    return null;
  });
});

/* Add user. */
router.post('/user', (req, res) => {
  User.findOne({ email: req.body.email }, (err, resp) => {
    try {
      if (!resp) {
        const data = new User(req.body);
        data.save((error, response) => {
          if(error) {
            res.status(422).json({
              status: 'failed',
              data: error.message || 'Validation failed'
            });
          } else {
            res.status(200).json({
              status: 'success',
              data: response,
            });
          }
        });
      } else {
        res.status(409).json({
          status: 'failed',
          data: 'already exist',
        });
      }
    } catch(e) {
      console.log(':: e ',e)
      res.status(422).json({
        status: 'failed',
        data: error.message || 'Validation failed'
      });
    }
  });
});

module.exports = router;

