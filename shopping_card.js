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
    slidesPerView: 1,
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