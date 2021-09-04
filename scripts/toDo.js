const newTaskForm = document.querySelector("[data-new-task-form]")
const newTaskInput = document.querySelector("[data-new-task-input]")
const taskContainer = document.querySelector("[data-task-container]")
const mobileActions = document.querySelector("[data-actions]")
const taskTemplate = document.getElementById("task-template")
const btnShowAll = document.querySelector("[data-btn-show-all]")
const btnShowActive = document.querySelector("[data-btn-show-active]")
const btnShowComplete = document.querySelector("[data-btn-show-complete]")
const btnClearComplete = document.querySelector("[data-btn-clear-complete]")
const btnClearTask = document.querySelector("[data-btn-clear-task]")
const checkboxes = document.querySelectorAll(".indicator")
const backgroundImg = document.querySelector(".background-img")

const tasks = []


newTaskForm.addEventListener("submit", e => {
    e.preventDefault()
    const newTask = newTaskInput.value
    if(newTask == null || newTask === "") return
    const task = createTask(newTask)
    newTaskInput.value = null
    renderTask(task)

})

btnClearComplete.addEventListener("click", () =>{
    clearCompletedTasks()
})

btnShowAll.addEventListener("click", () => {
    renderAllTasks()
})

btnShowActive.addEventListener("click", () => {
    renderActiveTasks()
})

btnShowComplete.addEventListener("click", () => {
    renderCompletedTasks()
})

function taskComplete(btn) {
    const checkbox = document.getElementById(btn.id)
    if(!checkbox.checked) {
        tasks.forEach(task => {
            if(task.id === btn.id) {
                task.complete = true 
                const completedTask = document.getElementById(task.name)
                completedTask.classList.add("checked")
            }
        })
    }else {
        tasks.forEach(task => {
            if(task.id === btn.id) {
                task.complete = false 
                const completedTask = document.getElementById(task.name)
                completedTask.classList.remove("checked")
            }
        })
    }
}

function createTask(newTask) {
    const task = {id: Date.now().toString(), name: newTask, complete: false}
    tasks.push(task)
    return task
}

function renderTask(task) {
    const taskElement = document.importNode(taskTemplate.content, true) // Store html template as variable
    const newTask = taskElement.querySelector(".new-task-container") // Grab new task container
    let newTaskId = task.id.substring(9, task.id.length - 1) // Create unique ID for task container 
    newTask.id = newTaskId 
    const checkbox = taskElement.querySelector("input")
    checkbox.id = task.id // Grab all parts of custom checkbox and give ID 
    const indicator = taskElement.querySelector(".indicator")
    indicator.id = task.id
    const todoContainer = taskElement.querySelector(".todo-task")
    todoContainer.id = task.name
    const label = taskElement.querySelector(".checkbox-label")
    label.htmlFor = task.id
    const taskLabel = taskElement.querySelector(".todo")
    const clearTaskBtn = taskElement.querySelector(".clear-task")
    clearTaskBtn.id = task.id
    taskLabel.prepend(task.name) // Prepend label instead of append so flex space between will seperated checkbox and X button
    taskContainer.appendChild(taskElement) // Append new task element to task container
    taskContainer.style.display = "block"
    mobileActions.style.display= "block"; // Display mobile actions
}

function clearTask(clearBtn) {
    tasks.forEach(task => {
        if(clearBtn.id === task.id) {
            const taskIndex = tasks.indexOf(task)
            tasks.splice(taskIndex, taskIndex + 1)
            console.log(tasks)
            let taskId = task.id.substring(9, task.id.length - 1)
            document.getElementById(taskId).style.display = "none"
        }
    })
}

function clearCompletedTasks() {
    tasks.forEach(task => {
        if(task.complete) {
            const completedIndex = tasks.indexOf(task)
            tasks.splice(completedIndex, completedIndex + 1)
            console.log(tasks)
            let taskId = task.id.substring(9, task.id.length - 1)
            document.getElementById(taskId).style.display = "none"
        }
    })
}

function renderAllTasks() {
    tasks.forEach(task => {
        const taskId = task.id.substring(9, task.id.length - 1)
        document.getElementById(taskId).style.display = ""
    })
}

function renderActiveTasks() {
    tasks.forEach(task => {
        let taskId = task.id.substring(9, task.id.length - 1)

        if(task.complete) {
            document.getElementById(taskId).style.display = "none"
        }else {
            document.getElementById(taskId).style.display = ""
        }
    })
}

function renderCompletedTasks() {
    tasks.forEach(task => {
        let taskId = task.id.substring(9, task.id.length - 1)

        if(!task.complete) {
            document.getElementById(taskId).style.display = "none"
        }else {
            document.getElementById(taskId).style.display = ""
        }
    })
}

