let newTask = document.querySelector("#add-task");

newTask.addEventListener("click", function() {

    // var raw = "{\r\n    \r\n   \"user_id\":\"184\",\r\n	\"todo\": \"hungry need to eat\"\r\n	\r\n    \r\n}";

    const form = document.getElementById("info")

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    console.log([...payload]);

    var requestOptions = {
        method: 'POST',
        body: payload,
        redirect: 'follow'
    };

    fetch("https://todo22a.herokuapp.com/api/v1/task", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})




// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://todo22a.herokuapp.com/api/v1/task/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


// ALERT TO NOTIFY YOU OF YOUR TASKS
let myDate = document.getElementById("date").value;

let d = new Date();
let secondDate = d.toISOString();

console.log(secondDate);

if (secondDate == myDate) {
    alert("You have a Task to Complete");
}

// ['date', '2022-07-03T22:37']