//this is just redferencing the express library.
const express = require ('express');
const app = express();

//set port to 3000
app.listen(3000, () => console.log('Listening at 3000'));
//define location for server to post to localhost
app.use(express.static('public'));
