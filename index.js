var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.json({message: "No input recieved"});
});
app.get('/:digit', function (req, res) {
  let digit = parseInt(req.params.digit)
  if(typeof digit === 'number') {
    res.json({sum: digit + 10});
  } else {
    res.json({message: "Input needs to be a number"});
  }
});
app.listen(process.env.PORT, function () {
  console.log('Listening on port ',process.env.PORT);
});