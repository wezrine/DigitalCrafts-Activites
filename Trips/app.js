const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
const { v4: uuidv4 } = require('uuid');
app.use(express.static('css'))

let trips = [
    {title: 'Africa', departureDate: '03/16/21', returnDate: '04/16/21', imgURL: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60', tripId: uuidv4()},
    {title: 'Ireland', departureDate: '03/22/21', returnDate: '04/22/21', imgURL: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aXJlbGFuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60', tripId: uuidv4()}
]

app.get('/trips', (req, res) => {
    res.render('trips', { allTrips: trips, totalTrips: trips.length})
})

app.get('/add-trip', (req, res) => {
    res.render('add-trip')
})

app.post('/create-trip', (req, res) => {
    const title = req.body.title
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate
    const imgURL = req.body.imgURL

    let trip = {title: title, departureDate: departureDate, returnDate: returnDate, imgURL: imgURL}
    trips.push(trip)

    res.redirect('/trips')
})

app.post('/delete-trip', (req, res) => {
    const tripId = req.body.tripId

    trips = trips.filter((trip) => {
        return trip.tripId != tripId
    })

    res.redirect('/trips')
})
app.listen(3000, () => {
    console.log('Server is running...')
})