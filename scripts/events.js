const taskForm = document.querySelector("[data-new-task-form]")
const taskInput = document.querySelector("[data-new-task-input]")
const toDoBtns = document.querySelectorAll(".btn")
const btnChangeTheme = document.querySelector("[data-btn-change-theme]")


let tasks = []
let taskCounter = 0
let taskCount = 0


const render = new Render
const taskActions = new TaskActions
const toDoActions = new ToDoActions
const dragAndDrop = new DragAndDrop
const themes = new Themes

// Check for users prefered color scheme
themes.getPreferedTheme()

// Add event listener to btnChangeTheme
btnChangeTheme.addEventListener("click", () => {
    // Each time change theme btn is clicked run themes.changeTheme()
    themes.changeTheme()
})

// Add event listeners to each todo actions btn
toDoBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        toDoActions.showTasks(e)
    })
})


taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if(taskInput.value !== "" && taskInput.value !== null) {
        // Create new task OBJ
        const task = new Task(taskInput.value)
        // Push new task OBJ to tasks array
        tasks.push(task)
        // Create new instance of todo class
        const todo = new ToDo
        // Add event listeners to checkbox and clear task btn
        todo.addEvents()
        // Call set Ids method on new todo OBJ and store the returned value (new task element) in a variable
        newToDo = todo.setIds(task)
        // Render new todo element to page
        render.task(newToDo)
        // render taskCount
        render.taskCount()
        // Add drag events to new task
        dragAndDrop.addDragEvents()
        // clear task input
        taskInput.value = null
    }
    
    
})


// ============== //
// DRAG AND DROP //

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

// DRAG AND DROP FOR MOBILE
tasksContainer.addEventListener("touchmove", (e) => {
    // Capture touch array within event so we can access touch.pageY coordinates
    const touch = e.touches[0]
    // Get element that is directly after element being dragged
    const afterElement = dragAndDrop.getDragAfterElem(tasksContainer, touch.pageY)
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

function clearTask(e) {
    taskActions.removeTask(e)
    render.removeTask(e)
    render.taskCount()

}

function completeTask(e) {
    // Make this its own method
     const task = tasks.find(task => {
         if(task.id === e.target.id) {
            return task
         }
     })
     taskActions.completeTask(task)
     render.taskComplete()
     render.taskCount()
}