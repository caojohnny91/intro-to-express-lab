const express = require('express');

const app = express();

const port = 3000;

const morgan = require("morgan");

const validator = require('validator')


// define middleware
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// 1. Be Polite, Greet the User

app.use('/greetings/:username', (req, res) => {
    res.send(`Hello ${req.params.username}! Great seeing you again!`);
});


// 2. Rolling the Dice

app.get('/roll/:number', (req, res, next) => {
    // const number = req.params.number;
    if (req.query.number === isNaN(number)) {
        res.send(`You rolled a ${req.params.number}!`)
    } else {
        res.send('You must specify a number')
    }    
});














