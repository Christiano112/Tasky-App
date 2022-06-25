
// Quotations API

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        setInterval(myChange, 10000) 

        function myChange() {
            document.getElementById("motivation").innerHTML = "\"" + data[Math.floor(Math.random() * 1600) + 1]["text"] + "\"";
        }
    });