const newTaskForm = document.querySelector("[data-new-task-form]")
const newTaskInput = document.querySelector("[data-new-task-input]")
const taskContainer = document.querySelector("[data-task-container]")
const taskTemplate = document.getElementById("task-template")

const tasks = []


newTaskForm.addEventListener("submit", e => {
    e.preventDefault()
    const newTask = newTaskInput.value
    if(newTask == null || newTask === "") return
    createTask(newTask)
    newTaskInput.value = null

})

function createTask(newTask) {
    const task = {id: Date.now().toString(), name: newTask, complete: false}
    tasks.push(task)
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector("input")
    checkbox.id = task.id
    const label = taskElement.querySelector(".checkbox-label")
    label.htmlFor = task.id
    const taskLabel = taskElement.querySelector(".todo")
    taskLabel.append(task.name)
    taskContainer.appendChild(taskElement)
    
}