class DragAndDrop {
    constructor() {

    }

    addDragEvents() {
        // Add drag start event listner to each task
        const draggables = document.querySelectorAll(".draggable")
        draggables.forEach(draggable => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging")
            })
        })
        // Add drag end event listner to each task
        draggables.forEach(draggable => {
            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging")
            })
        })
    }

    getDragAfterElem(tasksContainer, y) {
        const draggableElements = [...tasksContainer.querySelectorAll(".draggable:not(.dragging)")]
    
        return draggableElements.reduce((closest, child) => {
            // Determin elements position on screen in realtion to mouse
            const box = child.getBoundingClientRect()
            // get offset or distance from center of box being dragged over to our mouse
            const offset = y - box.top - box.height / 2
            // When above a box the offset will be a negative number
            // When directly over a element the offset will be 0
            // Check for element with an offset that is less than 0 but as close to zero as possible
            if (offset < 0 && offset > closest.offset) {
                return{ offset: offset, element: child }
            }else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }
}