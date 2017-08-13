var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}];

app.get('/', function(req, res) {
    res.send("todo api root");
});
app.get('/todos', function(req, res) {
    response.json(todos);
});
app.listen(PORT, function() {
    console.log('Express running on port ' + PORT);
});
