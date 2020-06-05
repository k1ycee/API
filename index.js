const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:word/blah', function(req, res) {
    res.send(req.params.word)
})

app.get('/name', (req, res) => {
    res.send(req.query.first + " " + req.query.last)
})



app.listen(3000)