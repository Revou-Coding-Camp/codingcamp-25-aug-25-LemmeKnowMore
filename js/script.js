greet();

// Greet to user
function greet() {
    let username = prompt("Enter your name:");
    document.getElementById("username").innerText = username;
}

// Validate form input
function validateForm() {
    let name = document.getElementById("name-input").value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Thank you, " + name + ", for your message!");
        return true;
    }
}