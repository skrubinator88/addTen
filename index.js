var express = require('express');
var app = express();
app.get('/:digit', function (req, res) {
  res.send(req.params.digit + 10);
});
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});