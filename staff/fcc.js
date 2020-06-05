
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
// process.env.MESSAGE_STYLE=uppercae;

// --> 7)  Mount the Logger middleware here

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false }));

/** 1) Meet the node console. */

console.log("Hello world");

/** 2) A first working Express Server */

app.get('/', function (req, res) {

    res.send('Hello Express')

})

/** 3) Serve an HTML file */

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
});

/** 4) Serve static assets  */

app.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
app.get("/json", function (req, res) {
    // if(process.env.MESSAGE_STYLE==='uppercase'){
    res.json({
        "message": "Hello json".toUpperCase()
    });
});
// I've added it

/** 6) Use the .env file to configure the app */

const dotenv = require('dotenv'); // require the package
dotenv.config(); // configure it
// can you see things you console.log?
// yeah sure you not seeing it??// nope, where are you running the test? here
// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/use-the-.env-file
// did you try it?? hello are you there

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": "HELLO JSON" });
    }
    res.json({ "message": "Hello json" });
});


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !



/** 8) Chaining middleware. A Time server */

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
},
    (req, res) => {
        res.json({
            "time": req.time
        })
    });

/** 9)  Get input from client - Route parameters */

app.get('/:word/echo', (req, res) => {
    res.json({
        'echo': req.params.word
    });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get('/name', (req, res) => {
    res.send({ 'name': req.query.first + " " + req.query.last })
}).post('/name', (req, res) => {
    res.send({ 'name': req.body.first + " " + req.body.last })
})


/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
