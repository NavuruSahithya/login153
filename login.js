function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Both fields are required.";
        return false;
    }

    errorMessage.style.display = "none";
    alert("Login successful!");
    return true;
}