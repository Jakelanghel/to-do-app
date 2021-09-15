//CREATE NEW TODO ELEMENT

class ToDo {

    constructor() {
        // Grab task template for adding a new task
        this.taskTemplate = document.getElementById("task-template")
        // Set taskElement to equal content of task template
        this.taskElement = document.importNode(this.taskTemplate.content, true) 
        // Grab each part of taskElement 
        this.toDoContainer = this.taskElement.querySelector(".todo-container") 
        this.checkbox = this.taskElement.querySelector("input")
        this.indicator = this.taskElement.querySelector(".indicator")
        this.label = this.taskElement.querySelector(".checkbox-label")
        this.taskContainer = this.taskElement.querySelector(".task-container")
        this.ClearTaskBtn = this.taskElement.querySelector(".clear-task")
        
    }
    // Method for setting IDs on each task element being created
    setIds(task) {
        // Set ID's so that checkbox is functional
        this.checkbox.id = task.id 
        // this.indicator.id = task.id
        this.label.htmlFor = task.id
        // Giv clearTaskBtn same Id as its task so we know wat task to clear when clicked
        this.ClearTaskBtn.id = task.id
        // Give toDoContainer a unique ID so it can be easily grabbed later on
        this.toDoContainer.id =  task.id.substring(9, task.id.length - 1) 
        // Give taskContainer a unique ID so it can be easliy grabbed later on
        this.taskContainer.id = task.name
        // Prepend task.name instead of append so flex space between will seperated checkbox and X button
        this.taskContainer.prepend(task.name) 
        return this.taskElement
    }

    // Method for adding event listeners to clear task btn and checkbox
    addEvents(e) {
        this.ClearTaskBtn.addEventListener("click", clearTask)
        this.checkbox.addEventListener("click", completeTask)
    }
}


