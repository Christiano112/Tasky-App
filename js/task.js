const addTaskButton = document.querySelectorAll('.add-task');
const editTaskButton = document.querySelector("#edit-task");

const workOption = document.querySelector("#work-checkbox input");
const personalOption = document.querySelector("#personal-checkbox input");


addTaskButton.forEach(button => {

    let addTaskButtonFunction = () => {
        const input = document.querySelector('#title input');
        const inputValue = input.value;
        const dateTime = document.querySelector("#date-div input");
        const textArea = document.querySelector("#title textarea");
        const options = document.querySelector('input[name="flexRadioDefault"]:checked')
        const taskList = document.getElementById('task-list');
        const created = document.getElementById("created");
        const newModalBody = document.getElementById("new-modal-body");
        newModalBody.innerHTML = "";


        if (inputValue === "" || dateTime === "" || options == null) {
            alert("Please Enter a Task")
        }
        else {
            taskList.innerHTML += `
            <div class="lists">
                <input id="radio" type="radio">
                <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="open-task">
                    ${inputValue}
                </p>
                <button class="delete">
                    <img src="./images/trash-solid.svg" alt="">
                </button>
            </div>
        `;

            newModalBody.innerHTML = `

        <div id="new-title">
            <input id="input-title" type="text" placeholder="Title" value="${inputValue}" disabled>
            <hr>
            <textarea name="" placeholder="Notes" id="new-text-area" cols="30" rows="9" value="" disabled>
            ${textArea.value}
            </textarea>
        </div>
        

                            <form id="new-info">
                                <div class="input-group mb-3" id="new-date-div">
                                    <input class="form-control" id="new-date" name="new-date" type="datetime-local" required disabled
                                        placeholder="Date and Time" value="${dateTime.value}">
                                </div>
                                <div id="new-location">
                                    <input class="mb-3" type="text" value="" placeholder="Add Location" disabled>
                                </div>
                                    <p id="priority"> Priority </p>
                                    <div id="priority-list">
                                        <div class="form-check" id="new-work-checkbox">
                                            <label for="newwork">Work</label>
                                            <input type="radio" name="newflexRadioDefault" id="newwork" value="work" disabled>
                                        </div>
                                        <div class="form-check" id="new-personal-checkbox">
                                            <label for="newpersonal">Personal</label>
                                            <input type="radio" name="newflexRadioDefault" id="newpersonal" value="personal" disabled>
                                        </div>
                                    </div>    
                                </div>
                            </form>
        `

            const newWorkOption = document.querySelector("#new-work-checkbox input");
            const newPersonalOption = document.querySelector("#new-personal-checkbox input");


            if (workOption.checked == true) {
                newWorkOption.checked = true;
            } else if (personalOption.checked == true) {
                newPersonalOption.checked = true;
            } else {
                return false;
            }

            created.style.display = "flex";
            setTimeout(hideCreated, 2000)
            function hideCreated() {
                created.style.display = "none";
            }

            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }


            input.value = "";
            dateTime.value = "";
            textArea.value = "";
            workOption.checked = false;
            personalOption.checked = false;
        }
    };

    button.addEventListener('click', addTaskButtonFunction);
});


let editTaskButtonFunction = () => {
    allInput = document.getElementsByTagName("input");
    allTextArea = document.getElementsByTagName("textarea");
    editTaskValue = document.querySelector("#edit-task h3");
    editTaskValueContent = document.querySelector("#edit-task h3").textContent;
    if (editTaskValueContent === "Edit") {
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].disabled = false;
        }
        for (let i = 0; i < allTextArea.length; i++) {
            allTextArea[i].disabled = false;
        }
        
        editTaskValue.textContent = "Save";
    } else {
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].disabled = true;
        }
        for (let i = 0; i < allTextArea.length; i++) {
            allTextArea[i].disabled = true;
        }
        editTaskValue.textContent = "Edit";
    }
};
editTaskButton.addEventListener("click", editTaskButtonFunction);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
});