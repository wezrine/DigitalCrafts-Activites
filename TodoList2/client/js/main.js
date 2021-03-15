const todosUL = document.getElementById("todosUL")
const titleInput = document.getElementById("titleInput")
const priorityInput = document.getElementById("priorityInput")
const dateInput = document.getElementById("dateInput")
const addTodoButton = document.getElementById("addTodoButton")

addTodoButton.addEventListener("click", function () {
    const title = titleInput.value
    const priority = priorityInput.value
    const date = dateInput.value

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            priority: priority,
            date: date
        })
        }).then(response => response.json())
            .then(result => {
                getAllTodos()
            })
        
            titleInput.value = ""
            priorityInput.value = ""
            dateInput.value = ""
})

function getAllTodos() {
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todos => {
            const todoItems = todos.map((todo) => {
                
                return `<li>${todo.title} - ${todo.priority} - ${todo.date} <button onclick="deleteTodo()">X</button></li>`
            })
            todosUL.innerHTML = todoItems.join("")
        })
}

getAllTodos()

function deleteTodo() {

}