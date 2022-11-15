const { response } = require('express');
const express = require('express');
const app = express();
const drinks = require('./models/drinks')
const food = require('./models/food')
const PORT = 3000;



app.get('/drinks/:id', (request, response) => {
    response.send(request.params.id)
})


app.get('/drinks', (request, response) => {
    response.render("drinks_show.ejs", {
        allDrinks: drinks,
        allFood: food
    })
});


app.get('/', (request, response) => {
    response.send(`Welcome to the Gitpub App!`)
});



app.listen(PORT, (request, response) => {
    console.log(`Listening to port ${PORT}`)
});