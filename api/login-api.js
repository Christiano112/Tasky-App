const form = document.getElementById("forml")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);
    
    console.log([...payload]);

    fetch('https://todo22a.herokuapp.com/api/v1/user/login', {
        method: 'POST',
        body: payload,
        redirect: 'follow'
    })
        .then(function (res) {
            console.log(res.status);
            if (res.status === 404) {
                alert(`User with email does not exist.`)
            } else if (res.status === 401) {
                alert(`Incorrect password, try again!`)
            } else {
                setTimeout(openNew, 3000)
                function openNew() {
                    alert("Login is Successful");
                    window.open("home.html", target = "_self")
                }
            }
            // if(!res.ok) {
            //     throw new Error("HTTP status " + res.status);
            // }
            return res.json();
        })

        .then(data => console.log(data))
        .catch(err => console.log('err', err))
        
})





    // Javascript for REMEMBER ME
    // Call the function onsubmit

// const rmCheck = document.getElementById("rememberMe"),
//     emailInput = document.getElementById("email");

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//     rmCheck.setAttribute("checked", "checked");
//     emailInput.value = localStorage.username;
// } else {
//     rmCheck.removeAttribute("checked");
//     emailInput.value = "";
// }

// function lsRememberMe() {
//     if (rmCheck.checked && emailInput.value !== "") {
//         localStorage.username = emailInput.value;
//         localStorage.checkbox = rmCheck.value;
//     } else {
//         localStorage.username = "";
//         localStorage.checkbox = "";
//     }
// }