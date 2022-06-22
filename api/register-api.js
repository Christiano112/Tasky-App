// Form Validation
document.getElementById("form").addEventListener("submit", function(a) {
    a.preventDefault();
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirm_password").value
    if (pass1 !== pass2) {
        document.getElementById("check_password").innerHTML = "Password doesn't match, Try again!"
    } else {
        // API CALL
        const form = document.getElementById("formr")

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const prePayload = new FormData(form);
            const payload = new URLSearchParams(prePayload);

            console.log([...payload]);


            fetch('https://todo22a.herokuapp.com/api/v1/user/register', {
                method: 'POST',
                body: payload,
                redirect: 'follow'
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log('err', err));


            setTimeout(openNew, 3000)
            function openNew() {
                alert("Registration is Successful");
                window.open("home.html", target = "_self")
            }
        })
    }
})
