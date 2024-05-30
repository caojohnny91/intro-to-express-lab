const express = require("express");

const app = express();

const port = 3000;

const morgan = require("morgan");

const validator = require("validator");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// define middleware
app.use(morgan("dev"));

// 1. Be Polite, Greet the User

app.use("/greetings/:username", (req, res) => {
  res.send(`Hello ${req.params.username}! Great seeing you again!`);
});

// 2. Rolling the Dice

app.get("/roll/:diceNumber", (req, res) => {
  const number = req.params.diceNumber;

  if (isNaN(number) || Number(number) < 0) {
    res.send("You must specify a number");
  } else {
    res.send(`You rolled a ${req.params.diceNumber}`);
  }
});

// 3. I Want THAT One!

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:index", (req, res) => {
  const index = req.params.index;

  if (Number(index) < 0 || Number(index) >= collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    const item = collectibles[Number(index)];
    res.send(
      `So, you want the ${item.name}? For ${item.price}, it can be yours!`
    );
  }
});

// 4. Filter Shoes by Query Parameters

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  const minPrice = req.query.minPrice ? Number(req.query.minPrice) : 0;
  const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : Infinity;
  const type = req.query.type || null;

  const filteredShoes = shoes.filter((shoe) => {
    return (
      shoe.price >= minPrice &&
      shoe.price <= maxPrice &&
      (!type || shoe.type === type)
    );
  });
  res.send(filteredShoes);
});
