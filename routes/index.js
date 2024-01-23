var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var {Job} = require('../model');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var result
  try {
    result = await Job.findById((new mongoose.Types.ObjectId("659a58668b7f3ad675fb386c")));
    console.log(result.current_step);
  } catch (error) {
    console.log(error);
  }
 
  res.status(200).json({
    "messages": [
    {
      "attachment": {
        "type": "image",
        "payload": {
          "url": result.current_step
        }
      }
    }
    ],
      "set_attributes":
      {
      "exist": "true",
      "err":"false",
      "url": result.current_step,
      }
    });
});

module.exports = router;
