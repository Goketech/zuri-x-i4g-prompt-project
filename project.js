let userDataBase = {};

function getUserDetails() {
    let username = prompt("Enter Your Username");

    if (username == null) {
        return;
    }
    function validateUserName(username) {
        if (username.length < 10 && username.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    while (validateUserName(username) == false) {
        username = prompt("Username must be less than 10 and greater than 0");
    }
    userDataBase["username"] = username;

    let email = prompt("Enter Your Email Address");
    if (email == null) {
        return;
    }
    function validateEmail(email) {
        const emailCheck =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailCheck.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    while (validateEmail(email) == false) {
        email = prompt("Enter a valid email");
    }
    userDataBase["email"] = email;
    let phone = prompt("Enter Your Phone Number");

    if (phone == null) {
        return;
    }
    function validatePhone(phone) {
        if (phone.length == 11) {
            return true;
        } else {
            return false;
        }
    }
    while (validatePhone(phone) == false) {
        phone = prompt("Enter a valid Phone Number");
    }
    userDataBase["phone"] = phone;

    let password = prompt("Enter Your Password");

    if (password == null) {
        return;
    }
    function validatePassword(password) {
        if (password.length < 6) {
            return false;
        } else {
            return true;
        }
    }

    while (validatePassword(password) == false) {
        password = prompt("Password must be greater than 6 digits");
    }
    userDataBase["password"] = password;

    let confirm = prompt("Confirm Password");
    if (confirm == null) {
        return;
    }
    function validateConfirm(confirm) {
        if (confirm != password) {
            return false;
        } else {
            return true;
        }
    }
    while (validateConfirm(confirm) == false) {
        confirm("Password don't match");
    }
    userDataBase["confirm"] = confirm;
    console.log(userDataBase);
}
function displayUserDetails() {
    alert(`Your Details\n\nUsername: ${userDataBase.username}\nPhone Number: ${userDataBase.phone}\nEmail: ${userDataBase.email}`)
}
