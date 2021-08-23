const newToDo = document.getElementById("new-to-do-input")
const column2 = document.getElementById("col-2")
let element = 0 //Set element counter to add to label for and to new checkbox element to toggle correct checkbox

newToDo.addEventListener("keyup", getInput)

function getInput(e) {
    if(e.key === "Enter") {
        if(newToDo.value !== "") {
            element ++
            const toDoStr = e.target.value
            newToDo.value = ""
            column2.innerHTML += `
            <div class="to-do-list-item container-flex">
                    <input type="checkbox" class="checkbox" id="checkbox-element-${element}" />
                    <label for="checkbox-element-${element}" class="checkbox-label">
                        <span class="indicator"></span>
                    </label>
                    <label class="to-do-list">${toDoStr}</label>
                </div>`
        }
    }
}