document.getElementById("forma").addEventListener("submit", function(event) {
    event.preventDefault();

 let valid = true;

 const namePattern = /^[a-zA-Z0-9][a-zA-Z0-9_-]{1,18}[a-zA-Z0-9]$/;
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

 const firstName = document.getElementById("name");
 const lastName = document.getElementById("surname");
 const email = document.getElementById("email");
 const password = document.getElementById("password");

 const nameError = document.getElementById("nameError");
 const surnameError = document.getElementById("surnameError");
 const emailError = document.getElementById("emailError");
 const pasError = document.getElementById("pasError");

 if (!namePattern.test(firstName.value)) {
    nameError.textContent = "First Name cannot be empty";
    firstName.style.borderColor = "#FF7979";
    firstName.placeholder = "";
    firstName.classList.add("error");
    valid = false;
 }else{
    nameError.textContent = "";
 }

 if (!namePattern.test(lastName.value)) {
    surnameError.textContent = "Last Name cannot be empty";
    lastName.style.borderColor = "#FF7979";
    lastName.placeholder = "";
    lastName.classList.add("error");
    valid = false;
 }else{
    surnameError.textContent = "";
 }

 if (!emailPattern.test(email.value)) {
    emailError.textContent = "Looks like this is not an email";
    email.style.borderColor = "#FF7979";
    email.placeholder = "";
    email.classList.add("error");
    valid = false;
 } else {
    emailError.textContent = "";
 }

 if (!namePattern.test(password.value)) {
    pasError.textContent = "Password cannot be empty";
    password.style.borderColor = "#FF7979";
    password.placeholder = "";
    password.classList.add("error");
    valid = false;
 }else{
    pasError.textContent = "";
 }

})