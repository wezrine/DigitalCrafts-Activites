const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.render('movies', {allMovies: movies})
})

router.get('/api', (req, res) => {
    res.json(movies)
})

router.post('/create-movie', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const imgURL = req.body.imgURL
    const movieId = uuidv4()

    let movie = {title: title, description: description, genre: genre, imgURL: imgURL, movieId: movieId}
    movies.push(movie)

    res.redirect('/movies')
})

router.get('/genre/:genre', (req, res) => {
    const genre = document.getElementById("genreSelect").value
    console.log(genre)
    res.render('genres')
})

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    let movie = movies.find((movie) => movie.movieId == movieId)
    
    res.render("movie-details", movie)
})

router.post('/delete-movie', (req, res) => {
    const movieId = req.body.movieId

    movies = movies.filter((movie) => {
        return movie.movieId != movieId
    })

    res.redirect('/movies')   
})

module.exports = router