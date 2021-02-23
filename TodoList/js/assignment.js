let taskTextBox = document.getElementById("taskTextBox")
taskTextBox.placeholder = "Enter a task"

let taskListPending = document.getElementById("taskListPending")
let taskListCompleted = document.getElementById("taskListCompleted")

let btnAddTask = document.getElementById("btnAddTask")
btnAddTask.addEventListener("click",function() {

    // creates div for task to live in
    let task = document.createElement("div")
    task.className = "task"
    taskListPending.appendChild(task)

    // creates checkbox
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type","checkbox")
    checkBox.addEventListener("click",function() {
        if (this.checked) {
            taskListCompleted.appendChild(this.parentNode)
        } else {
            taskListPending.appendChild(this.parentNode)
        }
    })
    task.appendChild(checkBox)

    // creates task label
    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskTextBox.value
    task.appendChild(taskLabel)


    // creates remove button
    let removeButton = document.createElement("button")
    removeButton.className = "removeButton"
    removeButton.innerHTML = "X"
    removeButton.addEventListener("click",function() {
        this.parentElement.remove()
    })
    task.appendChild(removeButton)

    // clear text box
    taskTextBox.value = ""
})