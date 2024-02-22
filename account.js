const form = document.querySelector(".account__personal_form"),
      fName = document.querySelector(".fName"),
      fInput = fName.querySelector(".account__name"),
      lName = document.querySelector(".lName"),
      lInput = lName.querySelector(".account__Lname"),
      button = document.querySelector(".account__save_change"),
      emailField = document.querySelector(".acEmail"),
      emailInput = emailField.querySelector(".account__email"),
      Num = document.querySelector(".accNum"),
      NumInput = Num.querySelector(".account__number"),
      uName = document.querySelector(".accUser"),
      uInput = uName.querySelector(".account__username"),
      current = document.querySelector(".current"),
      currentInput = current.querySelector(".account__password"),
      newPass = document.querySelector(".NewPass"),
      newInput = newPass.querySelector(".account__new"),
      confirmField = document.querySelector(".confirm"),
      confirmInput = confirmField.querySelector(".account__confirm");
      
    function checkName() {
        const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
        if(!fInput.value.match(userPattern) && fInput.value == '') {
            return fName.classList.add("invalid")
        }
        fName.classList.remove("invalid")
    }

    function checkUser() {
        const userPattern = "^[A-Za-z]{3,}$";
        if(!uInput.value.match(userPattern)) {
            return uName.classList.add("invalid")
        }
        return uName.classList.remove("invalid")

    }

    function checkLName() {
        const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
        if(!lInput.value.match(userPattern) && lInput.value == '') {
            return lName.classList.add("invalid")
        }
        lName.classList.remove("invalid")
    }

    function checkNumber() {
        const phonePattern = "^[0-9]{9}$"
        if(!NumInput.value.match(phonePattern)) {
            return Num.classList.add("invalid")
        }
        Num.classList.remove("invalid")
    }

    // email validation

function checkEamil() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid")
    }
    emailField.classList.remove("invalid")
    console.log('hi');
}

function checkPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(!currentInput.value.match(passPattern)) {
        return current.classList.add("invalid");
    }

    current.classList.remove("invalid");

}

function checkNew() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(!newInput.value.match(passPattern)) {
        return newPass.classList.add("invalid");
    }

    newPass.classList.remove("invalid");

}


// confirm password validation

function confirmPass() {
     if(confirmInput.value !== newInput.value || confirmInput.value ==''){
        confirmField.classList.add("invalid");  
     }
     else{
        confirmField.classList.remove("invalid");  
     }

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName();
    checkLName();
    checkEamil();
    checkNumber();
    checkUser();
    checkPass();
    checkNew();
    confirmPass();

    fInput.addEventListener("keyup", checkName);
    lInput.addEventListener("keyup", checkLName);
    emailInput.addEventListener("keyup", checkEamil);
    NumInput.addEventListener("keyup", checkNumber);
    uInput.addEventListener("keyup", checkUser);
    currentInput.addEventListener("keyup", checkPass);
    newInput.addEventListener("keyup", checkNew);
    confirmInput.addEventListener("keyup", confirmPass);
 

    if(!fName.classList.contains("invalid") &&
       !lName.classList.contains("invalid") &&
       !emailField.classList.contains("invalid") &&
       !uName.classList.contains("invalid") &&
       !current.classList.contains("invalid") &&
       !newPass.classList.contains("invalid") &&
       !confirmField.classList.contains("invalid") &&
       !Num.classList.contains("invalid")
    ){


       location.href = form.getAttribute("action")
    }
})

console.log(form);

console.log(NumInput);

const hide = document.querySelector(".Eye_hide");
const show = document.querySelector(".Eye_show");

hide.addEventListener("click", function(){
    currentInput.type = 'text';
    hide.classList.add("closedEye");
    show.classList.add("openEye");
})

show.addEventListener("click", function(){
    current.type = 'password';
    hide.classList.remove("closedEye");
    show.classList.remove("openEye");
})

const hide1 = document.querySelector(".Eye_hide1");
const show1 = document.querySelector(".Eye_show1");

hide1.addEventListener("click", function(){
    newInput.type = 'text';
    hide1.classList.add("closedEye");
    show1.classList.add("openEye");
})

show1.addEventListener("click", function(){
    newInput.type = 'password';
    hide1.classList.remove("closedEye");
    show1.classList.remove("openEye");
})

const hide2 = document.querySelector(".Eye_hide2");
const show2 = document.querySelector(".Eye_show2");

hide2.addEventListener("click", function(){
    confirmInput.type = 'text';
    hide2.classList.add("closedEye");
    show2.classList.add("openEye");
})

show2.addEventListener("click", function(){
    confirmInput.type = 'password';
    hide2.classList.remove("closedEye");
    show2.classList.remove("openEye");
})

