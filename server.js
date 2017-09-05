var express = require('express');
var app = express();
var bodyBarser = require('body-parser');
var _ = require('underscore');
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


app.get('/', function(req, res) {
    res.send("ToDo Api root");
});
app.get('/todos', function(req, res) {
    res.json(todos);
});
app.get('/todos/:id', function(req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo = _.findWhere(todos, { id: todoId });

    if (matchedTodo) {
        res.json(matchedTodo);
    }
    else {
        res.status(404).send();
    }
});

app.post('/todos', function(req, res) {
    var body = req.body;

    if (!_.isBool(body.completed) || _.isString(body.description))
        body.id = todoNextId++;
    todos.push(body);
    res, json(body);

    console.log(descriptipon)

});
app.listen(PORT, function() {
    console.log('Express running on port ' + PORT);
});
