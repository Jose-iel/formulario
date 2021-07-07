const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];

let max = 4;
let current = 1;    

function limpar(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const office = document.getElementById('office');
    const select = document.getElementById('select');
    const aviso = document.getElementById('aviso');
  
    name.style.cssText = "border:1px solid lightgrey; transition: 0.2s"
    email.style.cssText = "border:1px solid lightgrey; transition: 0.2s"
    office.style.cssText = "border:1px solid lightgrey; transition: 0.2s"
    select.style.cssText = "border:1px solid lightgrey; transition: 0.2s"
    aviso.style.display='none'
}

function firstButton(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const office = document.getElementById('office');
    const select = document.getElementById('select');
    const aviso = document.getElementById('aviso');

  if ( name.value == "" || email.value == "" || office.value == "" || select.value == "") {
    name.style.cssText = "border:1px dashed #ff0000; transition: 0.2s"
    email.style.cssText = "border:1px dashed #ff0000; transition: 0.2s"
    office.style.cssText = "border:1px dashed #ff0000; transition: 0.2s"
    select.style.cssText = "border:1px dashed #ff0000; transition: 0.2s"
    aviso.style.display='block'

    return false;
    }else{
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    }
};
nextBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});


submitBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  //setTimeout(function(){
    //window.location.replace("download.html");
  //},500);
});

prevBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

const subRadio = document.getElementById("subRadio");

function openSub(){
  if (window.matchMedia("(max-width: 600px)").matches) {
    subRadio.style.display = 'inline-block';
  }else{
    subRadio.style.display = 'flex';
  }
}

const subRadio2 = document.getElementById("subRadio2");

function openSub2(){
  if (window.matchMedia("(max-width: 600px)").matches) {
    subRadio2.style.display = 'inline-block';
  }else{
    subRadio2.style.display = 'flex';
  }
}

