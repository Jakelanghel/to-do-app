class Task {
    constructor(userInput) {
        this.id = Date.now().toString()
        this.name = userInput
        this.complete = false
    }
}

