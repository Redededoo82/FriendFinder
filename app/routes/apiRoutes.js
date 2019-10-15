var friendList = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
      //Calculate total points for user
      var userPoints = 0;
      for(var i = 0; i < req.body.questionData.length; i++){
        userPoints += parseInt(req.body.questionData[i]);
      }

      //convert user data to an array

      //compare difference between user score and friends scores.
      
      //calculate absolute value of the differences.
  });
};