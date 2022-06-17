
const addTaskButton = document.querySelector('#add-task');


let addTaskButtonFunction = () => {
    const input = document.querySelector('#title input');
    const inputValue = input.value;
    const dateTime = document.querySelector("#date").value;
    const taskList = document.getElementById('task-list');
    const modalDialog = document.querySelector("#exampleModal");
    const created = document.getElementById("created");

    if (inputValue === "" || dateTime === "") {
        alert("Please Enter a Task")
    }
    else {
        taskList.innerHTML += `
            <div class="lists">
                <input id="radio" type="radio">
                <p>
                    ${inputValue}
                </p>
                <button class="delete">
                    <img src="./images/trash-solid.svg" alt="">
                </button>
            </div>
        `;
        inputValue === '';
        dateTime === "";

        created.style.display = "flex";
        setTimeout(hideCreated, 2000)
        function hideCreated () {
            created.style.display = "none";
        }

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }


};
addTaskButton.addEventListener('click', addTaskButtonFunction);


/*document.querySelector('.modal-header #add-task').onclick = function () {
    if (document.querySelector('#title input').value.length == 0) {
        alert("Please Enter a Task")
    }

    else {
        alert(document.getElementById('add-task').value)
        taskList.innerHTML += `
            <div class="lists">
                <input id="radio" type="radio">
                <p>
                    ${sample}
                </p>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}*/


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
});