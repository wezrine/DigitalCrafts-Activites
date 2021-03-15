
let todos = []


const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/todos", (req, res) => {
    res.json(todos)
})

app.post("/todos", (req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date

    const todo = {title: title, priority: priority, date: date}
    todos.push(todo)

    res.json({message: "Todo has been added!"})
})














app.listen(3000, () => {
    console.log("Server is running...")
})