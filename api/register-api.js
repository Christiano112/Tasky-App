// Form Validation
document.getElementById("formr").addEventListener("submit", function(a) {
    a.preventDefault();

    // var name = document.forms.form.name.value;
    // var username = document.forms.form.username.value;
    // var email = document.forms.form.email.value;
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
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
        // document.getElementById("formr").action = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdN9jq9r_t_xHUeB3EO77JcUO495CLMP2sugX46WXnpxQFSJg/formResponse";
        // document.getElementById("formr").method = "POST";
        // document.location.href = "login.html";

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


        setTimeout(openNew, 1000)
        function openNew() {
            alert("SUCCESSFUL, Kindly Go Back to Login Page And Login!");
            window.open("login.html", target = "_self");
        }

        setTimeout(formAction, 3000)
        function formAction() {
            $("#formr").unbind('submit').submit()
            document.getElementById("formr").method = "POST";
            document.getElementById("formr").setAttribute("data-netlify", "true")
        }
    }
})

const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("formr");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
};

document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);