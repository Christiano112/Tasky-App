// let newTask = document.querySelector("#add-task");

// newTask.addEventListener("click", function() {

//     var raw = "{\r\n    \r\n   \"user_id\":\"184\",\r\n	\"todo\": \"hungry need to eat\"\r\n	\r\n    \r\n}";

//     var requestOptions = {
//         method: 'POST',
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("https://todo22a.herokuapp.com/api/v1/task", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// })




// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://todo22a.herokuapp.com/api/v1/task/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));