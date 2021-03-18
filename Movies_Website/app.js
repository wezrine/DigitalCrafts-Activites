const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

// Mustache Express
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// Body Parser & Unique ID Package
app.use(express.urlencoded())
const { v4: uuidv4 } = require('uuid');

// Load CSS & JS
app.use(express.static('css'))
app.use(express.static('js'))

// Routes
const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')
app.use('/', indexRouter)
app.use('/movies', moviesRouter)

// Global Array
global.movies = [
    {title: 'Lord of the Rings', description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', genre: 'action', imgURL: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg', movieId: uuidv4()},
    {title: 'Star Wars: A New Hope', description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.", genre: 'action', imgURL: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', movieId: uuidv4()},
    {title: 'Coming 2 America', description: 'The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.', genre: 'comedy', imgURL: 'https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg', movieId: uuidv4()},
    {title: 'WandaVision', description: 'Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.', genre: 'sci-fi', imgURL: 'https://i.redd.it/w7tyrm8khve61.jpg', movieId: uuidv4()},
    {title: 'Lost', description: 'The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.', genre: 'mystery', imgURL: 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg', movieId: uuidv4()}
]

// Launch Server
app.listen(3000, () => {
    console.log('Server is running...')
})