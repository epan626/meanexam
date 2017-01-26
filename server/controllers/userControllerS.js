var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  enter: function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
      console.log(user)
      if(!user){
        console.log('here')
        var user = new User({name: req.body.name})
        user.save(function(err, user){
            if(err){
              console.log('error while creating user')
            } else {
              console.log('creating user ' + user)
              res.json(user)
            }
          })
      } else {
        res.json(user)
      }
    })
  },
  loggeduser: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log(err)
      } else{
        res.json(user)
      }
    })
  },
  allusers: function(req, res){
  User.find({}, function(err, users){
    if(err){
     console.log('error locating all users')
   } else {
     console.log(users)
     res.json(users)
   }
  })
}
}
