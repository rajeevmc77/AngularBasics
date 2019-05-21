var express = require('express');
var User = require('../dbLayer/models')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    allusers =   users ;// JSON.stringify(users);
    // console.log("All users:", allusers);
    res.json({users: allusers});
  });  
});

router.post('/',function(req,res,next){
  if(req.body.userName && req.body.password ){
    User.create({ userName: req.body.userName, password: req.body.password })
    .then(usr => {
      // console.log("objectID is ", usr.id);
      res.json({response: true});
    })
    .catch(err => {
        res.json({response: false});
      }
    );
  }  
});

router.post('/createUser',function(req,res,next){
  if(req.body.userName && req.body.password ){
    User.create({ userName: req.body.userName, password: req.body.password })
    .then(usr => {
      // console.log("objectID is ", usr.id);
      res.json({response: true});
    })
    .catch(err => {
        res.json({response: false});
      }
    );
  }  
});

router.post('/verify',function(req,res,next){
  if(req.body.userName && req.body.password ){
    User.findAll({
      where: {
        userName: req.body.userName,
        password: req.body.password
      }
    })
    .then(usr => {
      if( usr.length > 0){
        // console.log("Object Is  ", usr);
        res.json({response: true});
      }
      else{
        // console.log("Object Is  ", usr);
        res.json({response: false});
      }
    })
    .catch(err => {
        res.json({response: false});
      }
    );
  }  
});

module.exports = router;
