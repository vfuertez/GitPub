const express = require('express');
const app = express();
const drinks = require('./models/drinks')
const PORT = 3000

app.get('/', (request, response) => {
    response.send(`Welcome to the Gitpub App!`)
});

app.get('/drinks', (request, response) => {
    response.render("drinks_index.ejs")
})

app.listen(PORT, (request, response) => {
    console.log(`Listening to port ${PORT}`)
});