class Todo {

    constructor() {
        this.task = null
        this.taskTemplate = null
        this.taskElement = null
        this.taskContainer = null
        this.checkbox = null
        this.indicator = null
        this.label = null
        this.taskContainer = null
        this.tasks = null
        this.ClearTaskBtn = null
    }

    setIds(task) {
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
        // Set ID's so that checkbox is functional
        this.checkbox.id = task.id 
        this.indicator.id = task.id
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

    createTask(userInput) {
        // Create new task OBJ with unique ID, task name and completed state
        this.task = {id: Date.now().toString(), name: userInput, complete: false} 
        //push new task to tasks array
        tasks.push(this.task) 
        return this.task
    }
    
    completeTask(checkbox) {
        // Update tasks.complete value when checkBox is clicked
        // Grab checkbox element using Id of checkbox that has been clicked
        this.checkbox = document.getElementById(checkbox.id)
        // Check to see if checkBox is being checked or unchecked
        if(this.checkbox.checked) {
            //If checkbox has been checked update task.checked to true
            tasks.filter((task) => {
                if(task.id === this.checkbox.id) {
                    task.complete = true
                }
            })
        }else {
            tasks.filter((task) => {
                if(task.id === this.checkbox.id) {
                    task.complete = false
                }
            })
        }
    }

    clearCompleted() {
        // Use filter() method to return new list only containg tasks that are not complete
        this.tasks = tasks.filter((task) => {
            return !task.complete
        })
        // Update tasks list
        tasks = this.tasks
    }

    removeTask(btn) {
        this.tasks = tasks.filter((task) => {
            // Return all tasks that do not have the same ID as the task being cleared
            if(task.id !== btn.id) {
                return task
            }
        })
        // update Tasks list 
        tasks = this.tasks
    }
}

