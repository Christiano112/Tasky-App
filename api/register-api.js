// Form Validation
document.getElementById("form").addEventListener("submit", function(a) {
    a.preventDefault();

    var name = document.forms.form.name.value;
    var username = document.forms.form.username.value;
    var email = document.forms.form.email.value;
    var password = document.forms.form.password.value;
    var confirmPassword = document.forms.form.confirm_password.value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/g;
    var regUser = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    var regName = /\d+$/g;

    if (name == "" || regName.test(name)) {
        document.getElementById("check_name").innerHTML = "Name cannot contain any number!";
        // name.focus();
        return false;
    }

    if (username == "" || !regUser.test(username)) {
        document.getElementById("check_username").innerHTML = "Invalid username, Try another!";
        // username.focus();
        return false;
    }

    if (email == "" || !regEmail.test(email)) {
        document.getElementById("check_email").innerHTML = "Enter a valid email";
        // email.focus();
        return false;
    }

    if (password == "" || password.length < 6) {
        document.getElementById("check_password1").innerHTML = "Password must be at least 6 characters"
        // password.focus();
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("check_password").innerHTML = "Password doesn't match, Try again!";
        // confirmPassword.focus();
        return false;
    }
    
    // API CALL
    else {
        const form = document.getElementById("formr")

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
    }
})