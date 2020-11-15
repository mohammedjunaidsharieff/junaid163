let data = [];

function signup() {
    var username = getid("name").value;
    var password = getid("password").value;
    var email = getid("email").value;
    if (username && password && email) {
        var details = {
            id: Math.floor(Math.random() * 1000 + 1),
            name: username,
            password: password,
            email: email
        }
        data.push(details);
        localStorage.setItem("data", localStorage.getItem("data") === null ? "[" + JSON.stringify(details) + "]" : localStorage.getItem("data").slice(0, localStorage.getItem("data").length - 1) + "," + JSON.stringify(details) + "]");
        console.log(JSON.parse(localStorage.getItem("data")));
    } else {
        console.log("enter details");
    }
}

function admin() {
    console.log(JSON.parse(localStorage.getItem("data")));
    let list = JSON.parse(localStorage.getItem("data"));
    list.forEach(user => {
        var tr = document.createElement("tr");
        var name = document.createElement("td");
        var email = document.createElement("td");
        name.innerHTML = user.name;
        email.innerHTML = user.email;
        tr.appendChild(name);
        tr.appendChild(email);
        getid("table").appendChild(tr);
    });
}

function loadHome() {
    getid("clinic_1").innerHTML = clinic1_Data.name
    getid("clinic_2").innerHTML = clinic2_Data.name
    getid("clinic_3").innerHTML = clinic3_Data.name
}

function getid(id) {
    return document.getElementById(id);
}