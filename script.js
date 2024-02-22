let burger =  document.querySelector(".header__mobile_burger");
let menu = document.querySelector(".header__mobile_menu");
const body = document.querySelector("body");
let cross = document.querySelector(".header__mobile_button")

burger.addEventListener("click", function(){
    menu.classList.add("displayMenu")
    body.classList.add("active");
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
      delay: 3500,
      disableOnInteraction: false},
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

  });


  const login = document.querySelectorAll(".header__login");
  const loginBody = document.querySelector(".login__body");
  const loginCross = document.querySelector(".login__cross");
  const loginBlock = document.querySelector(".login_login_block");
  const registerBlock = document.querySelector(".login_register_block");
  const loginRegister = document.querySelectorAll(".login__register");
  const loginLogin = document.querySelectorAll(".login__login");


  login.forEach(item => item.addEventListener("click", function(){
    body.classList.add("active");
    body.style.maxheight = loginBlock.scrollHeight +'px';
    loginBody.classList.add("displayLogin");
    if(menu.classList.contains('displayMenu')){
       menu.classList.remove("displayMenu")
    }
    loginRegister.forEach(item => item.addEventListener("click", function(){
      loginBlock.classList.add("closeLogin");
      registerBlock.classList.add("openRegister");
      body.style.maxheight = registerBlock.scrollHeight +'px';

    
    }))

    loginLogin.forEach(item => item.addEventListener("click", function(){
      loginBlock.classList.remove("closeLogin");
      registerBlock.classList.remove("openRegister");
    }))
    
  }))

  loginCross.addEventListener("click", function(){
    body.classList.remove("active");
    loginBody.classList.remove("displayLogin");
  })

if(body.style.width < "520px"){
  document.querySelector(".field-button input").value = 'Create an account'
}



//input range

(function () {
  const paragraph = document.querySelector('.filter-price'),
      text = document.createElement('label'),
      minPriceSpan = document.createElement('span'),
      maxPriceSpan = document.createElement('span'),
      minPriceInput = paragraph.querySelector('input[name="min-price"]'),
      maxPriceInput = paragraph.querySelector('input[name="max-price"]'),
      container = document.createElement('div'),
      bar = document.createElement('div'),
      whitePart = document.createElement('div'),
      point1 = document.createElement('div'),
      point2 = document.createElement('div'),
      multipler = 6;
  let margin = 0,
      width = 176;
  Array.from(paragraph.children).
      forEach(e => e.classList.add('visually-hidden'));
  text.appendChild(document.createTextNode('Price: $'));
  text.appendChild(minPriceSpan);
  text.appendChild(document.createTextNode(' - $'));
  text.appendChild(maxPriceSpan);
  minPriceSpan.textContent = minPriceInput.value = 0;
  maxPriceSpan.textContent = maxPriceInput.value = 1500;
  paragraph.appendChild(text);
  paragraph.appendChild(container);
  container.appendChild(bar);
  bar.classList.add('double-bar');
  bar.appendChild(whitePart);
  whitePart.classList.add('white-part');
  whitePart.appendChild(point1);
  point1.classList.add('point');
  whitePart.appendChild(point2);
  point2.classList.add('point');
  const {left, right} = whitePart.getBoundingClientRect();

  point1.addEventListener('mousedown', event => {
      function trackPoint1(event) {
          if (event.buttons == 0) {
              window.removeEventListener('mousemove', trackPoint1);
          } else {
              diff = event.clientX - lastX;
              lastX = event.clientX;
              if (margin + diff < 0 || lastX < left) {
                  width += margin;
                  minPriceInput.value = Number(minPriceInput.value)
                      - margin * multipler;
                  margin = 0;
              } else if (width - diff < 18 || lastX - left + 14> margin + width) {
                  margin += width - 18;
                  minPriceInput.value = Number(minPriceInput.value)
                      + (width - 18) * multipler;
                  width = 18;
              } else {
                  margin += diff;
                  minPriceInput.value = Number(minPriceInput.value) +
                      diff * multipler;
                  width -= diff;
              }
              whitePart.style.marginLeft = margin + 'px';
              whitePart.style.width = width + 'px';
              minPriceSpan.textContent = minPriceInput.value;
          }
      }

      let lastX = event.clientX;
      event.preventDefault();
      window.addEventListener('mousemove', trackPoint1);
  })

  point2.addEventListener('mousedown', event => {
      function trackPoint2(event) {
          if (event.buttons == 0) {
              window.removeEventListener('mousemove', trackPoint2);
          } else {
              diff = event.clientX - lastX;
              lastX = event.clientX;
              if (margin + width + diff > 176 || lastX > right) {
                  maxPriceInput.value = Number(maxPriceInput.value)
                      + (176 - margin - width) * multipler;
                  width = 176 - margin;
              } else if (width + diff < 18 || lastX - left - 14 < margin) {
                  maxPriceInput.value = Number(maxPriceInput.value)
                      - (width - 18) * multipler;
                  width = 18;
              } else {
                  width += diff;
                  maxPriceInput.value = Number(maxPriceInput.value)
                      + diff * multipler;
              }
              whitePart.style.width = width + 'px';
              maxPriceSpan.textContent = maxPriceInput.value;
          }
      }

      let lastX = event.clientX;
      event.preventDefault();
      window.addEventListener('mousemove', trackPoint2);
  })
})()

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

// plants__shopping

const shop = document.querySelectorAll(".plants__shopping");
const counter = document.querySelector(".header__counter");


shop.forEach(item => item.addEventListener("click", function(){
    let svg = this.querySelector("svg");
    svg.classList.toggle("green");
    let x = Number(counter.textContent);
    let y = x;
    if(svg.classList.contains("green")){
        y +=1;
        counter.textContent = y;
    }
    else{
        y -=1;
        counter.textContent = y;
    }
     
}))
