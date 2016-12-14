// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();



// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function(request, response){
  response.sendFile('views/index.html', {root: __dirname});
})

// Gallery View Route


// The Number Guessing Game

var targetNum = 50;

app.get('/pick-a-number', function(request, response){
  console.log(request.query);
  var number = parseInt(request.query.number);
  if(number === targetNum){
    response.send('Nailed it!');
  }else if (number > targetNum){
    response.send('Too High!');
  }else if(number < targetNum){
    response.send('Too Low');
  }else{
    response.send('Your guess could not be compared.')
  }

});

app.post('pick-a-number', function(request, response){
  targetNum = parseInt(request.body.number);
  response.status(200).send('Number updated succesfully');
});


// Gallery
var artworks = [];

app.get('art-gallery', function(request, response){
  response.json([]);

});

app.post('/artworks', function(request, response){
  var newArtwork = {
    title: request.body.title,
    artist: request.body.artist
    description: request.body.description,
  };
  artworks.push(newArtwork);
  response.json(artworks);
});



// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
