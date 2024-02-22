const nextButton = document.querySelector(".plants__next");

nextButton.addEventListener("click", function(){
    const defaultB = document.querySelector(".default__block");
    const nextB = document.querySelector(".next__block");
   nextButton.classList.toggle("rotate"); 
   if(nextButton.classList.contains("rotate")){
       defaultB.classList.add("closeBlock");
       nextB.classList.add("openBlock");
   }    
   else{
       defaultB.classList.remove("closeBlock");
       nextB.classList.remove("openBlock");
   }    
})   


 let field = document.querySelector(".plants__content");

 let li = Array.from(field.children);

 let select = document.getElementById("select");
 let arr = [];

 
 for(let i of li){
     const last = i.lastElementChild;
     const x = last.textContent.trim();
     const y  = Number(x.substring(1));
     i.setAttribute('data-price', y);
     arr.push(i);
    }



    select.onchange = sortingValue;
    
function sortingValue(){
    if(this.value === 'Default'){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let ar = arr;
        Pagination(ar);
        
    }
    if(this.value === 'LowtoHigh'){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let list = li.sort((a,b)=>{
            const ax = a.getAttribute('data-price');
            const bx = b.getAttribute('data-price');
            
            return ax-bx;
        });
        Pagination(list);
    }
    if(this.value === 'HightoLow'){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let list2 = li.sort((a,b)=>{
            const ax = a.getAttribute('data-price');
            const bx = b.getAttribute('data-price');
            
            return bx-ax;
        });
        Pagination(list2);
    }
 }

 function Pagination(a){
    // const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');
    const seventh = document.querySelector('.seventh');

    second.addEventListener("click", function(){
        field.append(...a.slice(9,18));
    });

   third.addEventListener("click", function(){
        field.append(...a.slice(18,27));
    });

   fourth.addEventListener("click", function(){
        field.append(...a.slice(27,36));
    });

    fifth.addEventListener("click", function(){
        field.append(...a.slice(36,45));
    });

    sixth.addEventListener("click", function(){
        field.append(...a.slice(45,54));
    });

    seventh.addEventListener("click", function(){
        field.append(...a.slice(54,63));
    });
    
    field.append(...a.slice(0,9));
 }



// filter


const price = document.querySelector(".filter-price");
const spans  = price.querySelectorAll("span");
const filterButton = document.querySelector(".plants__categories_filter");
const additionalBlock = document.querySelector(".additional_plants");




function FilterPlants(){
    // let min = spans[0];
    // let max = spans[1];
    let min = 100;
    let max = 170;

    console.log(arr);

    
    
}

FilterPlants();




