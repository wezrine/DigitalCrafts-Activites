
const express = require('express')
const app = express()

// initializing pg promise 
const pgp = require('pg-promise')() 

app.use(express.static('css'))

// connection string 
const connectionString = 'postgres://localhost:5432/blogs'
const db = pgp(connectionString)

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

// get all blogs 
app.get('/', (req, res) => {
    db.any('SELECT blog_id, title, body, date_created, date_updated, is_published FROM blogs')
    .then(blogs => {
        res.render('index',{blogs: blogs})
    })
})

app.get('/add-blog', (req, res) => {
    res.render('add-blog')
})

app.post('/add-blog', (req, res) => {

    const title = req.body.title 
    const body = req.body.body
    const isPublished = req.body.isPublished == "on" ? true : false 

    db.none('INSERT INTO blogs(title, body, is_published) VALUES($1, $2, $3)',[title, body, isPublished])
    .then(() => {
        res.redirect('/')
    }) 
})

app.listen(3001,() => {
    console.log('Server is running...')
})