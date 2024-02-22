let burger =  document.querySelector(".header__mobile_burger");
let menu = document.querySelector(".header__mobile_menu");
const body = document.querySelector("body");
let cross = document.querySelector(".header__mobile_button")

burger.addEventListener("click", function(){
    menu.classList.add("displayMenu")
    body.classList.add("active")
})

cross.addEventListener("click", function(){
    menu.classList.remove("displayMenu")
    body.classList.remove("active")
})

const swiper = new Swiper(document.querySelector(".swiper"), {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false},
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

  });


  const email = document.querySelector(".join__email_block"),
      emailInp = email.querySelector(".join__email_input"),
      emailButton = email.querySelector(".join__email_button");


emailButton.addEventListener("click", function (){
        let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInp.value.match(regex)){
            return email.classList.add("invalid");
        }

        email.classList.remove("invalid");
        email.classList.add("green");

})


// numbers

const quantity = document.querySelector(".selected__quantity");
const minus = document.querySelector(".selected__minus");
const plus = document.querySelector(".selected__plus");

plus.addEventListener("click", function(){
  let a = quantity.textContent;
  quantity.textContent = Number(a)+1;
})

minus.addEventListener("click", function(){
  let a = quantity.textContent;
  if(a > 0){
  quantity.textContent = Number(a)-1;
  }
})