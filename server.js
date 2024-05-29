const express = require('express');

const app = express();

const port = 3000;

const morgan = require("morgan");

const validator = require('validator')

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// define middleware
app.use(morgan('dev'));


// 1. Be Polite, Greet the User

app.use('/greetings/:username', (req, res) => {
    res.send(`Hello ${req.params.username}! Great seeing you again!`);
});


// 2. Rolling the Dice

app.get('/roll/:diceNumber', (req, res) => {
    const number = req.params.diceNumber

    if (isNaN(number)) {
        res.send('You must specify a number');
    } else {
        res.send(`You rolled a ${req.params.diceNumber}`)
    }
});















