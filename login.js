
const form = document.querySelector(".register__form"),
      emailField = form.querySelector(".email-field"),
      emailInput = emailField.querySelector(".email"),
      userField = form.querySelector(".user-field"),
      userInput = userField.querySelector(".userName"),
      passField = form.querySelector(".create-password"),
      passInput = passField.querySelector(".password"),
      cPassField = form.querySelector(".confirm-password"),
      cPassInput = cPassField.querySelector(".cPassword");



// email validation

function checkEamil() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid")
    }
    emailField.classList.remove("invalid")
}

// user validation

function checkUser() {
    const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
    if(!userInput.value.match(userPattern) && userInput.value ==="") {
        return userField.classList.add("invalid")
    }
    userField.classList.remove("invalid")
}

//password validation

function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }

        passField.classList.remove("invalid");

}


// confirm password validation

function confirmPass() {
     if(cPassInput.value !== passInput.value || cPassInput.value ==''){
         cPassField.classList.add("invalid")  ;  
     }
     else{
        cPassField.classList.remove("invalid");  
     }

}
//sdfghjkl;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEamil();
    createPass();
    confirmPass();
    checkUser();

    emailInput.addEventListener("keyup", checkEamil);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);
    userInput.addEventListener("keyup", checkUser);

    if(!userField.classList.contains("invalid") &&
       !emailField.classList.contains("invalid") &&
       !passField.classList.contains("invalid") &&
       !cPassField.classList.contains("invalid"))


       location.href = form.getAttribute("action")
})


const loginForm = document.querySelector(".login__form"),
      loginUser = loginForm.querySelector(".user-field"),
      loginUserIn = loginUser.querySelector(".userName"),
      loginPass = loginForm.querySelector(".create-password"),
      loginPassIn = loginPass.querySelector(".password");


// user validation

function logUser() {
    const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
    if(!loginUserIn.value.match(userPattern) && loginUserIn.value ==="") {
        return loginUser.classList.add("invalid")
    }
    loginUser.classList.remove("invalid")
}

//password validation

function yourPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(!loginPassIn.value.match(passPattern)) {
        return loginPass.classList.add("invalid");
    }

        loginPass.classList.remove("invalid");

}


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    logUser();
    yourPass();


    loginUserIn.addEventListener("keyup", logUser);
    loginPassIn.addEventListener("keyup", yourPass);

    if(!loginUser.classList.contains("invalid") &&
       !loginPass.classList.contains("invalid"))


       location.href = loginForm.getAttribute("action")
})

  
const hide = document.querySelector(".hide");
const show = document.querySelector(".show");

hide.addEventListener("click", function(){
    loginPassIn.type = 'text';
    hide.classList.add("closedEye");
    show.classList.add("openEye");
})

show.addEventListener("click", function(){
    loginPassIn.type = 'password';
    hide.classList.remove("closedEye");
    show.classList.remove("openEye");
})

const hide1 = document.querySelector(".hide1");
const show1 = document.querySelector(".show1");

hide1.addEventListener("click", function(){
    passInput.type = 'text';
    hide1.classList.add("closedEye");
    show1.classList.add("openEye");
})

show1.addEventListener("click", function(){
    passInput.type = 'password';
    hide1.classList.remove("closedEye");
    show1.classList.remove("openEye");
})

const hide2 = document.querySelector(".hide2");
const show2 = document.querySelector(".show2");

hide2.addEventListener("click", function(){
    cPassInput.type = 'text';
    hide2.classList.add("closedEye");
    show2.classList.add("openEye");
})

show2.addEventListener("click", function(){
    cPassInput.type = 'password';
    hide2.classList.remove("closedEye");
    show2.classList.remove("openEye");
})