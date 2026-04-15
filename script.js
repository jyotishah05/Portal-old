function showMessage() {
    alert("Welcome to ElderCare Portal!");
}

/* SERVICES */
function showService(type) {
    if(type === 'nurse') {
        alert("Nurse Care: Includes medical checkups, injections, and health monitoring.");
    }
    else if(type === 'caretaker') {
        alert("24/7 Caretaker: Full-time support for daily activities and safety.");
    }
    else if(type === 'medicine') {
        alert("Medication Support: Timely medicine reminders and proper dosage help.");
    }
    else if(type === 'companion') {
        alert("Companionship: Friendly support to reduce loneliness.");
    }
    else if(type === 'meal') {
        alert("Meal Preparation: Healthy food as per diet requirements.");
    }
    else if(type === 'mobility') {
        alert("Mobility Assistance: Help in walking, sitting, and fall prevention.");
    }
}

/* GET STARTED BUTTON */
function goToRegister() {
    window.location.href = "register.html";
}

/* REGISTER VALIDATION */
function showRegisterSuccess() {

    let form = document.querySelector(".register-right form");
    let inputs = form.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type !== "radio" && inputs[i].value === "") {
            document.getElementById("registerMsg").innerText = "❌ Please fill all fields!";
            return;
        }
    }

    document.getElementById("registerMsg").innerText = "✅ Registration Successful!";

    form.reset();
}

/* CONTACT VALIDATION */
function showContactSuccess() {

    let form = document.querySelector(".contact-form");
    let inputs = form.querySelectorAll("input, textarea");

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "") {
            document.getElementById("contactMsg").innerText = "❌ Please fill all fields!";
            return;
        }
    }

    document.getElementById("contactMsg").innerText = "✅ Message Sent Successfully!";

    form.reset();
}

/* LOGIN VALIDATION */
function loginUser() {

    let email = document.querySelector(".login-left input[type='email']").value;
    let password = document.querySelector(".login-left input[type='password']").value;

    if(email === "" || password === "") {
        document.getElementById("loginMsg").innerText = "❌ Please enter email and password!";
        return;
    }

    document.getElementById("loginMsg").innerText = "✅ Login Successful!";

    document.querySelector(".login-left input[type='email']").value = "";
    document.querySelector(".login-left input[type='password']").value = "";
}