const form = document.querySelector(".address__personal_form"),
      fName = document.querySelector(".add__name"),
      fInput = fName.querySelector(".address__name"),
      lName = document.querySelector(".add_lName"),
      lInput = lName.querySelector(".address__Lname"),
      button = document.querySelector(".address__save"),
      emailField = document.querySelector(".email"),
      emailInput = emailField.querySelector(".address__email"),
      country= document.querySelector(".country"),
      countryInput = country.querySelector(".address__country"),
      town = document.querySelector(".town"),
      townInput = town.querySelector(".address__town"),
      street = document.querySelector(".street"),
      streetInput = street.querySelector(".address__street"),
      state = document.querySelector(".state"),
      stateInput = state.querySelector(".address__state"),
      zip = document.querySelector(".zip"),
      zipInput = zip.querySelector(".address__zip"),
      Num = document.querySelector(".phone"),
      NumInput = Num.querySelector(".address__number")
      
    function checkName() {
        const userPattern = "^[A-Za_z]{3,}$";
        if(!fInput.value.match(userPattern)) {
            return fName.classList.add("invalid")
        }
        fName.classList.remove("invalid")
    }

    function checkLName() {
        const userPattern = "^[A-Za_z]{3,}$";
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

    function checkZip() {
        const phonePattern = "^[0-9]{2,}$"
        if(!zipInput.value.match(phonePattern)) {
            return zip.classList.add("invalid")
        }
        zip.classList.remove("invalid")
    }

 function checkCountry() {
        if(countryInput.value == '') {
            return country.classList.add("invalid")
        }
        country.classList.remove("invalid")
}

function checkState() {
    if(stateInput.value == '') {
        return state.classList.add("invalid")
    }
    state.classList.remove("invalid")
}

function checkTown() {
    const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
    if(!townInput.value.match(userPattern) && townInput.value ==="") {
        return town.classList.add("invalid")
    }
    town.classList.remove("invalid")
}

function checkStreet() {
    const userPattern = "^[A-Za_z][A-Za_z0-9_]{7,29}$";
    if(!streetInput.value.match(userPattern) && streetInput.value ==="") {
        return street.classList.add("invalid")
    }
    street.classList.remove("invalid")
}



function checkEamil() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid")
    }
    emailField.classList.remove("invalid")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkName();
    checkLName();
    checkEamil();
    checkNumber();
    checkCountry();
    checkTown();
    checkStreet();
    checkState();
    checkZip();

    fInput.addEventListener("keyup", checkName);
    lInput.addEventListener("keyup", checkLName);
    emailInput.addEventListener("keyup", checkEamil);
    NumInput.addEventListener("keyup", checkNumber);
    countryInput.addEventListener("keyup", checkCountry);
    townInput.addEventListener("keyup", checkTown);
    streetInput.addEventListener("keyup", checkStreet);
    stateInput.addEventListener("keyup", checkState);
    zipInput.addEventListener("keyup", checkZip);
 

    if(!fName.classList.contains("invalid") &&
       !lName.classList.contains("invalid") &&
       !emailField.classList.contains("invalid") &&
       !country.classList.contains("invalid") &&
       !town.classList.contains("invalid") &&
       !street.classList.contains("invalid") &&
       !state.classList.contains("invalid") &&
       !zip.classList.contains("invalid") &&
       !Num.classList.contains("invalid")
    ){


       location.href = form.getAttribute("action")
    }
})