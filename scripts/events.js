const taskForm = document.querySelector("[data-new-task-form]")
const taskInput = document.querySelector("[data-new-task-input]")
const actionsBtns = document.querySelectorAll(".btn")
const tasksContainer = document.querySelector("[data-task-container]")
const btnChangeTheme = document.querySelector("[data-btn-change-theme]")
// Set tasks to and empty array
let tasks = []
// Create new instance of each class
todo = new Todo
render = new Render
actions = new Actions
dragAndDrop = new DragAndDrop
themes = new Themes

// Check for users prefered color scheme
themes.getPreferedTheme()

// Add event listner to each actions btn
for(let btn of actionsBtns) {
    btn.addEventListener("click", e => {
        // Run actions.showTasks() each time a actions btn is clicked
        actions.showTasks(e)
        if(e.target.innerText === "Clear Completed") {
            todo.clearCompleted()
            render.hideActions()
        }
    })
}

// Add event listener to btnChangeTheme
btnChangeTheme.addEventListener("click", () => {
    // Each time change theme btn is clicked run themes.changeTheme()
    themes.changeTheme()
})

// Add event listner to task form
taskForm.addEventListener("submit", e => {
    //Prevent browser from refreshing
    e.preventDefault() 
    // Store user input in variable 
    const userInput = taskInput.value 
     // Check for valid input
    if( userInput == null || userInput === "" ) return
    // Add new task to tasks array
    const task = todo.createTask(userInput)
    // Create new taskElement usind html Template
    const taskElement = todo.setIds(task)
    // Render new task to page
    render.task(taskElement)
    // Add drag events to new task
    dragAndDrop.addDragEvents()
    // Update task count
    render.updateTaskCount()
    // Clear new task input
    render.clearInput()
})

tasksContainer.addEventListener("dragover", (e) => {
    // Get element that is directly after element being dragged
    const afterElement = dragAndDrop.getDragAfterElem(tasksContainer, e.clientY)
    // Get current element being dragged
    const draggable = document.querySelector(".dragging")
    if(afterElement == null) {
        // If element is being dragged bellow container append it to bottom of container
        tasksContainer.appendChild(draggable)
    }else {
        // If afterElement is not null insert dragging element before after element
        tasksContainer.insertBefore(draggable, afterElement)
    }
})



// ONCLICK FUNCTIONS -- 

function clearTask(btn) {
    todo.removeTask(btn)
    render.removeTask(btn)
    render.updateTaskCount()
    render.hideActions()
}

function completeTask(checkbox) {
    todo.completeTask(checkbox)
    render.completeTask(checkbox)
    render.updateTaskCount()
}