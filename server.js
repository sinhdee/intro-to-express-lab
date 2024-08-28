//import the express 
const express = require('express')

///initialize the app 
const app = express ()

//define a 'home' route 
app.get('/',(req,res)=>res.send('Express Lab Home'))

//start the listener method 
app.listen(3000, () =>console.log('Server is running'))

//requirements 
//attempt all excerises (4)
//only 3 of 4 need to work (1-3)

app.get('/greetings/:username',(req,res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}! What a delight it is to see you!`)
})

app.get('/roll/:number',(req,res) => {
 const numberParam =req.params.number;
 const number = parseInt(numberParam)
 if (isNaN(number)){
    return res.send("You must specify a number.")
}
const rolledNum = Math.floor(Math.random() * number + 1);
res.send(`you rolled a ${rolledNum}`)
});

app.get('/collectibles/:index', (req,res) => {
const index = parseInt(req.params.index,10);

if(isNaN(index)|| index< 0 || index >= collectibles.length){
  return res.send("This item is not yet in stock. Check back soon!");
}
//include other parameters or else it will not run 
const item = collectibles[index];
res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)

});

//Using Query Parameters 
app.get('/hello', (req, res) => {
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
