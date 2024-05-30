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

    if (isNaN(number) || Number(number) < 0 ) {
        res.send('You must specify a number');
    } else {
        res.send(`You rolled a ${req.params.diceNumber}`)
    }
});


// 3. I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;

        if (Number(index) < 0 || Number(index) >= collectibles.length) {
            res.send('This item is not yet in stock. Check back soon!');
        } else {
            const item = collectibles[Number(index)];
            res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
        }
    });














