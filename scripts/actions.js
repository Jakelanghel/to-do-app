class Actions {
    constructor() {
        this.taskId = null
    }

    showAll() {
        // Loop through all tasks
        tasks.forEach(task => {
            // Get taskContainer ID  of current task ---previously set as unique ID in todo.setIds()
            this.taskId = task.id.substring(9, task.id.length - 1)
            // Set each taskContainer to original display state
            document.getElementById(this.taskId).style.display = ""
        })
    }

    showActive() {
        tasks.filter((task) => {
            // Get taskContainer ID  of current task ---previously set as unique ID in todo.setIds()
            this.taskId = task.id.substring(9, task.id.length -1)
            if(task.complete) {
                // Set taskContainer display to none
                document.getElementById(this.taskId).style.display = "none"
            }else {
                // Set taskContainer display to original state
                document.getElementById(this.taskId).style.display = ""
            }
        })
    }

    showComplete() {
        tasks.filter((task) => {
            this.taskId = task.id.substring(9, task.id.length -1)
            if(task.complete) {
                document.getElementById(this.taskId).style.display = ""
            }else {
                document.getElementById(this.taskId).style.display = "none"
            }
        })
    }

    clearComplete() {
        tasks.filter((task) => {
            if(task.complete) {
                // Get taskContainer ID  ---previously set as unique ID in todo.setIds()
                this.taskId = task.id.substring(9, task.id.length -1)
                // Remove completed task from HTML DOC
                document.getElementById(this.taskId).remove()
            }
        })
    }

    showTasks(e) {
        const buttonClicked = e.target.innerText
        
        switch(e.target.innerText) {
            // check e.target.innertext to see what actions btn was pressed
            case "All":
                this.showAll()
            break
            
            case "Active": 
                this.showActive()
            break

            case "Completed":
                this.showComplete()
            break

            case "Clear Completed":
                this.clearComplete()
            break
        }
    }

   
}