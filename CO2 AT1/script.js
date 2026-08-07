const email = document.getElementById("email");
const phone = document.getElementById("phone");

email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

function validateEmail() {

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email.value)){
        document.getElementById("emailError").innerHTML = "";
    }
    else{
        document.getElementById("emailError").innerHTML = "Invalid Email";
    }
}

function validatePhone() {

    let phonePattern = /^[0-9]{10}$/;

    if(phonePattern.test(phone.value)){
        document.getElementById("phoneError").innerHTML = "";
    }
    else{
        document.getElementById("phoneError").innerHTML = "Enter 10-digit Phone Number";
    }
}