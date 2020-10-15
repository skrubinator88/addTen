var express = require('express');
var app = express();
app.get('/:digit', function (req, res) {
  if(req.params.digit) {
    res.json({sum: req.params.digit + 10});
  } else {
    res.json({message: "No input recieved"});
  }
});
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});