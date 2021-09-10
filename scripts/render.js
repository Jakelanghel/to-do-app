class Render {
    constructor() {
        this.taskCount = null
        this.checkbox = null
        this.taskId = null
        this.taskCountDisplay = document.querySelector("[data-task-count]")
        this.mobileActions = document.querySelector("[data-actions]")
        this.tasksContainer = document.querySelector("[data-task-container]")

    }
    

    task(newtTask) {
        // Append new task element to task container
        this.tasksContainer.appendChild(newtTask) 
        // Render taskContainer
        this.tasksContainer.style.display = "block"
        // Render Mobile actions 
        this.mobileActions.style.display= "block"; 
    }

    hideActions() {
        if(tasks.length === 0 ) {
            this.mobileActions.style.display = ""
            this.tasksContainer.style.display = ""
        }
    }

    completeTask(checkbox) {
        // Grab checkbox that has been clicked using e.target.id
        this.checkbox = document.getElementById(checkbox.id)
        // Check to see if checkbox is being checked or unchecked
        if(this.checkbox.checked) {
            // Look for task that has been checked by checking each task.id against e.target.id
            tasks.filter((task) => {
                if(task.id === this.checkbox.id) { 
                    // Add class .checked to task using the task name
                    document.getElementById(task.name).classList.add("checked")
                }
            })
        }else {
            tasks.filter((task) => {
                if(task.id === this.checkbox.id) {
                    document.getElementById(task.name).classList.remove("checked")
                }
            })
        } 
    }

    updateTaskCount() {
        tasks.filter((task) => {
            if(!task.complete) {
                this.taskCount ++
            }
        })

        if(this.taskCount === 1) {
            this.taskCountDisplay.textContent = `${this.taskCount} task left`
            this.taskCount = 0
        }else {
            this.taskCountDisplay.textContent = `${this.taskCount} tasks left`
            this.taskCount = 0
        }
    }

    removeTask(btn) {
        this.taskId = btn.id.substring(9, btn.id.length - 1) 
        document.getElementById(this.taskId).remove()
    }

    clearInput() {
        taskInput.value = null

    }

}