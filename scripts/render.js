const taskCountDisplay = document.querySelector("[data-task-count]")
const mobileActions = document.querySelector("[data-actions]")
const tasksContainer = document.querySelector("[data-task-container]")



class Render {

    constructor() {
        this.taskId = null
    }


    task(newToDo) {
        // Append new task element to task container
        tasksContainer.appendChild(newToDo) 
        // Render taskContainer
        tasksContainer.style.display = "block"
        // Render Mobile actions 
        mobileActions.style.display= "block"; 
    }

    taskCount() {
        tasks.forEach(task => {
            if(!task.complete) {
                taskCount ++
            }
        })

        if(taskCount === 1) {
            taskCountDisplay.textContent = `${taskCount} task left`
            taskCount = 0
        }else {
            taskCountDisplay.textContent = `${taskCount} tasks left`
            taskCount = 0
        }
    }

    taskComplete() {
        tasks.forEach(task => {
            if(task.complete) {
                document.getElementById(task.name).classList.add("checked")
            }else {
                document.getElementById(task.name).classList.remove("checked")
            }
        })
    }

    removeTask(e) {
        this.taskId = e.target.id.substring(9, e.target.id.length - 1)
        document.getElementById(this.taskId).remove()
    }

    hideActions() {
        if(tasks.length === 0) {
            mobileActions.style.display = "none"
            tasksContainer.style.display = "none"
        }
    }
}