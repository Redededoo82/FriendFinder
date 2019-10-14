var friendList = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function(req, res) {

      //Calculate total points for user submission
      var userPoints = 0;
      for(var i = 0; i < req.body.questionData.length; i++){
        userPoints += parseInt(req.body.questionData[i]);
      }


      
  });
};