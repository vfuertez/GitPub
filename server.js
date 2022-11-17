const { response } = require('express');
const express = require('express');
const app = express();
const drinks = require('./models/drinks')
const food = require('./models/food')
const PORT = 3000;


app.get('/', (request, response) => {
    response.send(`Welcome to the Gitpub App!`)
});


// Index
app.get('/drinks', (request, response) => {
    response.render("drinks_index.ejs", {
        allDrinks: drinks,
        allFood: food
    })
});

app.get('/food/:id', (request, response) => {
response.render('food_show.ejs', {
    allFoods: food[request.params.id],
    index: request.params.id
})
})


// Show route
app.get('/drinks/:id', (request, response) => {
    response.render('drinks_show2.ejs', {
        allDrinks: drinks[request.params.id],
        index: request.params.id
    }
    )
});



app.listen(PORT, (request, response) => {
    console.log(`Listening to port ${PORT}`)
});