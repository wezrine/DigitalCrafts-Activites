const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const models = require('./models')
const { Op } = require('sequelize')

// Mustache Express
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// Body Parser
app.use(express.urlencoded())

// Load CSS & JS
app.use(express.static('css'))

app.get('/posts', (req, res) => {
    models.Post.findAll({})
    .then(posts => {
        res.render('posts', {posts: posts})
    })
})

app.post('/add-post', (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const category = req.body.category
    const isPublished = req.body.isPublished

    let post = models.Post.build({
        title: title,
        body: body,
        category: category,
        isPublished: isPublished
    })

    post.save().then((savedPost) => {
        console.log(savedPost)
        res.redirect('/posts')
    })
})

app.post('/delete-post', (req, res) => {
    const postId = req.body.postId

    models.Post.destroy({
        where: {
            id: postId
        }
    }).then(deletedPost => {
        res.redirect('/posts')
    })
})

app.get('/posts/category/:category', (req, res) => {

    const category = req.params.category

    models.Post.findAll({
        where: {
            category: {
                [Op.eq]: category
            }
        }
    }).then(posts => {
        res.render('posts', {posts: posts})
    })
})

// Launch Server
app.listen(3000, () => {
    console.log('Server is running...')
})