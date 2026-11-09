const USERNAME = "admin";
const PASSWORD = "admin123";
loginBtn = document.getElementById('login');

loginBtn.addEventListener("click", function(event) {
    event.preventDefault();

    user_input = document.getElementById('user_input').value;
    pass_input = document.getElementById('user_pass').value;

    if (user_input === USERNAME && pass_input === PASSWORD) {
        alert("Login Successfull, we will be redirecting you...")
        window.location.href = "profile.html";
        console.log(user_input);
        console.log(pass_input);
    } else {
        console.log(user_input);
        console.log(pass_input);
        alert("Incorrect Login Credentials.");
    }
});