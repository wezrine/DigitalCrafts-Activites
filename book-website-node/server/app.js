const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')

app.use(cors())
app.use(express.json())

app.get('/books', (req, res) => {
    models.Book.findAll({
    }).then((books) => {
        res.json(books)
    })
})

app.post('/books', (req, res) => {

    const title = req.body.details.title
    const genre = req.body.details.genre
    const author = req.body.details.author
    const year = req.body.details.year
    const imageURL = req.body.details.imageURL

    let book = models.Book.build({
        title: title,
        genre: genre,
        author: author,
        year: year,
        imageURL: imageURL
    })

    book.save().then((persistedBook) => {
        console.log(persistedBook)
    })
})

app.post('/login', (req,res) => {
    models.User.findOne({
        where: {
            username: req.body.user.username
        }
    }).then(user => {
        console.log(user.username)
    })
})

app.post('/register', (req, res) => {
    const username = req.body.user.username
    const password = req.body.user.password

    let user = models.User.build({
        username: username,
        password: password
    })

    user.save().then((persistedUser) => {
        console.log(persistedUser)
    })
})

app.listen(8080, () => {
    console.log('Server is running...')
})