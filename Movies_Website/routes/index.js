const express = require('express')
const router = express.Router()
const session = require('express-session')

router.use(session({
    secret: 'THISISSECRETKEY', 
    saveUninitialized: true 
}))

let users = [
    {username: 'johndoe', password: 'password'}, 
    {username: 'marydoe', password: 'password'}
]

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    const username = req.body.username 
    const password = req.body.password 

    const authenticatedUser = users.find((user) => {
        return user.username == username && user.password == password
    })

    if(authenticatedUser) {
        
        if(req.session) {
            req.session.username = username 
        }

        res.redirect('/movies')

    } else { // if the username or password was incorrect 
        res.render("login", {message: "Username or password is incorrect"})
    }
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let user = {username: username, password: password}
    users.push(user)
    
    res.redirect('/')
})

// router.get('/confirmation', (req, res) => {
//     const username = req.session.username
//     res.render('confirmation', {username: username})
// })

module.exports = router