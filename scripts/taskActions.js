class TaskActions {
    constructor() {
        this.tasksArr = []
    }

    completeTask(task) {
        if(!task.complete) {
            task.complete = true
        }else {
            task.complete = false
        }
    }

    removeTask(e) {
        this.tasksArr = tasks.filter(task => {
            if(task.id !== e.target.id) {
                return task
            }
        })
        tasks = this.tasksArr
        render.hideActions()
    }
}