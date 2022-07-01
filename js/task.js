window.onload = loadTasks;

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addTask();
});

function loadTasks() {
    if (localStorage.getItem("tasks") == null) return;

    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        const newModalBody = document.querySelector("#new-modal-body");
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML =

            `<div class="accordion show ${task.filterOption}">
            <input type="checkbox" onclick="taskComplete(this)" ${task.completed ? 'checked' : ''}>
                <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)"
                    onblur="editTask(this)" onclick="viewTask()" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <button onclick="removeTask(this)">${"Delete"}</button>
                    <i class="bi bi-plus-lg" onclick="viewTask()" onclick="openTask()"></i>
                    </div>
                        <div class="panel">
                        <textarea name="" id="" readonly>${task.taskText}</textarea>
                        <input type="datetime-local" value="${task.taskDateandTime}" readonly>
                        <input type="text" id="newlocation" value="${task.taskLocation}" readonly>
                        </div>`;
        list.insertBefore(li, list.children[0]);
    });
}

function addTask() {
    const list = document.querySelector("ul");
    const input = document.querySelector('#title input');
    const dateTime = document.querySelector("#date-div input");
    const textArea = document.querySelector("#title textarea");
    const location = document.querySelector("#location input");
    const options = document.querySelector('input[name="flexRadioDefault"]:checked');
    const workOption = document.querySelector("#work-checkbox input");
    const personalOption = document.querySelector("#personal-checkbox input");
    const created = document.getElementById("created");
    const newModalBody = document.querySelector("#new-modal-body");


    if (input.value === "" || dateTime === "" || options == null) {

        document.getElementById("warning").style.display = "block";
        setTimeout(hideAlert, 3000)
        function hideAlert() {
            document.getElementById("warning").style.display = "none";
        }
    }

    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"),
    { task: input.value, completed: false, taskText: textArea.value, taskDateandTime: dateTime.value, taskLocation: location.value, filterOption: options.value }]));
    const li = document.createElement("li");
    li.innerHTML =

        `<div class="accordion show ${options.value}">
                                <input type="checkbox" onclick="taskComplete(this)">
                                <input type="text" class="task" value="${input.value}" onfocus="getCurrentTask(this)"
                                    onblur="editTask(this)" onclick="viewTask()" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <button onclick="removeTask(this)">${"Delete"}</button>
                                <i class="bi bi-plus-lg" onclick="viewTask()" onclick="openTask()"></i>
                            </div>
                            <div class="panel">
                            <textarea name="" id="" readonly>${textArea.value}</textarea>
                            <input type="datetime-local" value="${dateTime.value}" readonly>
                            <input type="text" id="newlocation" value="${location.value}" readonly>
                            </div>`;
    list.insertBefore(li, list.children[0]);

    input.value = "";
    dateTime.value = "";
    textArea.value = "";
    location.value = "";
    workOption.checked = false;
    personalOption.checked = false;

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
}

function viewTask() {

    var acc = document.getElementsByClassName("accordion");
    var accI = document.querySelectorAll(".accordion i");
    var i;

    for (i = 0; i < acc.length; i++) {
        function openTask() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
        acc[i].addEventListener("click", openTask);
    }
}

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("accordion");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
        if (task.task === event.nextElementSibling.value) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
        if (task.task === event.parentNode.children[1].value) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
}

var currentTask = null;

function getCurrentTask(event) {
    currentTask = event.value;
    task.taskText = panelTeaxtArea.value;
}

function editTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    if (event.value === "") {
        alert("Task is empty!");
        event.value = currentTask;
        return;
    }

    tasks.forEach(task => {
        if (task.task === currentTask) {
            task.task = event.value;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filter() {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    document.querySelector('input[name="rate"]:checked').value;
}