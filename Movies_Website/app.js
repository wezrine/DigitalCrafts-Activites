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
    {title: 'Lord of the Rings', description: 'LOTR', genre: 'action', imgURL: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg', movieId: uuidv4()},
    {title: 'Star Wars: A New Hope', description: 'First movie in Star Wars Saga', genre: 'action', imgURL: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', movieId: uuidv4()}
]

// Launch Server
app.listen(3000, () => {
    console.log('Server is running...')
})