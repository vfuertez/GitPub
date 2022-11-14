const express = require('express');
const app = express();

const PORT = 3000

app.get('/', (request, response) => {
    response.send(`Welcome to the Gitpub App!`)
});


app.listen(PORT, (request, response) => {
    console.log(`Listening to port ${PORT}`)
});