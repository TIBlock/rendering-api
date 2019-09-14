/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));



// GET /api/albums
app.get('/api/albums', (request, response, nextFn) => {
    response.json(albums);
});

// GET /api/circles
app.get('/api/circles', (request, response, nextFn) => {
    response.json(circles);
});

// GET /api/movies
app.get('/api/movies', (request, response, nextFn) => {
    response.json(movies);
});

// GET /api/nametags
app.get('/api/nametags', (request, response, nextFn) => {
    response.json(albums);
});

// GET /api/poker
app.get('/api/poker', (request, response, nextFn) => {
    response.json(poker);
});

// GET /api/rectangle
app.get('/api/rectangle', (request, response, nextFn) => {
    response.json(rectangle);
});

// GET /api/restaurants
app.get('/api/restaurants', (request, response, nextFn) => {
    response.json(restaurants);
});

// GET /api/students
app.get('/api/students', (request, response, nextFn) => {
    response.json(students);
});

// GET /api/surveys
app.get('/api/surveys', (request, response, nextFn) => {
    response.json(surveys);
});

// GET /api/tweets
app.get('/api/tweets', (request, response, nextFn) => {
    response.json(tweets);
});

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})

function logAll(request,response,nextFn){

    console.log("A request is coming in to ", request.path);
    nextFn()
};